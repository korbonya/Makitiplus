import Button from './Button'
import {BiHeart} from "react-icons/bi"
const Product = ({product}) => {
    return (
        <div className="product">
            <img src={product.image} alt="" />
            <div className="icon">
                <BiHeart className=""/>
            </div>
            <h3>{product.price}</h3>
            <h5>{product.name}</h5>
            <p>{product.date}</p>
            <div className="btns-main">
                <Button color="linear-gradient(270deg, #E66F01 0%, #FF9501 100%), #C4C4C4" icon="Call" text="Appeler"/>
                <Button color=" linear-gradient(90deg, #4DBCEF 0%, #1B8ACC 98.04%), #FFFFFF" icon="Send" text="Envoyer"/>
            </div>
        </div>
    )
}

export default Product
