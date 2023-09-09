export type Post = {
  content: string,
  data: {[key: string]: any},
  filePath: string
}

export interface TagContainer {
  tag: string;
  ref: React.Ref; // to access tags and dim them once mouse
  // hovers over a blog topic
}
