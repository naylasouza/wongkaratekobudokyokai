import "../styles/hire.css"

export default function HireSection(){

return(

<section className="hire">

<h2>Bring Mastery To Your City</h2>

<div className="hire-grid">

<input placeholder="Name"/>
<input placeholder="City"/>
<input placeholder="Country"/>
<input placeholder="Email"/>

<textarea placeholder="Message"/>

</div>

<button>Send Request</button>

</section>

)

}