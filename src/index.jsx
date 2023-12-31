import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import App from './App'


// function connectToSW(){
//     if('serviceWorker' in navigator) {
//       window.addEventListener('load', () => {
//         navigator.serviceWorker.register('../sw.js', { scope: '/' })
//       })
//     }
// }

// connectToSW()

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
        <BrowserRouter>
		<App />
        </BrowserRouter>
	</React.StrictMode>
)