import { SwipeableDrawer } from '@material-ui/core';
import Person from '@material-ui/icons/Person';
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css"

function TinderCards() {
    const [people,setPeople]=useState([//people names

        {
            name:'Martin Garrix',
            url:"https://pbs.twimg.com/profile_images/1393521616705970178/f6zUmv7a_400x400.jpg",
        },

        {
            name:'Alesso',
            url:"https://edm.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTYzODA2NTIzMDExNzA0NTQ1/alesso.png",
        },
    ]);

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

                     <div style={{backgroundImage:`url(${people.url})`}}/*inline styling*/ className="card">
                         <h3>{people.name}</h3>
                         
                     </div>

                </TinderCard>
            )) }

            </div>
          
        </div>
    );
}

export default TinderCards;