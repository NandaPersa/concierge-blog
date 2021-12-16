import api from "../api";
import { Author } from "./types";

export async function getAuthors(): Promise<Author> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data }: Author[] | any = await api.get(`/authors`);

    return data;
  } catch (error: any) {
    return error;
  }
}
