import api from "../api";
import { Post, RequestData } from "./types";

export async function getNPost(
  qtd: number,
  type: string
): Promise<RequestData> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data }: Post[] | any = await api.get(`posts/latest/${qtd}/${type}`);

    if (data.lenght === 0) {
      return {
        message: "Não foi possível listar os posts.",
        success: false,
        error: data?.error,
        posts: [],
      };
    }

    return {
      message: "Posts retornados com sucesso.",
      success: true,
      posts: data,
    };
  } catch (error) {
    return {
      message: "Não foi possível retornar os posts.",
      success: false,
      error,
    };
  }
}

export async function getMoreViewsPosts(
  qtd: number,
  type: string
): Promise<RequestData> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data }: Post[] | any = await api.get(`posts/views/${qtd}/${type}`);

    if (data.lenght === 0) {
      return {
        message: "Não foi possível listar os posts.",
        success: false,
        error: data?.error,
        posts: [],
      };
    }

    return {
      message: "Posts retornados com sucesso.",
      success: true,
      posts: data,
    };
  } catch (error) {
    return {
      message: "Não foi possível retornar os posts.",
      success: false,
      error,
    };
  }
}

export async function getAllPosts(page = 1): Promise<RequestData> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data }: Post[] | any = await api.get(`posts/?page=${page}`);

    if (data.lenght === 0) {
      return {
        message: "Não foi possível listar os posts.",
        success: false,
        error: data?.error,
        posts: [],
      };
    }

    return {
      message: "Posts retornados com sucesso.",
      success: true,
      posts: data,
    };
  } catch (error) {
    return {
      message: "Não foi possível retornar os posts.",
      success: false,
      error,
    };
  }
}

export async function getPostById(id: number): Promise<RequestData> {
  try {
    const { data }: Post | any = await api.get(`posts/${id}`);

    return {
      message: "Post retornado com sucesso.",
      success: true,
      post: data,
    };
  } catch (error) {
    return {
      message: "Não foi possível retornar o post.",
      success: false,
      error,
    };
  }
}
