import "../styles/videoLibrary.css"

export default function VideoLibrary(){

return(

<section className="video-library">

<h2>Explore the Sensei's Video Library</h2>

<div className="video-main">

<iframe
width="560"
height="315"
src="https://www.youtube.com/embed/6tYz5p6R4hQ"
title="YouTube video"
allowFullScreen
/>

<div className="video-thumbs">

<img src="https://img.youtube.com/vi/6tYz5p6R4hQ/0.jpg"/>
<img src="https://img.youtube.com/vi/5qap5aO4i9A/0.jpg"/>
<img src="https://img.youtube.com/vi/aqz-KE-bpKQ/0.jpg"/>
<img src="https://img.youtube.com/vi/L_jWHffIx5E/0.jpg"/>

</div>

</div>

<button className="youtube-btn">
VISIT YOUTUBE CHANNEL
</button>

</section>

)

}