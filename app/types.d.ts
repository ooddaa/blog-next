export interface Post {
  id: number;
  slug: string;
  header: string;
  subheader: string;
  dateCreated: [number, number, number];
  author: string;
  timeToRead: string;
  timeToThink: string;
  tags: string[];
  body: JSX;
  version?: string
}

export interface TagContainer {
  tag: string;
  ref: React.Ref; // to access tags and dim them once mouse
  // hovers over a blog topic
}
