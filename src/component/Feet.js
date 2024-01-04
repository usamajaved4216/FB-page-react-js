import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import share from '../assets/share.svg'
import { useState } from 'react';

function Feet() {
    

    return(
        
        <div className='btn'>
                <button className='btn1'> <img src={like} style={{ marginBottom: 5 }} ></img> Like</button>
                <button className='btn1'><img src={comment} style={{ marginRight: 5, marginBottom: 5 }} ></img>Comment</button>
                <button className='btn1'><img src={share} style={{ marginRight: 5, marginBottom: 5 }} ></img>Share</button>
              </div>
    )
}
export default Feet;