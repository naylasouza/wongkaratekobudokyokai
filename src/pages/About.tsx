import { useState, useRef, useEffect } from "react"
import "../styles/about.css"

import img1 from "../assets/images/sensei1.png"
import img2 from "../assets/images/sensei2.png"
import img3 from "../assets/images/sensei3.png"
import img4 from "../assets/images/sensei4.png"

export default function About(){

  const [open, setOpen] = useState(false)
  const aboutRef = useRef(null)

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add("show")
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [open])

  const handleClose = () => {
    setOpen(false)

    setTimeout(() => {
      aboutRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }, 100)
  }

  return(

    <section id="about" className="about" ref={aboutRef}>

      <h1 className="about-title fade-in">
        A Jornada do Sensei Rogério Wong
      </h1>


      <div className="about-block fade-in">

        <img src={img1} className="img-1" alt="Sensei Rogério Wong early career"/>

        <div>

          <p>
            Sensei Rogério Eng Wong, 8º dan em Karate e 6º dan em Kobudo iniciou a carreira em 1975,
            quando seus pais o levaram à academia do mestre Yoshihide Shinzato, um imigrante japonês
            que viria a ser o grande mentor de sua vida.
          </p>

          <p>
            Por ironia do destino ou não, a intenção de seu pai era educá-lo nas artes marciais
            chinesas, tal como o Kung Fu. Porém, sete anos após deixar seu filho no dojo,
            Rogério Wong tornou-se faixa preta pela International Shorin-Ryu Karate-Do &
            Kobudo Shinshukan.
          </p>

          <p>
            Atualmente, com mais de 50 anos de prática e mais de quatro décadas de magistério,
            o kyoshi acumulou experiências ao acompanhar seu mestre por inúmeros países
            da Europa, América do Sul e Ásia, incluindo Okinawa, berço do Karate.
          </p>

          {!open && (
            <button className="about-button" onClick={() => setOpen(true)}>
              Ver mais
            </button>
          )}

        </div>

      </div>

      {open && (
        <>
          <div className="about-block reverse fade-in">

            <img src={img2} className="img-2" alt="Awards and recognitions"/>

            <div>

              <p>
                Em 1987, durante a solenidade de 25 anos da Escola Shinshukan, recebeu a placa
                de “Melhor Instrutor do Ano” das mãos de seu grão-mestre.
              </p>

              <p>
                Entre suas conquistas mais recentes estão os títulos de Doutor Honoris Causa
                em Filosofia das Artes Marciais (2024) e Doutor Honoris Causa em Artes Marciais (2017),
                concedidos pela Erich Fromm University (EUA), além do título de Mestre Honoris Causa
                pela Faculdade Einstein (FACEI).
              </p>

              <p>
                Ao refletir sobre sua jornada, o mestre afirma:
                “o melhor que se aprende não é dito, é observado e praticado”.
              </p>

              <p>
                Ele também reforça que acredita nas artes marciais como ferramentas pedagógicas
                de educação e humanização.
              </p>

            </div>

          </div>



          <div className="about-block fade-in">

            <img src={img3} className="img-3" alt="Karate expertise"/>

            <div>

              <p>
                Sensei Rogério Wong é reconhecido como um dos grandes especialistas em
                bunkai kata — a aplicação prática dos katas — e no Kobudo de Okinawa.
              </p>

              <p>
                Durante quase duas décadas integrou a comissão técnica da seleção
                brasileira Shinshukan e atualmente é membro da banca examinadora
                de graduação superior em Karate e Kobudo.
              </p>

            </div>

          </div>



          <div className="about-block reverse fade-in">

            <img src={img4} alt="Education and teaching"/>

            <div>

              <p>
                Formado em Educação Física, Pedagogia e Jornalismo,
                possui pós-graduação em Karate e Psicopedagogia.
              </p>

              <p>
                Hoje, aos 60 anos, atua como professor em instituições de ensino,
                promove workshops técnicos, ministra palestras e conduz cursos
                de alto nível por todo o Brasil.
              </p>

              <p>
                Recebeu honrarias das prefeituras de Santos, São Vicente,
                Marília, Uberaba e São Pedro da Aldeia pelas contribuições
                às artes marciais e ao desporto nacional.
              </p>

            </div>

          </div>

          <button className="about-button" onClick={handleClose}>
            Ver menos
          </button>
        </>
      )}

    </section>

  )
}