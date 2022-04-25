import React, { useState }  from 'react';
import axios from "axios"; 
import "../styles/CreatePost.scss";
import FormData from 'form-data';

export default function CreatePost(props) {

  const [post, setPost] = useState("");
  const [image, setImage] = useState("");
  const apiImageKey = process.env.REACT_APP_IMG; 
  const data = new FormData();

  // RK-tried creating the form to send post request
  data.append("headers", apiImageKey);
  data.append("image", image);

  //const user = localStorage.getItem("liftoffUser");
  const user = props.user;
  // const userData = JSON.parse(user);
  const userId = user.id;

  const handleSubmit =(e) => {
    e.preventDefault();
    console.log("post:", post );
    axios
      .post(`https://api.imgbb.com/upload`)
    .then((res) => {
      console.log(res.data);
    })
    // .then((res)) => {

    // }
    // axios
    //   .post("/api/posts", { text: post, user_id: userId })
    // .then((res) => { 
    //   console.log("from server:", res.data);
    // })
    .catch((err) => {
      console.log("error", err); 
    })
   }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} autoComplete='off'>
        <div>
          <input className="form--input"
            type="text"
            name="post"
            placeholder="description"
            value={ post }
            onChange={(event) => setPost(event.target.value)}
          />
        </div>
        <div>
          <input
            type="file"
            name="image"
            placeholder="image"
            value={ image }
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        <div>
          <button type="submit" value="Add Post" className="primary--btn">
            Post
          </button>
        </div>
      </form>

      <div></div>
    </div>
  );
}
