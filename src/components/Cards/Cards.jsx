import { iconsImgs } from "../../utils/images";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="grid-one-item grid-common grid-c1">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Keep Notes</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="grid-c1-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, doloremque.</p>
            <div className="lg-value">Lorem ipsum dolor sit amet.</div>
            <div className="card-wrapper">
                {/* <span className="card-pin-hidden">Lorem ipsum, dolor sit amet consectetur adipisicing. </span>
                <span>1234</span> */}
            </div>
            <div className="card-logo-wrapper">
                <div>
                    {/* <p className="text text-silver-v1 expiry-text"></p>
                    <p className="text text-sm text-white">12/22</p> */}
                </div>
                <div className="card-logo">
                    <div className="logo-shape1"></div>
                    <div className="logo-shape2"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
