import Header from "./componnents/Header"
import Hero from "./componnents/Hero";
import './App.css';
import MainContent from "./componnents/MainContent";
import url1 from "./assets/images/product1.png"
import url2 from "./assets/images/prouduct2.png"
import Footer from "./componnents/Footer";


function App() {
  const products=[
    {
        id:1,
        name:"Chaussure Nike à vendre",
        price:"800 000 GNF",
        date:"Aujourd'hui- 12h00",
        image:url1
    },
    {
      id:2,
      name:"Chaussure Nike à vendre",
      price:"800 000 GNF",
      date:"Aujourd'hui- 12h00",
      image:url2
  },
  {
    id:3,
    name:"Chaussure Nike à vendre",
    price:"800 000 GNF",
    date:"Aujourd'hui- 12h00",
    image:url1
},
{
  id:4,
  name:"Chaussure Nike à vendre",
  price:"800 000 GNF",
  date:"Aujourd'hui- 12h00",
  image:url2
},
{
  id:5,
  name:"Chaussure Nike à vendre",
  price:"800 000 GNF",
  date:"Aujourd'hui- 12h00",
  image:url1
},
{
  id:6,
  name:"Chaussure Nike à vendre",
  price:"800 000 GNF",
  date:"Aujourd'hui- 12h00",
  image:url1
},
{
  id:7,
  name:"Chaussure Nike à vendre",
  price:"800 000 GNF",
  date:"Aujourd'hui- 12h00",
  image:url2
},
{
  id:8,
  name:"Chaussure Nike à vendre",
  price:"800 000 GNF",
  date:"Aujourd'hui- 12h00",
  image:url2
}

]
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <MainContent products={products}/>
      <Footer/>
    </div>
  );
}

export default App;
