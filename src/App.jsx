import './App.css'
import {Route, Routes, NavLink} from "react-router-dom"
// import { useEffect } from 'react'
import Card from './components/appCard/Card.jsx'
import Home from './components/home/Home.jsx'
import Header from './components/Header/Header.jsx'
import ConfirmDownload from './components/downloadConfirmation/ConfirmDownload.jsx'
import AppInfoPage from "./components/appInfoPage/AppInfoPage.jsx"



import logo from './components/static/pyapps_192.jpeg'

export default function App() {
    
    // const f = await fetch('https://PyApp.dsx4.repl.co/suggestion/getall')
    // const res = f.json()
    // console.log(res)
  return (
<>
    <main class="main-content">
 	<Header/>
	  <Routes>
      <Route 
          path='/'
          element={<Home/>}
          />
          <Route
              path='/store'
              element={
                  <div className='card-container'>
                  <Card 
                      title='imagic' 
                      desc='this app can convert your images from any format to any format' 
                      url='https://firebasestorage.googleapis.com/v0/b/pythons-apps-by-ds.appspot.com/o/Imagic%20(v1.2.0stable).exe?alt=media&token=9c52ac6d-b988-4588-b242-25ec289b06c4'
                      />
                  <Card 
                      title='codeQRcreator' 
                      desc='codeQRcreator allows you to create QR codes for any type of data.
With a simple and intuitive interface, you can generate custom QR codes for your 
specific needs.'
                      url='https://firebasestorage.googleapis.com/v0/b/pythons-apps-by-ds.appspot.com/o/codeQRcreator_v1.0.0.exe?alt=media&token=97b0c2b1-1d2b-41b9-9130-6a57f880b39f'
                      />
                  <Card 
                      title='PySpammer'
                      desc="Using this app you can spam any text or statement how many times you want. Don't abuse it because it does not have any stop button yet.t" 
                      url='https://firebasestorage.googleapis.com/v0/b/pythons-apps-by-ds.appspot.com/o/PySpammer.exe?alt=media&token=db15f8c7-4099-4838-9c3f-de8984249d50'
                      />
                  </div>
              }
          />
          <Route
              path='/download/:id'
              element={<ConfirmDownload/>}
          />
          <Route
              path='/about/app/:id'
              element={<AppInfoPage/>}
          />
      </Routes>
    </main>
</>
  )
}
