import React from 'react';
import "./SwipeButtons.css"
import ReplayIcon from "@material-ui/icons/Replay"
import CloseIcon from "@material-ui/icons/Close"
import StarRateIcon from "@material-ui/icons/StarRate"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FlashOnIcon from "@material-ui/icons/FlashOn"
import IconButton from "@material-ui/core/IconButton"


function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButton_repeat">
            <ReplayIcon  fontSize="large" style={{color:"#f5b748"}}></ReplayIcon>
            </IconButton>
             
            <IconButton className="swipeButton_left">
            <CloseIcon  fontSize="large" style={{color:"#ec5e6f"}}/>   
            </IconButton>

            <IconButton className="swipeButton_star">
            <StarRateIcon fontSize="large" style={{color:"#62b4f9"}}/>    
            </IconButton>

            <IconButton className="swipeButton_right">
            <FavoriteIcon fontSize="large" style={{color:"#f5b748"}}/>  
            </IconButton>

            <IconButton className="swipeButton_lightning" style={{color:"#915dd1"}} >
            <FlashOnIcon fontSize="large"/> 
            </IconButton>

    
        </div>
    );
}

export default SwipeButtons;