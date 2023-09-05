import {NavLink, useLocation, useParams, useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
import '../appCard/card.css';
import './confirmdownload.css';

function ValidUrl(props){
    return <>
            <p>click <b>download now</b> for starting the download process of {props.id}</p>
            <a href={props.url} className='download-link'>download now</a>
		<p class="note">This extra page is for ensuring that you didn&apos;t press that download button by mistake.</p>
            </>
}
// relocator(`/about/app/${params.id}`)
function InvalidUrl(){
    return (
        <>
            <strong>
            Looks like your are in a wrong page
            </strong>
            <button>
            <NavLink to='/'>go back</NavLink>
            </button>
        </>
    )
}

export default function ConfirmDownload(){
    const relocator = useNavigate()
    const params = useParams()
    const location = useLocation() ;
   const stylesheet = {
       display: 'grid',
       placeItems: 'center',
       padding: '1em',
   }
    
    return (
        <div style={stylesheet}>{
            location?.state?.fromCard || false ? <ValidUrl id={params.id} url={location.state.url}/> : <InvalidUrl/>
        }
        
        </div>
    )
}
