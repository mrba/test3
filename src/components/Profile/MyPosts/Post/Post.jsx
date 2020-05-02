import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://cs16planet.ru/steam-avatars/images/avatar1833.jpg" />
      {props.message}
      <div>
        <span>{props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
