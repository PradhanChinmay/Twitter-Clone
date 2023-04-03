import React, { useState } from 'react'
import './styles/TweetBox.css'
import { Button, Avatar } from '@mui/material'
import db from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

const TweetBox = () => {

  const colRef = collection(db, 'posts');

  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    e.preventDefault();

    addDoc(colRef, {
      displayName: 'Patrick Bateman',
      username : 'paaal',
      verified : true,
      text : tweetMessage,
      image : tweetImage,
      avatar : "https://upload.wikimedia.org/wikipedia/en/5/52/American-psycho-patrick-bateman.jpg"
    })

    setTweetMessage('');
    setTweetImage('');
  }

  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox--input">
                <Avatar src='https://upload.wikimedia.org/wikipedia/en/5/52/American-psycho-patrick-bateman.jpg'/>
                <input value={tweetMessage} onChange={(e) => setTweetMessage(e.target.value)} 
                    type="text" placeholder="what's happening?"/>
            </div>
            <input className='tweetBox--imageInput' value={tweetImage} onChange={e => setTweetImage(e.target.value)}
                    type="text" placeholder='Optional : Enter image URL'/>
            <Button onClick={sendTweet} className='tweetBox--tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox