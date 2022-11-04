import React from "react";
import { useSelector } from "react-redux";
import { getPosts } from "../../features/post/postSlice";
import { PostButton, PostMainDiv } from "./Post.style";
import PostItem from "./PostItem";
import Spinner from "../../assets/spinner/Spinner";
import { useAppDispatch, useAppSelector } from "../../store/store";

const Posts = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state: any) => state.post.posts);
  const { status, error } = useSelector((state: any) => state.post);

  return (
    <PostMainDiv>
      <PostButton type="submit" onClick={() => dispatch(getPosts())}>
        Get posts
      </PostButton>
      {status === "loading" && <Spinner />}
      {error && <h2>An error occured: {error}</h2>}
      {posts?.map((post: { id: number; title: string }) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </PostMainDiv>
  );
};

export default Posts;
