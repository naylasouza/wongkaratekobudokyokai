import "../styles/contact.css"

export default function ContactForm(){

return(

<section className="contact-form">

<input placeholder="Nome"/>
<input placeholder="Email"/>
<input placeholder="Telefone"/>

<select>

<option>Seminário</option>
<option>Aula Particular</option>
<option>Workshop</option>

</select>

<textarea placeholder="Mensagem"></textarea>

<button>Enviar</button>

</section>

)

}