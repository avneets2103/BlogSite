import React, { useState, useEffect } from "react";
import { useParams, useSearchParams , useNavigate} from "react-router-dom";
import postsService from "../../Appwrite/postsService";
import fileService from "../../Appwrite/fileService";
import './PostView.css'
import DeletePost from "../DeletePost/DeletePost";
import DOMPurify from "dompurify"; // Import DOMPurify
import { useSelector } from 'react-redux';

function PostView() {
  const [post, setPost] = useState({});
  const { documentId } = useParams();
  const [img, setImg] = useState(null);

  const userData = useSelector((state)=>{
    console.log(state.auth.userData);
    return state.auth.userData;
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const result = await postsService.getPost(documentId);
        console.log(result);
        setPost(result);
      } catch (error) {
        alert(error);
      }
    };
    fetchPost();
  }, []); // Empty dependency array to fetch posts only once when the component mounts
  useEffect(()=>{
    const fetchData2 = async () => {
      try {
        const res = await fileService.getFileView(post.ImageId);
        setImg(res);
      } catch (error) {
        alert("Error in PostPreview file get");
      }
    };
    fetchData2();
  }, [post])
  
  const title = post.Title;
  const ImgId = post.ImageId;
  const content = post.Content;
  const sanitizedContent = { __html: DOMPurify.sanitize(content) };
  const navigate = useNavigate();
  const postUser = post.UserName;
  const owner = (postUser == userData.email);

  return(
    <div className="viewPage">
        <div className="postView">
        <div className="viewTitle">{title}</div>
        <div className="viewImg">{img && <img src={img} alt="photo"/>}</div>
        <div className="viewContent" dangerouslySetInnerHTML={sanitizedContent}></div>
        </div>
        <div className="deletion">
          {owner && <DeletePost documentId={documentId}/>}
        </div>
    </div>
  );
}

export default PostView;
