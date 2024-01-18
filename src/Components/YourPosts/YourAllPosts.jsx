import React, { useState, useEffect } from 'react';
import './../AllPosts/AllPosts.css';
import postsService from '../../Appwrite/postsService';
import PostPreview from '../AllPosts/PostPreview';
import { useSelector } from 'react-redux';
import { Query } from 'appwrite'; // Make sure to import Query from 'appwrite'

function YourAllPosts() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state)=>{
    return state.auth.userData;
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = [Query.equal("UserName", [userData.email])];
        const result = await postsService.getPosts(query);
        console.log(result);
        setPosts(result);
      } catch (error) {
        alert(error);
      }
    };

    fetchPosts();
  }, [userData]); // Include userData in the dependency array

  return (
    <div className='HomePage'>
      <div className="HomeContent">
        {posts.documents && posts.documents.map((post) => (
          <PostPreview key={post.$id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default YourAllPosts;
