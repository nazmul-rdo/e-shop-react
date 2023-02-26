import React from "react"
import { Link } from "react-router-dom"

const Search = ({carditem}) => {
  const qty = carditem?.reduce((qty, item)=>qty + item.qty, 0);
  console.log(carditem)
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search row align-items-center py-3 px-xl-5'>
      <div className="col-lg-3 d-none d-lg-block">
                <Link to="/" className="text-decoration-none">
                    <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                </Link>
            </div>
            <div className="col-lg-6 col-6 text-left">
                <form action="">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for products" />
                        <div className="input-group-append">
                            <span className="input-group-text bg-transparent text-primary">
                                <i className="fa fa-search"></i>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-lg-3 col-6 text-right">
                <Link to="/" className="btn border">
                    <i className="fas fa-heart text-primary"></i>
                    <span className="badge">0</span>
                </Link>
                <Link to="/card" className="btn border">
                    <i className="fas fa-shopping-cart text-primary"></i>
                    <span className="badge">{qty}</span>
                </Link>
            </div>
      </section>
    </>
  )
}

export default Search
