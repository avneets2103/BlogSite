import React, { useState, useEffect } from 'react';
import './AllPosts.css';
import postsService from '../../Appwrite/postsService';
import PostPreview from './PostPreview';

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await postsService.getPosts();
        console.log(result);
        const data = result;
        const arr = data.documents;
        const arr2 = arr.reverse();
        data.documents = arr2;
        setPosts(data);
      } catch (error) {
        alert(error);
      }
    };

    fetchPosts();
  }, []);

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

export default AllPosts;
