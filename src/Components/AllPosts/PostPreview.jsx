import React, { useEffect, useState } from 'react';
import fileService from '../../Appwrite/fileService';
import { useNavigate } from 'react-router-dom';
import './PostPreview.css'

function PostPreview(props) {
  const [img, setImg] = useState(null);
  const post = props.post;
  const title = post.Title;
  const ImgId = post.ImageId;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fileService.getFileView(ImgId);
        setImg(res);
      } catch (error) {
        alert("Error in PostPreview file get");
      }
    };

    fetchData();
  }, [ImgId]); // Include ImgId in the dependency array to re-run the effect when ImgId changes

  function blogOpenHandler(){
    const documentId = props.post.$id;
    navigate(`/PostView/${documentId}`)
  }

  return (
    <div className='previewPost' onClick={blogOpenHandler}>
      <div className="previewImg">{img && <img src={img} alt="photo"/>}</div>
      <div className="previewTitle">{title}</div>
    </div>
  );
}

export default PostPreview;
