import { type } from "os";

/* eslint-disable camelcase */
export type Category = {
  id: number;
  title: string;
  color: string;
};

export type Author = {
  id: number;
  name: string;
  lastName: string;
  ocupation: string;
  image: string;
};

export type Comment = {
  text: string;
  name: string;
  image: string;
  token: string;
  post: {
    id: number;
  };
};

export type Post = {
  id: number;
  title: string;
  resume: string;
  content: string;
  author: Author;
  image: string;
  published_date: string;
  categories: Category[];
  slug?: string;
  views?: number;
  comments?: Comment[];
};

export type RequestData = {
  message: string;
  success?: boolean;
  posts?: Post[];
  error?: unknown | string;
  post?: Post;
};
