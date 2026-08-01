import NetworkGraph3D from "../components/NetworkGraph.jsx";
import data from "../data/knowlege.json";

export default function DataBasePage(){

    return(
        <>
            <NetworkGraph3D data={data} />
        </>
    )
}