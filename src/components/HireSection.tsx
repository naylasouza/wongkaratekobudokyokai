import { useState, useEffect, type ChangeEvent, type FormEvent } from "react"
import "../styles/hire.css"

interface FormState {
  nome: string;
  cidade: string;
  pais: string;
  email: string;
  assunto: string;
  mensagem: string;
}

interface FormErrors {
  nome?: string;
  cidade?: string;
  pais?: string;
  email?: string;
  assunto?: string;
  mensagem?: string;
}

export default function HireSection(){

  const [form, setForm] = useState<FormState>({
    nome: "",
    cidade: "",
    pais: "",
    email: "",
    assunto: "",
    mensagem: ""
  })

  const [errors, setErrors] = useState<FormErrors>({})

  // Tipamos o evento de mudança para aceitar input, select e textarea
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setForm({
      ...form,
      [name]: value
    })

    setErrors({
      ...errors,
      [name]: ""
    })
  }

  const validate = () => {
    const newErrors: FormErrors = {}

    if(!form.nome) newErrors.nome = "Preencha seu nome"
    if(!form.cidade) newErrors.cidade = "Preencha sua cidade"
    if(!form.pais) newErrors.pais = "Preencha o país"
    if(!form.email) newErrors.email = "Preencha o e-mail"
    if(!form.assunto) newErrors.assunto = "Selecione um assunto"
    if(!form.mensagem) newErrors.mensagem = "Escreva uma mensagem"

    return newErrors
  }

  const handleSubmit = (e: FormEvent) => {
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
      <h2 className="fade-in">Entre em contato</h2>

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
            <option value="Treinamento para exame de faixa">Treinamento para exame de faixa</option>
            <option value="Seminário">Seminário</option>
            <option value="Aula de defesa pessoal individual">Aula de defesa pessoal individual</option>
            <option value="Aula de defesa pessoal coletiva">Aula de defesa pessoal coletiva</option>
            <option value="Entrevista">Entrevista</option>
            <option value="Podcast">Podcast</option>
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

        <button type="submit">Enviar solicitação</button>
      </form>
    </section>
  )
}
