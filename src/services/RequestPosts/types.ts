/* eslint-disable camelcase */
export type Category = {
  id: number;
  title: string;
};

export type Post = {
  id: number;
  title: string;
  resume: string;
  content: string;
  image: string;
  published_date: string;
  categories: Category[];
};

export type RequestData = {
  message: string;
  success?: boolean;
  posts?: Post[];
  error?: unknown | string;
};
