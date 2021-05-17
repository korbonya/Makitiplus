import Products from "./mainContent/Products"
import SideBar from "./mainContent/SideBar"

const MainContent = ({products}) => {
    return (
        <main className="MainContent">
            <SideBar/>
            <Products products={products}/>
        </main>
    )
}

export default MainContent
