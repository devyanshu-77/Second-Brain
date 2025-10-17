export interface Content {
  title: string;
  _id: string;
  link: string;
  user: string;
  tags: string[];
  type: string;
}

export interface AddContentData {
  title: string;
  link: string;
  tags: string;
  type: string;
}