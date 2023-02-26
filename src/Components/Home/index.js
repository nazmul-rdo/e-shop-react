
import Categories from "./Categories"
import Featured from "./Featured"
import Offer from "./Offer"
import Products from "./Products"
import Subscribe from "./Subscribe"
import TrandyProduct from "./TrandyProduct"
import Vendor from "./Vendor"


const Home = ({addToCard}) => {
  return (
    <>
      <Featured />
      <Categories />
      <Offer />
      <TrandyProduct addToCard={addToCard} />
      <Subscribe />
      <Products addToCard={addToCard} />
      {/* <Vendor /> */}
    </>
  )
}

export default Home