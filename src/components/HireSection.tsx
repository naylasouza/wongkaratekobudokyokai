import { useState, useEffect } from "react"
import "../styles/hire.css"

export default function HireSection(){

  const [form, setForm] = useState({
    nome: "",
    cidade: "",
    pais: "",
    email: "",
    assunto: "",
    mensagem: ""
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

    setErrors({
      ...errors,
      [e.target.name]: ""
    })
  }

  const validate = () => {
    const newErrors = {}

    if(!form.nome) newErrors.nome = "Preencha seu nome"
    if(!form.cidade) newErrors.cidade = "Preencha sua cidade"
    if(!form.pais) newErrors.pais = "Preencha o país"
    if(!form.email) newErrors.email = "Preencha o e-mail"
    if(!form.assunto) newErrors.assunto = "Selecione um assunto"
    if(!form.mensagem) newErrors.mensagem = "Escreva uma mensagem"

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validate()

    if(Object.keys(validationErrors).length > 0){
      setErrors(validationErrors)
      return
    }

    alert("Solicitação enviada com sucesso!")
  }

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
  }, [])

  return(

    <section id="contato" className="hire">

      <h2 className="fade-in">
        Entre em contato
      </h2>

      <form className="hire-grid fade-in" onSubmit={handleSubmit}>

        <div>
          <input 
            placeholder="Nome"
            name="nome"
            value={form.nome}
            onChange={handleChange}
          />
          {errors.nome && <span className="error">{errors.nome}</span>}
        </div>

        <div>
          <input 
            placeholder="Cidade"
            name="cidade"
            value={form.cidade}
            onChange={handleChange}
          />
          {errors.cidade && <span className="error">{errors.cidade}</span>}
        </div>

        <div>
          <input 
            placeholder="País"
            name="pais"
            value={form.pais}
            onChange={handleChange}
          />
          {errors.pais && <span className="error">{errors.pais}</span>}
        </div>

        <div>
          <input 
            placeholder="E-mail"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="full">
          <select
            name="assunto"
            value={form.assunto}
            onChange={handleChange}
          >
            <option value="">Selecione o assunto</option>
            <option>Treinamento para exame de faixa</option>
            <option>Seminário</option>
            <option>Aula de defesa pessoal individual</option>
            <option>Aula de defesa pessoal coletiva</option>
            <option>Entrevista</option>
            <option>Podcast</option>
          </select>
          {errors.assunto && <span className="error">{errors.assunto}</span>}
        </div>

        <div className="full">
          <textarea 
            placeholder="Mensagem"
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
          />
          {errors.mensagem && <span className="error">{errors.mensagem}</span>}
        </div>

        <button type="submit">
          Enviar solicitação
        </button>

      </form>

    </section>

  )

}