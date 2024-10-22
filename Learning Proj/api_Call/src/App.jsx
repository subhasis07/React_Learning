import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/footer'
import { DataContext } from './context/UserContext'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/contactUs'
import Home from './pages/Home'
import Top from './components/Top'

function App() {
  
  const[data,setData]=useState([]);
  
  const getData= async ()=>{

    const res= await axios.get("https://picsum.photos/v2/list?limit=10")
    setData(res.data);
  }

  const receivedData=useContext(DataContext);
  return (
    <>

{/* //api-call */}
      {/* <button onClick={getData} className='bg-orange-400 text-black m-4 p-4 rounded-md'>Get Data</button>
      {data.map((elem)=>{
        return <div key={elem.id} className='border border-black p-2 m-2 flex justify-around'>
          <h1>{elem.author}</h1>
          <img className='h-20 w-30' src={elem.download_url}/>
        </div>
      })} */}


{/* //react-router-dom*/}
      <Top/>
      <div>
        <Routes>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>

{/* //context-api */}
{/* 
      <h1>App.js file {receivedData.name}</h1>
      <Header/>
      <Footer/> */}



    </>
  )
}

export default App
