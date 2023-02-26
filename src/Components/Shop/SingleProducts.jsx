import React from 'react'
import { Link } from 'react-router-dom'

const SingleProducts = ({item,addToCard}) => {

    return (
        <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
            <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img className="img-fluid w-100" src={item.image} alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">{item.name}</h6>
                    <div className="d-flex justify-content-center">
                        <h6>${item.price}</h6><h6 className="text-muted ml-2"><del>${item.discprice}</del></h6>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                    <Link to="/detail" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                    <button onClick={()=>addToCard(item)} className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProducts