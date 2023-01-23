const VideoComponent = ({video}) => {
    return(
        <div className="">
            {
                video === '' || !video.id.videoId ? (<h1>Loading..</h1>) :
                (
                    <div className="text-start">
                        <div>
                            <iframe width="950" height="485" src={`https://www.youtube.com/embed/${video.id.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div>
                            <h1>{video.snippet.title}</h1>
                            <p>{video.snippet.description}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default VideoComponent;