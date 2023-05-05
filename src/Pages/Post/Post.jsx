import React, { useState } from 'react';

//icon
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TextsmsIcon from '@mui/icons-material/Textsms';

import "./Post.scss";

function Post({data}) {
    const [like,setLike]=useState(false)
    const likeHandeler=()=>{
        setLike(!like)
    }
  return (
    <div className='post'>
        <div className="user">
            <div className="userinfo">
               <img src={data.profile} alt="user" /> 
               <div className="detailse">
               <span>{data.name}</span>
               <span>1 min ago</span>
               </div>
            </div>
        <MoreHorizIcon/>
        </div>
        <div className="contact">
            <p>{data.desc}</p>
            <img src={data.image} alt="" />
        </div>
        <div className="info">
            <div className="item">
        {!like ? <FavoriteBorderIcon onClick={likeHandeler}/> :<FavoriteIcon onClick={likeHandeler} style={{color:"red"}}/> }
        12 Likes
            </div>
            <div className="item">
                <TextsmsIcon style={{color:"blue"}}/>
                12 Comments
            </div>
            <div className="item">
                <ShareIcon style={{color:"#555"}}/>
                Shaired
            </div>
        </div>
    </div>
  )
}

export default Post