import { useParams } from "react-router-dom";

export default function AppInfoPage(){
    const params = useParams()
    return <h4>app anme : - {params.id}</h4>
}