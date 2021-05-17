import Product from './Product'

const Products = ({products}) => {
   
    return (
        <div className="products">
            <h2>Top Annonces</h2>
            <div className="all-Products">
                {products.map((product)=>(
                    <Product key={product.id} product={product}/>
                ))}
            </div>

            <h2>Annonces Recentes</h2>
            <div className="all-Products">
                {products.map((product)=>(
                    <Product key={product.id} product={product}/>
                ))}
            </div>
            
        </div>
    )
}

export default Products
