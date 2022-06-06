import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "./postsSlice";

function AddpostForm() {
  const [title, settitle] = useState(" ");
  const [content, setcontent] = useState(" ");

  const dispatch = useDispatch();

  const titleChange = (e) => {
    settitle(e.target.value);
  };
  const contentChange = (e) => {
    setcontent(e.target.value);
  };

  const onSavePost = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content
        })
      );
      settitle(" ");
      setcontent(" ");
    }
  };
  return (
    <div>
       <label>Title :</label>
      <input
        type="text"
        id="postTitle"
        name="title"
        value={title}
        onChange={titleChange}
      /> <br/>
         <label>Content :</label>
      <textarea
        type="text"
        id="contentTitle"
        name="content"
        value={content}
        onChange={contentChange}
        rows="3"
        
      />  <br/>
      <button type="button" onClick={()=>{onSavePost()}}>save</button>
    </div>
  );
}

export default AddpostForm;
