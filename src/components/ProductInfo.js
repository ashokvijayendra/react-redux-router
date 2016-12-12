/**
*
* Pdpdetails
*
*/

import React from 'react';
const Swatch1 = '/public/assets/images/swatch-1.png';
const Swatch2 = '/public/assets/images/swatch-2.png';
const Swatch3 = '/public/assets/images/swatch-3.png';
const Swatch4 = '/public/assets/images/swatch-4.png';
const Swatch5 = '/public/assets/images/swatch-5.png';
const Swatch6 = '/public/assets/images/swatch-6.png';
const Swatch7 = '/public/assets/images/swatch-7.png';
const Swatch8 = '/public/assets/images/swatch-8.png';
const Swatch9 = '/public/assets/images/swatch-9.png';
const Swatch10 = '/public/assets/images/swatch-10.png';
const Swatch11 = '/public/assets/images/swatch-11.png';
const PdpProduct1 = '/public/assets/images/pdp-product-1.png';
const ThProduct1 = '/public/assets/images/th-product-1.png';
const PdpProduct3 = '/public/assets/images/pdp-product-3.png';
const PdpProduct2 = '/public/assets/images/pdp-product-2.png';
const ThProduct2 = '/public/assets/images/th-product-2.png';
const ThProduct3 = '/public/assets/images/th-product-3.png';
const PdpProduct4 = '/public/assets/images/pdp-product-4.png';
const ThProduct4 = '/public/assets/images/th-product-4.png';
const PdpProduct5 = '/public/assets/images/pdp-product-5.png';
const ThProduct5 = '/public/assets/images/th-product-5.png';
const PdpProduct7 = '/public/assets/images/pdp-product-7.png';
const ThProduct7 = '/public/assets/images/th-product-7.png';
const One = '/public/assets/images/1.png';
const Two = '/public/assets/images/2.png';
const Three = '/public/assets/images/3.png';
const Four = '/public/assets/images/4.png';

class ProductInfo extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    let sizes, colors;
    if(this.props.dimensions){
      sizes = this.props.dimensions.find(x => x.id == 'SIZE');
      colors = this.props.dimensions.find(x => x.id == 'COLOR');
    }

    return (
		<div id="pro-detail-variant" className="pro-detail-variant  inline ">
	      <div className="pro-detail-variant-top padb30">
	        <div id="discounted-price" className="discounted-price-div">
	          $21.99 - $119.99  <sub className="ymal-dis">sale</sub>
	        </div>
	        <div id="original-price" className="original-price-div padt5">
	          was $50 - $300 | original
	        </div>
	        <div className="product-size-var-div">
	          <span>SIZE</span>
	          <span id="select-size-error" className="pdpErrorMsg">
	            "Don't forget to select a" <strong> size</strong>
	          </span>
	          <div className="custom-dropdown cp-sort">
	            <span>Select Size</span>
	            <select id="product-size-varient">
                {sizes && sizes.options.map(function(item, i){
                  return <option key={i} value={item.id}>{item.value}</option>;
                })}
	            </select>
	          </div>
	        </div>
	        <div id="product-col-var" className="product-col-var-div padt20">
	          <div>COLOR</div>
	          <span id="select-color-error" className="pdpErrorMsg">
	            "Don't forget to select a" <strong> color</strong>
	          </span>
	          <div className="padt5">
	            <ul>
              {colors && colors.options.map(function(item, i){
                return <li key={i} id="img0ppr5007120035" className="swatch_selected inline ">
                  <a className="swatch">
                    <img title height={36} alt={item.image.altText} width={36} name="Blue" src={item.image.url} />
                  </a>
                </li>;
              })}
	            </ul>
	          </div>
	        </div>
	      </div>
	      <hr />
	      <div className="pro-detail-variant-bottom padt30">
	        <div id="product-del-opt-var" className="product-del-opt-var-div inline">
	          <div className="product-del-opt-home-div ">
	            <div className="pdp-var-lable-lar"><span>Ship to Home</span></div>
	            <div className="padt5">
	              <span>
	                <input type="radio" name="r1" defaultChecked="checked" id="pickUpInStore" className="checkbox" />
	                <label htmlFor="pickUpInStore" className="checkbox-label">
	                  <span />
	                </label>
	              </span>
	              <span className="padl26 select-ship-mode ">
	                <div>Order within 3 hrs 8 mins to get it by Sept 16th</div>
	                <div className="padt5"><a href>See Shipping Options</a></div>
	                <div className="padt10 shipping-charge">$3.35  oversized item surcharge</div>
	              </span>
	            </div>
	          </div>
	          <div className="product-del-opt-store-div padt20">
	            <div className="pdp-var-lable-lar"><span>Pick Up In Store FREE</span></div>
	            <div className="padt5">
	              <span>
	                <input type="radio" name="r1" defaultChecked="checked" id="homeDel" className="checkbox" />
	                <label htmlFor="homeDel" className="checkbox-label">
	                  <span />
	                </label>
	              </span>
	              <span className="padl26 select-ship-mode">
	                <div>Available at Stonebriar Mall</div>
	                <div className="padt5"> <a href>Change Store </a></div>
	              </span>
	            </div>
	          </div>
	        </div>
	        <div id="product-quant-var" className="product-quant-var-div inline">
	          <div className="pd-add-dropdown">
	            <span>QUANTITY</span>
	            <div className="custom-dropdown pd-sort">
	              <span>1</span>
	              <select id="product-quantity-varient">
	                <option value={1}>1</option>
	                <option value={2}>2</option>
	                <option value={3}>3</option>
	              </select>
	            </div>
	          </div>
	          <form id="add-to-cart-form" action="#">
	            <input type="hidden" name="seleted-color" id="selected-size-input" data-error="select-size-error" defaultValue />
	            <input type="hidden" name="selected-size" id="selected-color-input" data-error="select-color-error" defaultValue />
	            <input type="hidden" name="quantity" id="selected-quantity-input" defaultValue={1} />
	          </form>
	          <div>
	            <div className="button-wrapper">
	              <button className="redButton" id="add-to-cart" data-url="/add-to-cart"> ADD TO BAG</button>
	            </div>
	            <div className="button-wrapper">
	              <button className="whiteButton save-for-leter" id="save-for-leter" data-url="/save-for-leter"> SAVE FOR LATER</button>
	            </div>
	            <div className="button-wrapper">
	              <button className="whiteButton add-to-registry" id="add-to-registry" data-url="/add-to-regestry"> ADD TO REGISTRY</button>
	            </div>
	          </div>
	          <div />
	        </div>
      </div>
      </div>
    );
  }
}

export default ProductInfo;
