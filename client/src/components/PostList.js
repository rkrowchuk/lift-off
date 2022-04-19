import React from "react";
import PostListItem from "./PostListItem";


const assignUserName = function(users, post) {
  for (const user of users) {
    if (user.id === post.user_id) {
      return user.name;
    }
  }
};

export default function Trial(props) {
const users = props.users;
  const feed = props.posts.map((post) => {
    return (
      <PostListItem
        key={post.id}
        name={assignUserName(users, post)}
        text={post.text}
        image={post.image}
        time={post.created_at}
      />
    );
  });
  return <ul>{feed}</ul>;
}
