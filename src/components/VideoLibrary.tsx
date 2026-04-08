import "../styles/videoLibrary.css"

const videos = [
  { id: "dVw07IDIiQY", title: "REVISTA MASTER OFICIAL" },
  { id: "GEo0Pff8HtE", title: "TV POLO: PODCAST " },
  { id: "yzUfkGJjFU4", title: "DEMONSTRAÇÃO  DE KARATE" },
  { id: "twfmLk_kKP0", title: "LIVRO GRANDES MESTRES" },
  { id: "vA7li_4txlU", title: "APLICAÇÃO CORRETA" },
]

export default function VideoLibrary(){

  const handleOpen = (id: string) => { 
  window.open(`https://www.youtube.com/watch?v=${id}`, "_blank")
}


  const mainVideo = videos[0]
  const sideVideos = videos.slice(1, 5)

  return(

    <section id="video" className="video-library">

      <h2 className="video-title">
        Vídeos do Sensei
      </h2>

      <div className="video-layout">

        <div 
          className="video-main"
          onClick={() => handleOpen(mainVideo.id)}
        >
          <img src={`https://img.youtube.com/vi/${mainVideo.id}/maxresdefault.jpg`} />

          <div className="video-info">
            <p>{mainVideo.title}</p>
          </div>
        </div>

        <div className="video-side">

          {sideVideos.map((video, index) => (
            <div 
              key={index}
              className="video-item"
              onClick={() => handleOpen(video.id)}
            >

              <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} />

              <p>{video.title}</p>

            </div>
          ))}

        </div>

      </div>

      <button 
        className="youtube-btn"
        onClick={() => window.open("https://www.youtube.com/@WongKarateKyokai-oficial", "_blank")}
      >
        Ver canal no YouTube
      </button>

    </section>

  )

}