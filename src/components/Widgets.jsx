import React from 'react'
import './styles/Widgets.css'
import SearchIcon from '@mui/icons-material/Search';

//the twitter-embed pluggin
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed'

const Widgets = () => {
  return (
    <div className='widgets'>
        <div className="widgets--input">
            <SearchIcon className='widgets--searchIcon' />
            <input type="text" placeholder='Search Twitter' />
        </div>

        <div className='widgets--widgetContainer'>
            <h2>What's Happening</h2>

            <TwitterTweetEmbed tweetId={'1632267558534651904'} />

            <TwitterTimelineEmbed 
              sourceType='profile'
              sourceName='cleverqazi'
              options={{ height : 400 }}
            />

            <TwitterShareButton url={ 'https://facebook.com/cleverprogrammer' } 
              options={ {text : '#reactjs is awesome', via : 'cleverqazi'} }/>
        </div>
    </div>
  )
}

export default Widgets