import logo from "../../assets/images/logo.svg"
import icon_categorie from "../../assets/images/carbon_categories.png"
import avatar from "../../assets/images/avatar.png"
import love from "../../assets/images/love.svg"

const MainHead = () => {

    return (
        <div className="MainHead">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="category-toggle">
                <button>
                    <img src={icon_categorie} alt="" /> Catégories
                </button>
            </div>
            <div className="form-search">
                <form action="">
                    <input type="text" style={{'font-family': 'FontAwesome'}} placeholder="Chercher"/>
                    <div className="btn"></div>
                </form>
            </div>
            <div className="btn-commande">
                <button> <span>+</span> Poster une annonce</button>
            </div>
            <div className="favori">
                <img src={love} alt="" /> Favoris
            </div>
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
        </div>
    )
}

export default MainHead
