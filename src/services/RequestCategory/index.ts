import api from "../api";
import { Category } from "../RequestPosts/types";

export async function getCategories(): Promise<Category> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data }: Category[] | any = await api.get(`/categories`);

    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return error;
  }
}
