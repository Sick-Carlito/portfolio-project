import { Typography } from '@material-ui/core';
import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className ='profile container_shadow'> 
            <div className = 'profile_name'>
                <Typography className = "name">Carl</Typography>
                <Typography className = "title">Carlito</Typography>
            </div>

            <figure className = "profile_image">
                <img src={require('../../assets/images/profileImage.jpeg')} alt="carl" />
            </figure>

            <div className="profile_information">
                Insert Timeline
                <br/>
                <button>My button</button>
            </div>
        </div>
    )
}

export default Profile
