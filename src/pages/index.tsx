import {VideoCard} from '../components/VideoCard'


export default function Home() {
  return (
    <div>
      <VideoCard 
      title={"Build a custom API + app in 4 hours . Web Dev Challenge"}
      image={"yt_thumbnail.jpg"}
      thumbImage={"yt_icon.jpg"}
      author= {"Tina Huang"}
      views={"45K views"}
      time={"1 day ago"}
      />
    </div>
  );
}
