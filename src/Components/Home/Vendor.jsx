import vendor1 from '../../img/vendor-1.jpg'
import vendor2 from '../../img/vendor-2.jpg'
import vendor3 from '../../img/vendor-3.jpg'
import vendor4 from '../../img/vendor-4.jpg'
import vendor5 from '../../img/vendor-5.jpg'
import vendor6 from '../../img/vendor-6.jpg'
import vendor7 from '../../img/vendor-7.jpg'
import vendor8 from '../../img/vendor-8.jpg'

const Vendor = () => {
  return (
    <div className="container-fluid py-5">
        <div className="row px-xl-5">
            <div className="col">
                <div className="owl-carousel d-flex vendor-carousel">
                    <div className="vendor-item border p-4">
                        <img src={vendor1} alt="" />
                    </div>
                    <div className="vendor-item border p-4">
                        <img src={vendor2} alt="" />
                    </div>
                    <div className="vendor-item border p-4">
                        <img src={vendor3} alt="" />
                    </div>
                    <div className="vendor-item border p-4">
                        <img src={vendor4} alt="" />
                    </div>
                    <div className="vendor-item border p-4">
                        <img src={vendor5} alt="" />
                    </div>
                    <div className="vendor-item border p-4">
                        <img src={vendor6} alt="" />
                    </div>
                    <div className="vendor-item border p-4">
                        <img src={vendor7} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vendor