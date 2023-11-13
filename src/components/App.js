// create your App component here
import React,{useState,useEffect} from 'react';
 function App(){
  const [images,setimages]=useState([])
  const [isloading,setisloading]= useState(true)

  useEffect(()=>{
    fetch( "https://dog.ceo/api/breeds/image/random")
    .then(res=>res.json())
    .then(data=>{
  
      setimages(data)
      setisloading(false)
    });
},[])
  return(
    <>
    {isloading ? <p>Loading...</p>: null}
    <img src={images.message} alt="A Random Dog"/>
    </>
  )
 }


 export default App