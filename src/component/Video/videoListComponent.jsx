const VideoListComponent = ({ allvideos, clickVideo }) => {
const clickItem = (video) => {
    clickVideo(video);
}
    return(
        <div className="">
            {
                allvideos.map((video, index)=>{
                    return(
                        <div className="pb-2" key={index} style={{ cursor: 'pointer' }} onClick={()=>clickItem(video)}>
                            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default VideoListComponent;