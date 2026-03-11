import "../styles/FocusSection.css"

export default function FocusSection(){

return(

<section className="focus">

<div className="focus-header">

<h2>Sense Wong: In Focus</h2>

<span>View All News</span>

</div>

<div className="focus-grid">

<div className="focus-card">
<img src="https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a9"/>
<p>Masterclass in Taipei</p>
<button>View News</button>
</div>

<div className="focus-card">
<img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc"/>
<p>National Championship 2023</p>
<button>View News</button>
</div>

<div className="focus-card">
<img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87"/>
<p>International Championship</p>
<button>View News</button>
</div>

<div className="focus-card">
<img src="https://images.unsplash.com/photo-1517649763962-0c623066013b"/>
<p>New Youtube Series</p>
<button>Read</button>
</div>

</div>

</section>

)

}