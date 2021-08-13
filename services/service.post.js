const PostModel = require("../models/model.post");
let Validator = require("fastest-validator");

let posts = {};
let counter = 0;

let postValidator = new Validator();

let namePattern = /([A-Za-z\-\’])*/;

// post validator schema
const postVSchema = {
  id: {
    type: string,
    min: 3,
  },
  user: {
    type: string,
    min: 1,
    max: 20,
    pattern: namePattern,
  },
  comment: {
    type: string,
    min: 1,
    max: 500,
  },
};

// post service class with validator

export class PostService {
  static create(data) {
    const vRes = postValidator.validate(data, postVSchema);

    // validation failed
    if (!(vRes === true)) {
      let errors = {},
        item;
      for (const index in vRes) {
        item = vRes[index];
        errors[item.field] = item.message;
      }
      throw {
        name: "Validator Error",
        message: errors,
      };
    }

    let post = new PostModel(data.user, data.comment);

    post.id = "p" + counter++;

    posts[post.id] = post;

    return post;
  }

  static retrieve(id) {
    if (posts[id] != null) {
      return posts[id];
    } else {
      throw new Error("Unable to retrieve a post by (id:" + id + ")");
    }
  }

  static update(id, data) {
    if (posts[id] != null) {
      const post = posts[id];

      Object.assign(post, data);
    } else {
      throw new Error("Unable to retrieve a post by (id:" + pid + ")");
    }
  }

  static delete(id) {
    if (posts[id] != null) {
      delete posts[id];
    } else {
      throw new Error("Unable to retrieve a post by (id:" + pid + ")");
    }
  }
}
