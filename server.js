const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Post = require("./models/model.post");
const { PostService } = require("./services/service.post");

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/socialApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log(err);
  });

// Define the JSON parser as a default way
// to consume and produce data through the
// exposed APIs
app.use(express.json());

// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.
const distDir = __dirname + "/dist/";
app.use(express.static(distDir));
app.use(methodOverride("_method"));

app.use("/api/v1/generate_uid", generate_uid);

// Init the server
const server = app.listen(process.env.PORT || 8080, () => {
  const port = server.address().port;
  console.log("App is now running on PORT ", port);
});

/*  "/api/status"
 *   GET: Get server status
 *   PS: it's just an example, not mandatory
 */
app.get("/api/status", (req, res) => {
  res.status(200).json({ status: "UP" });
});

//  get UID

app.get("/api/posts", async (req, res) => {
  const { user } = req.params;
  const posts = await Post.find({});
  console.log(posts);
  res.json({ error: "Invalid" });
});

app.post("/api/posts", async (req, res) => {
  //   const newPost = new Post(req.body);
  //   await newPost.save();
  //   console.log(newPost);
  //   res.redirect("/posts");
  const body = req.body;
  try {
    const newPost = await PostService.create(body);
    if (body.id != null) {
      newPost.id = body.id;
    }
    newPost.save();
    console.log(newPost);
    return res.status(201).json({ post: post });
  } catch (err) {
    if (err.name === "Validation Error") {
      return res.status(400).json({ error: error });
    }

    return next(err);
  }
});

app.get('/api/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // const post = await PostService.retrieve(req.params.id);
        const post = await Post.findById(id)
        return res.json({ post: post});
    }
})
