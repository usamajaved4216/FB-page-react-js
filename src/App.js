import FbImageLibrary from 'react-fb-image-grid'
import logo from "./logo.svg"
import './App.css';
import { useState, useEffect } from 'react';
import HomePage from './Views/HomePage';
import usama from "./assets/usama.jpg"
import like from "./assets/like.svg";
import comment from "./assets/comment.svg";
import share from "./assets/share.svg";
// import PostComp from './component/PostComponent';

function App() {
  const [postData, setPostData] = useState([])

  useEffect(() => {
    getApiData()
  }, [])


  function getApiData() {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setPostData(res.products);
      })

  }
  // getApiData()
  if (!postData.length) {
    return <h1>Loading...</h1>
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1>Facebook</h1>
        {/* <PostComp/> */}
        {/* {postData.map(function(item){
    // return <h2>{item.title}</h2>
    return <h2>{item.title}</h2>
  
  })} */}

        {postData.map(item => (
          <div key={item.id}>
            <div className='styling'>
              <div style={{ marginTop: 20, marginLeft: 10, paddingTop: 7 }} >
                <img src={usama} style={{ width: 50, borderRadius: 50, height: 50 }} />
                <a style={{color:'black',}} >usama javed</a>
              </div>
              <HomePage text={item.title} type={item.description} />
              <center>
                <div>
                  <FbImageLibrary images={item.images} />

                </div>
              </center><hr></hr>
              <div className='btn1' >

                <button className='btn'><img style={{ marginRight: 5, marginBottom: 4 }} src={like} alt='svg.img' />Like</button>
                <button className='btn'><img src={comment} alt='svg.img' /> Comment</button>
                <button className='btn'><img src={share} alt='svg.img' /> Share</button>

              </div>

            </div>

          </div>
        ))}

      </header>
    </div>
  );
}

export default App;
