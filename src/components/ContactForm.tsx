import { useState, type ChangeEvent } from "react";
import "../styles/contact.css";
interface FormData {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    assunto: "Seminário",
    mensagem: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="contact-form">
      <input 
        name="nome" 
        placeholder="Nome" 
        onChange={handleChange} 
      />
      <input 
        name="email" 
        placeholder="Email" 
        onChange={handleChange} 
      />
      <input 
        name="telefone" 
        placeholder="Telefone" 
        onChange={handleChange} 
      />

      <select name="assunto" onChange={handleChange} value={formData.assunto}>
        <option value="Seminário">Seminário</option>
        <option value="Aula Particular">Aula Particular</option>
        <option value="Workshop">Workshop</option>
      </select>

      <textarea 
        name="mensagem" 
        placeholder="Mensagem" 
        onChange={handleChange}
      ></textarea>

      <button onClick={() => console.log(formData)}>Enviar</button>
    </section>
  );
}
