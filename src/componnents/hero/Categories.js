import	Categorie from "./Categorie"
import image1 from "../../assets/images/categ4.png"
import image2 from "../../assets/images/categ3.png"

const Categories = () => {
    return (
        <div className="all-categories">
            <Categorie image={image1} text="Electronique et informatique" color="linear-gradient(129.88deg, #D2F6AC -0.76%, #B8F6D2 103.14%), #FFFFFF"/>
            <Categorie image={image2} text="Transport" color="linear-gradient(271.66deg, #AAEEF2 7.73%, #D4F3F2 98.27%), #FFFFFF"/>
            <Categorie image={image1} text="Transport" color="linear-gradient(271.66deg, #AAEEF2 7.73%, #D4F3F2 98.27%), #FFFFFF"/>

            <Categorie image={image1} text="Electronique et informatique" color="linear-gradient(129.88deg, #D2F6AC -0.76%, #B8F6D2 103.14%), #FFFFFF"/>
            <Categorie image={image2} text="Transport" color="linear-gradient(271.66deg, #AAEEF2 7.73%, #D4F3F2 98.27%), #FFFFFF"/>
            <Categorie image={image1} text="Transport" color="linear-gradient(271.66deg, #AAEEF2 7.73%, #D4F3F2 98.27%), #FFFFFF"/>

            <Categorie image={image1} text="Electronique et informatique" color="linear-gradient(129.88deg, #D2F6AC -0.76%, #B8F6D2 103.14%), #FFFFFF"/>
            <Categorie image={image2} text="Transport" color="linear-gradient(271.66deg, #AAEEF2 7.73%, #D4F3F2 98.27%), #FFFFFF"/>
            <Categorie image={image1} text="Transport" color="linear-gradient(271.66deg, #AAEEF2 7.73%, #D4F3F2 98.27%), #FFFFFF"/>
        </div>
    )
}

export default Categories
