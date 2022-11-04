import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: {
  posts: any[];
  status: any;
  error: any;
} = {
  posts: [],
  status: null,
  error: null,
};
export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    dispatch(setPosts(res.data));
  }
);

export const deletePostsById = createAsyncThunk(
  "posts/deletePostsById",
  async (id: any, { rejectWithValue, dispatch }) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    dispatch(deletePosts(id));
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    deletePosts: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: {
    [getPosts.pending.toString()]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [getPosts.fulfilled.toString()]: (state: any, action) => {
      state.status = "resolved";
      state.post = action.payload;
    },
    [getPosts.rejected.toString()]: () => console.log("Get posts: rejected"),
    [deletePostsById.fulfilled.toString()]: () =>
      console.log("Delete posts: fulfilled"),
    [deletePostsById.pending.toString()]: () =>
      console.log("Delete posts: pending"),
    [deletePostsById.rejected.toString()]: () =>
      console.log("Delete posts: rejected"),
  },
});

export const { setPosts, deletePosts } = postSlice.actions;
export default postSlice.reducer;
