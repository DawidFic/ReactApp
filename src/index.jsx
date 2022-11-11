import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import stich from './stich.jpg';
import stichGif from './giphy.gif';

let gif = false;

const HeaderStyling = {
    fontSize: '2em',
    textAlign: 'center'
}

const pStyling = {
    fontSize: '2em',
    textAlign: 'center'
}

const ImgStyling = {
    textAlign: 'center'
}

function Header() {
 return (
   <div style={HeaderStyling}>
   <h1>React Webpage</h1>
  </div>
 );
}

 function Body() {
    return (
        <div style={pStyling}>
            <p>This is a webpage made with the use of React</p>
        </div>
    )
 }

 function StichClick(e) {
    console.log("STICH WAS CLICKED!");
    if(gif) {
        e.target.setAttribute('src', stichGif);
        e.target.setAttribute('alt', 'GIF');
        gif = false;
        console.log("TRUE")
    } else {
        e.target.setAttribute('src', stich)
        e.target.setAttribute('alt', 'STICH')
        gif = true;
        console.log("FALSE")
    }
 }

 function ImageButton() {
    return (
    <div id="stichDiv" style={ImgStyling}>
        <button><img id="stichButton" src={stich} alt="stich" onClick={StichClick}/></button>
    </div>
    )
 }

 function DogAPI() {
    const[error, setError] = useState(null);
    const[dogs, setDogs] = useState("")
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(dog => {
            setDogs(dog.message)
        },
        error => {
            setError(error);
        }
        )
        
    },[])
    if(error){
        return(
        <div>
            <p>ERROR IN DOG API</p>
        </div>)
    } else {
        return(
        <div id="dogDiv">
            <img id="dogImg" src={dogs} />
        </div>)
    }
 }

 function App() {
    return (
     <>
      <Header />
      <Body />
      <ImageButton />
      <DogAPI />
     </>
    )
 }


// ========================================
const root = ReactDOM.createRoot(document.getElementById("root"));
try {
    root.render(<App />);
} catch (error) {
    console.log("FAILED TO RENDER THE COMPONENTS")
}
