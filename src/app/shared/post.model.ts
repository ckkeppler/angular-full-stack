export class Post {
  id: string;
  user: string;
  comment: string;
  constructor(obj: any = null) {
    if (obj != null) {
      Object.assign(this, obj);
    }
  }
}
