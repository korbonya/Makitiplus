
const Categorie = ({image, text, color}) => {
    return (
        <div style={{background:color}} className="categorie">
           <img src={image} alt="" />
           <h3>{text}</h3>
        </div>
    )
}

export default Categorie
