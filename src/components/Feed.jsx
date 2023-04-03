import React, { useEffect, useState } from 'react'
import Post from './Post'
import './styles/Feed.css'
import TweetBox from './TweetBox'
import db from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import FlipMove from 'react-flip-move'

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const colRef = collection(db, 'posts');

  useEffect(() => {
    getDocs(colRef).then(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()))
    }).catch(err => console.log(err));
  });

  return (
    <div className='feed'>
        {/* Header */}
        <div className='feed--header'>
            <h2>Home</h2>
        </div>

        {/* Tweetbox */}
        <TweetBox />

        <FlipMove>
        { posts.map(post => (
          <Post 
            key={colRef.id}
            displayName={post.displayName} 
            username={post.username}
            verified={post.verified} 
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />)) }
        </FlipMove>
    </div>
  )
}

export default Feed