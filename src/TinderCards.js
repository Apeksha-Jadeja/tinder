import { SwipeableDrawer } from '@material-ui/core';
import Person from '@material-ui/icons/Person';
import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css"
import axios from './axios';

function TinderCards() {
    const [people,setPeople]=useState([]);//when tinder cards load, this code runs once
    useEffect(()=>{
    async function fetchData(){
        const req =await axios.get('./tinder/cards');
        setPeople(req.data);
    }
    fetchData();
    },[]/*very imp to keep this empty so that you it wont run everytime ex name changes*/)
console.log(people);
//functions

const swiped=(direction,nameToDelete)=>{
    console.log("removing: "+nameToDelete);
    //setLastDirection(direction);
}

const outOfFrame=(name)=>{
    console.log(name +" left the screen ");
}

//main code
    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
            {people.map(people=>(
                <TinderCard className="swipe" 
                key={people.name} 
                preventSwipe={["up","down"]}
                 onSwipe={(dir)=>swiped(dir,people.name)} 
                 onCardLeftScreen={()=>outOfFrame(people.name)}>

                     <div style={{backgroundImage:`url(${people.imageUrl})`}}/*inline styling*/ className="card">
                         <h3>{people.name}</h3>
                         
                     </div>

                </TinderCard>
            )) }

            </div>
          
        </div>
    );
}

export default TinderCards;