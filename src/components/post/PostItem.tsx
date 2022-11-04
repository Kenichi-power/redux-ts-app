import React, { FC } from "react";

import { deletePostsById } from "../../features/post/postSlice";
import { useAppDispatch } from "../../store/store";
import { PostItemWrapper } from "./Post.style";

interface PostItemProps {
  post: {
    id: number;
    title: string;
  };
}
const PostItem: FC<PostItemProps> = ({ post }) => {
  const dispatch = useAppDispatch();

  return (
    <PostItemWrapper onClick={() => dispatch(deletePostsById(post.id))}>
      {post.id}) {post.title}
    </PostItemWrapper>
  );
};

export default PostItem;
