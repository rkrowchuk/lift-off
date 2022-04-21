import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "grommet";

export default function PostListItem(props) {
  console.log(typeof props.image);
  return (
    <Card  height="small" width="large" background="light-1">
      <article className="post">
      <CardHeader pad="medium">
          {/* <img className="post--avatar" src={post.avatar} /> */}
          <h2 className="post--name">{props.name}</h2>
        </CardHeader>
        <CardBody pad="medium">
          <p>{props.text}</p>
          <img src={props.image} alt="error" />
        </CardBody>

        {/* <div className="post--image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1280px-The_Earth_seen_from_Apollo_17.jpg" />
        </div> */}
        <CardFooter pad={{horizontal: "small"}} background="light-2">
          <small className="footer--age">{props.time}</small>
        </CardFooter>
      </article>
    </Card>
  );
}
