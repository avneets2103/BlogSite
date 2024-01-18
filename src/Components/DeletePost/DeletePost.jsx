import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import postsService from '../../Appwrite/postsService';

function postDeletion(documentId, navigate) {
  const fetchPost = async () => {
    try {
      const result = await postsService.deletePost(documentId);
      console.log(result);
      navigate("/Home");
    } catch (error) {
      alert(error);
    }
  };
  fetchPost();
}

function DeletePost() {
  const { documentId } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    postDeletion(documentId, navigate);
  };

  return (
    <div onClick={handleDelete}>
      Delete
    </div>
  );
}

export default DeletePost;
