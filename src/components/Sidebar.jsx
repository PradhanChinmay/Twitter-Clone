import React from 'react';
import './styles/Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import SidebarOptions from './SidebarOptions';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            {/* Twitter icon */}
            <TwitterIcon className='sidebar--twitterIcon'/>

            <SidebarOptions active Icon={HomeIcon} text='Home'/>
            <SidebarOptions Icon={SearchIcon} text='Explore' />
            <SidebarOptions Icon={NotificationsNoneIcon} text='Notifications' />
            <SidebarOptions Icon={MailOutlineIcon} text='Messages' />
            <SidebarOptions Icon={BookmarkBorderIcon} text='Bookmarks' />
            <SidebarOptions Icon={ListAltIcon} text='Lists' />
            <SidebarOptions Icon={PermIdentityIcon} text='Profile' />
            <SidebarOptions Icon={MoreHorizIcon} text='More' />
            {/* Sidebar option components */}

            {/* Button -> tweet */}
            <Button variant='outlined' className='sidebar--tweet' fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar;