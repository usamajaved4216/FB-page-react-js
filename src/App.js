import FbImageLibrary from 'react-fb-image-grid'
import logo from "./logo.svg"
import './App.css';
import { useState, useEffect } from 'react';
import HomePage from './Views/HomePage';

import Feet from './component/Feet';
import TopItems from './component/Top';

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
        <h1 style={{fontWeight:'bolder', color:'blue'}} >Facebook</h1>
      

        {postData.map(item => (
          <div key={item.id}>
            <div className='styling'>
             
               
             <TopItems/>
              <HomePage brand={item.brand}  text={item.title} type={item.description} price={item.price} rating={item.rating} />
              
                <div>
                  <FbImageLibrary images={item.images} />
                </div>
              {/* <hr></hr> */}
              <Feet/>
              
            </div>
          </div>
        ))}
      </header>
    </div>
  );
}
export default App;






