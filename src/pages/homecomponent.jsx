import { useEffect, useState } from "react";
import SearchBar from '../component/SearchBar/searchbarComponent';
import VideoComponent from "../component/Video/videoComponent";
import VideoListComponent from "../component/Video/videoListComponent";
const Home = () => {
    const [allvideos, setAllVideos] = useState([]);
    const [video, setVideo] = useState ('');

    const getvideos = (text) => {
        fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDCTN6KNJsif8CZcjEp-mgdjQpIzzHTcVA&maxResults=6&q=${text}&type=video&part=snippet&videoEmbeddable=true`)
        .then((response) => response.json())
        .then ((data)=> {
            setAllVideos(data.items);
            setVideo(data.items[0]);
    })
    }
    const onSubmitText = (text) => {
        getvideos(text);
    }
    useEffect(()=>{
        getvideos('react js videos')
    },[])
    return(
        <div>
            <div className="container">
                {/* Header Section */}
                <div className="row py-3 align-items-center">
                    <div className="col-md-3">
                        <img style={{ width:'160px', height:'100px' }} src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png" alt="youtube-logo"></img>
                    </div>
                    <div className="col-md-6">
                        <SearchBar onSubmitText={onSubmitText}/>
                    </div>
                    <div className="col-md-3">
                        <h1>Sign In Option</h1>
                    </div>
                </div>
                {/* Body Section */}
                <div className="row py-3">
                    <div className="col-md-9 p-0">
                        <VideoComponent video={video}/>
                    </div>
                    <div className="col-md-3">
                        <VideoListComponent allvideos={allvideos} clickVideo={(clickItem) => setVideo(clickItem)} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;


//const API = 'AIzaSyDWYtqxdI6B1U_aES4dipsF8gWU7jjql_Q';
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyDWYtqxdI6B1U_aES4dipsF8gWU7jjql_Q&maxResults=6&q=react&type=video&part=snippet&videoEmbeddable=true