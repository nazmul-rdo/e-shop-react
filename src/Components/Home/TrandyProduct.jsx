
import SData from "./SData"
import SingleProducts from "./SingleProducts"

const TrandyProduct = ({addToCard} ) => {
  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
      </div>
      <div className="row px-xl-5 pb-3">
        {SData.products.map((item, index) => (
          <SingleProducts key={index} addToCard={addToCard}  item={item} />
        ))}
      </div>
    </div>
  )
}

export default TrandyProduct