

const Cards = ({ carditem , addToCard, decreaseQty}) => {
    const subTotal = carditem.reduce((price, item)=>price + item.qty * item.price, 0);
    const shipping = 10;
    return (
        <div className="container-fluid pt-5">
            <div className="row px-xl-5">
                <div className="col-lg-8 table-responsive mb-5">
                    <table className="table table-bordered text-center mb-0">
                        <thead className="bg-secondary text-dark">
                            <tr>
                                <th>Products</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        {carditem.length===0 && <h1>No Items are add in Card</h1>}
                        {carditem?.map(item => (
                            <tbody className="align-middle p-30">

                                <tr>
                                    <td className="align-middle"><img src={item.image} className='w-50' alt="" /> {item.name}</td>
                                    <td className="align-middle">${item.price}</td>
                                    <td className="align-middle">
                                        <div className="input-group quantity mx-auto w-100" >
                                            <div className="input-group-btn">
                                                <button onClick={()=>decreaseQty(item)} className="btn btn-sm btn-primary btn-minus" >
                                                    <i className="fa fa-minus"></i>
                                                </button>
                                            </div>
                                            <input type="text" className="form-control form-control-sm bg-secondary text-center" value={item.qty} />
                                            <div className="input-group-btn">
                                                <button onClick={()=>addToCard(item)} className="btn btn-sm btn-primary btn-plus">
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="align-middle">${item.price*item.qty}</td>
                                    <td className="align-middle"><button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
                                </tr>
                            </tbody>
                        ))}

                    </table>
                </div>
                <div className="col-lg-4">
                    <form className="mb-5" action="">
                        <div className="input-group">
                            <input type="text" className="form-control p-4" placeholder="Coupon Code" />
                            <div className="input-group-append">
                                <button className="btn btn-primary">Apply Coupon</button>
                            </div>
                        </div>
                    </form>
                    <div className="card border-secondary mb-5">
                        <div className="card-header bg-secondary border-0">
                            <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between mb-3 pt-1">
                                <h6 className="font-weight-medium">Subtotal</h6>
                                <h6 className="font-weight-medium">${subTotal}</h6>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-medium">Shipping</h6>
                                <h6 className="font-weight-medium">${shipping}</h6>
                            </div>
                           
                        </div>
                        <div className="card-footer border-secondary bg-transparent">
                            <div className="d-flex justify-content-between mt-2">
                                <h5 className="font-weight-bold">Total</h5>
                                <h5 className="font-weight-bold">${subTotal + shipping}</h5>
                            </div>
                            <button className="btn btn-block btn-primary my-3 py-3">Proceed To Checkout</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards