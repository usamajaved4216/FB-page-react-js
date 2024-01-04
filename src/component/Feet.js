import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import share from '../assets/share.svg';
import giflikebtn from '../assets/giflikebtn.gif';
import { useState } from 'react';

function Feet() {
    const [showGif, setShowGif] = useState(false);
    
    const mouseOver = () => {
        setShowGif(true);
    }

    const mouseOut = () => {
        setShowGif(false);
    }

    return(

        <div className='btn'>
                <button onMouseOver={mouseOver} onMouseOut={mouseOut} className='btn1'> <img src={like} style={{ marginBottom: 5 }} ></img> Like</button>
                { showGif && <div style={{ display: 'flex'}}>
                    <img src={giflikebtn} alt='Emoji gif'
                    style={{position: 'absolute', top: 780, left:400, width: 300, borderRadius: 10}}
                    />
                </div>

                }
                <button className='btn1'><img src={comment} style={{ marginRight: 5, marginBottom: 5 }} ></img>Comment</button>
                <button className='btn1'><img src={share} style={{ marginRight: 5, marginBottom: 5 }} ></img>Share</button>
              </div>
    )
}
export default Feet;