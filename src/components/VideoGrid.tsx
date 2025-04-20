// This videos we are doing will be hard coded as this will fetch from backend
import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title: "Build a custom API + app in 4 hours . Web Dev Challenge",
    image: "yt_thumbnail.jpg",
    thumbImage: "yt_icon.jpg",
    author: "Tina Huang",
    views: "45K views",
    time: "1 day ago"
}, {
    title: "Build a Rest API + app in 4 hours . Web Dev Challenge",
    image: "yt_thumbnail.jpg",
    thumbImage: "yt_icon.jpg",
    author: "Tina Huang",
    views: "45K views",
    time: "1 day ago"
}, {
    title: "Build a Context API + app in 4 hours . Web Dev Challenge",
    image: "yt_thumbnail.jpg",
    thumbImage: "yt_icon.jpg",
    author: "Tina Huang",
    views: "45K views",
    time: "1 day ago"
}, {
    title: "Build a Context API + app in 4 hours . Web Dev Challenge",
    image: "yt_thumbnail.jpg",
    thumbImage: "yt_icon.jpg",
    author: "Tina Huang",
    views: "45K views",
    time: "1 day ago" 
}, {
    title: "Build a Context API + app in 4 hours . Web Dev Challenge",
    image: "yt_thumbnail.jpg",
    thumbImage: "yt_icon.jpg",
    author: "Tina Huang",
    views: "45K views",
    time: "1 day ago"
}, {
    title: "Build a Context API + app in 4 hours . Web Dev Challenge",
    image: "yt_thumbnail.jpg",
    thumbImage: "yt_icon.jpg",
    author: "Tina Huang",
    views: "45K views",
    time: "1 day ago"
}, {
    title: "Build a Context API + app in 4 hours . Web Dev Challenge",
    image: "yt_thumbnail.jpg",
    thumbImage: "yt_icon.jpg",
    author: "Tina Huang",
    views: "45K views",
    time: "1 day ago"
}, {
    title: "Build a Context API + app in 4 hours . Web Dev Challenge",
    image: "yt_thumbnail.jpg",
    thumbImage: "yt_icon.jpg",
    author: "Tina Huang",
    views: "45K views",
    time: "1 day ago"
}]

export const VideoGrid = ()  => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard 
                  title={video.title}
                  image={video.image}
                  thumbImage={video.thumbImage}
                  author= {video.author}
                  views={video.views}
                  time={video.time}
            />
        </div>)}
    </div>
}