import React, { useState, useRef } from "react";
import "./CreatePost.css";
import fileService from "../../Appwrite/fileService";
import postsService from "../../Appwrite/postsService";
import { Editor } from "@tinymce/tinymce-react";
import ImageShower from "./imageShower";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const editorRef = useRef(null);
  // Title Handling
  const [title, setTitle] = useState("");
  // Image Handling
  const [image, setImage] = useState(null); // STORES THE IMAGE ID
  const [imageAdded, setImageAdded] = useState(false); // STATUS OF IMAGE ADDED
  const [img, setImg] = useState(null); // IMAGE ITSELF
  // Content Handling
  const user = useSelector((state) => {
    return state.auth.userData;
  });
  const navigate = useNavigate();

  const handleImageChange = async (e) => {
    const selectedImage = e.target.files[0];
    setImg(selectedImage);
    setImageAdded(true);
    try {
      const result = await fileService.uploadFile(selectedImage);
      console.log("Upload successful:", result);
      setImage(result.$id);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading, pls try again");
    }
  };

  const postCreation = (post) => {
    postsService.createPost(post)
      .then((res) => {
        console.log("Issue happening here");
        setTitle("");
        setImageAdded(false);
        setImage("");
        setImg(null);
        console.log(title, imageAdded, image);
        navigate("/Home/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  async function postMakeHandler(e) {
    e.preventDefault();
    const post = {
      Title: title,
      Content: editorRef.current.getContent(),
      ImageId: image,
      Status: true,
      UserName: user.email,
    };
    console.log(post);
    postCreation(post);
  }

  return (
    <div className="fullCreatePostPage">
      <form onSubmit={postMakeHandler}>
        <div className="postInputs">
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Some catchy topic"
          />
        </div>
        <div className="postInputs">
          <label htmlFor="Image">Image</label>
          <input type="file" name="imageInput" onChange={handleImageChange} />
          {imageAdded && img && <ImageShower img={URL.createObjectURL(img)} />}
          {}
        </div>
        <Editor
          className="postInputs"
          apiKey="txoqjm60jthsz4300c0cyr4la1ffu3npkqvxsa83hvz7cj1w"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>Your content here!</p>"
          init={{
            height: 400,
            menubar: true,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | z" +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
