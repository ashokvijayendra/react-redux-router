import React from 'react';
const CollectionCon = '/public/assets/images/collection-con.png';
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

class ProductShopCollection extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <div id="pdp-shop-collection-container" className="mrgt43 pdp-shop-collection-container-div">
          <div className="pdp-sc-header">
            <span className="sc-header-img"><img src={CollectionCon} /></span>
            <span className="sc-header-title">SHOP THIS COLLECTION</span>
          </div>
          <div className="current-product">
            <h3 className="current-product-title">CURRENT PRODUCT</h3>
            <div className="cp-select-product">
              <a href="javascript:void(0);" >
                <img src={PdpProduct1} alt="product" />
              </a>
              <span className="cp-product-description"> {this.props.product.name}</span>
              <span className="cp-product-price">$21.99-$119.99<sub>sale</sub></span>
              <span className="cp-previous-product-price">was $50-$300 | original</span>
              <div className="cp-rating-star">
                <img src="https://jcpenney.ugc.bazaarvoice.com/1573-en_us/4_5/5/ratingLarge.gif" className="BVImgOrSprite" alt="4.5 out of 5" title="4.5 out of 5" />
                <span className="cp-rating-number">(11)</span>
              </div>
              <span className="cp-included tooltip">What is included?</span>
              <div className="tooltip-container">
                <p>2-piece Twin comforter set includes:</p>
                <ul>
                  <li>comforter</li>
                  <li>sham</li>
                </ul>
                <p>3-piece Ful/Queen or King comforter set includes:</p>
                <ul>
                  <li>comforter</li>
                  <li>2 sham</li>
                </ul>
              </div>
              <div className="cp-select">
                <button>Select Option</button>
              </div>
            </div>
            <div className="cp-add-product" id="product-1" style={{display: 'none'}}>
              <div className="cp-add-img-desc">
                <img src={ThProduct1} alt="product-add" />
                <span className="cp-add-product-description">Bensonhurst Bedspread</span>
              </div>
              <div className="clr-fix" />
              <span className="cp-add-product-price">$21.99-$119.99<sub>sale</sub></span>
              <span className="cp-add-previous-product-price">was $50-$300 | original</span>
              <div className="cp-add-dropdown">
                <span>SIZE</span>
                <div className="custom-dropdown cp-sort">
                  <span>Select size</span>
                  <select className="cp-size-select">
                    <option value="full">FULL</option>
                    <option value="queen">QUEEN</option>
                    <option value="king">KING</option>
                  </select>
                </div>
                <span className="cp-error-msg cp-size-error">Please Select a Size</span>
              </div>
              <div className="cp-color-carousel-cont">
                <span><b>COLOR</b> <span className="colorName hide">Lustrous Steel</span></span>
                <ul className="bxslider5 cp-color-carousel-ul">
                  <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                    <a className="swatch">
                      <img title height={30} alt name="Pewter" src={Swatch1} />
                    </a>
                  </li>
                  <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                    <a className="swatch">
                      <img title height={30} alt name="Ivory" src={Swatch2} />
                    </a>
                  </li>
                  <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                    <a className="swatch">
                      <img title height={30} alt name="Primitive Brown" src={Swatch3} />
                    </a>
                  </li>
                  <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                    <a className="swatch">
                      <img title height={30} alt name="Gray" src={Swatch4} />
                    </a>
                  </li>
                  <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                    <a className="swatch">
                      <img title height={30} alt name="Empire Red" src={Swatch5} />
                    </a>
                  </li>
                  <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                    <a className="swatch">
                      <img title height={30} alt name="Majestic yellow" src={Swatch6} />
                    </a>
                  </li>
                  <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                    <a className="swatch">
                      <img title height={30} alt name="Tofee" src={Swatch7} />
                    </a>
                  </li>
                  <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                    <a className="swatch">
                      <img title height={30} alt name="Coffee" src={Swatch8} />
                    </a>
                  </li>
                  <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                    <a className="swatch">
                      <img title height={30} alt name="Royal Blue" src={Swatch9} />
                    </a>
                  </li>
                </ul>
                <span className="cp-error-msg cp-color-error">Please Select a Color</span>
              </div>
              <div className="cp-add-dropdown">
                <span>QUANTITY</span>
                <div className="custom-dropdown cp-sort">
                  <span>1</span>
                  <select className="cp-quantity-select">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                  </select>
                </div>
              </div>
              <form className="add-shop-collection-form" action="#">
                <input type="hidden" name="seleted-color" className="shop-collection-selected-size" data-error="cp-size-error" defaultValue />
                <input type="hidden" name="selected-size" className="shop-collection-selected-color" data-error="cp-color-error" defaultValue />
                <input type="hidden" name="quantity" className="shop-collection-selected-quantity" defaultValue={1} />
              </form>
              <div className="remove-selection hide">Remove</div>
              <div className="cp-add" data="cs-product-1.png">
                <button className="cp-add-btn">Done</button>
              </div>
              <div className="cp-update hide">
                <button className="colp-update-btn">Update</button>
              </div>
            </div>
          </div>
          <div className="collection-product" id="pdp-shop-collection-list-container">
            <ul className="bxslider4">
              <li style={{display: 'inline'}}>
                <div className="each-collection-product">
                  <div className="cp-select-product">
                    <a href="javascript:void(0);" >
                      <img src={PdpProduct2} alt="product"/>
                    </a>
                    <span className="cp-product-description">Bensonhurst Euro Sham</span>
                    <span className="cp-product-price">$41.99 <sub>sale</sub></span>
                    <span className="cp-previous-product-price">was $70 | original</span>
                    <div className="cp-rating-star">
                      <img src="https://jcpenney.ugc.bazaarvoice.com/1573-en_us/4_5/5/ratingLarge.gif" className="BVImgOrSprite" alt="4.5 out of 5" title="4.5 out of 5" />
                      <span className="cp-rating-number">(11)</span>
                    </div>
                    <span className="cp-included tooltip">What is included?</span>
                    <div className="tooltip-container">
                      <p>2-piece Twin comforter set includes:</p>
                      <ul>
                        <li>comforter</li>
                        <li>sham</li>
                      </ul>
                      <p>3-piece Ful/Queen or King comforter set includes:</p>
                      <ul>
                        <li>comforter</li>
                        <li>2 sham</li>
                      </ul>
                    </div>
                    <div className="cp-select">
                      <button>Select Option</button>
                    </div>
                  </div>
                  <div className="cp-add-product" id="product-2" style={{display: 'none'}}>
                    <div className="cp-add-img-desc">
                      <img src={ThProduct2} alt="product-add" />
                      <span className="cp-add-product-description">Bensonhurst Euro Sham</span>
                    </div>
                    <div className="clr-fix" />
                    <span className="cp-add-product-price">$41.99 <sub>sale</sub></span>
                    <span className="cp-add-previous-product-price">was $70 | original</span>
                    <div className="cp-color-carousel-cont">
                      <span><b>COLOR</b> <span className="colorName hide">Lustrous Steel</span></span>
                      <ul className="bxslider5">
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Pewter" src={Swatch1} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Ivory" src={Swatch2} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Primitive Brown" src={Swatch3} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Gray" src={Swatch4} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Empire Red" src={Swatch5} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Majestic yellow" src={Swatch6} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Tofee" src={Swatch7} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Coffee" src={Swatch8} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Royal Blue" src={Swatch9} />
                          </a>
                        </li>
                      </ul>
                      <span className="cp-error-msg colp-color-error">Please Select a Color</span>
                    </div>
                    <div className="cp-add-dropdown">
                      <span>QUANTITY</span>
                      <div className="custom-dropdown cp-sort">
                        <span>1</span>
                        <select>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>
                      </div>
                    </div>
                    <form className="add-shop-collection-form" action="#">
                      {/* <input type="hidden" name="seleted-color" class="shop-collection-selected-size" data-error="colp-size-error" value=""> */}
                      <input type="hidden" name="selected-size" className="shop-collection-selected-color" data-error="colp-color-error" defaultValue />
                      <input type="hidden" name="quantity" className="shop-collection-selected-quantity" defaultValue={1} />
                    </form>
                    <div className="remove-selection hide">Remove</div>
                    <div className="cp-add" data="cs-product-2.png">
                      <button className="colp-add-btn">Done</button>
                    </div>
                    <div className="cp-update hide">
                      <button className="colp-update-btn">Update</button>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{display: 'inline'}}>
                <div className="each-collection-product">
                  <div className="cp-select-product">
                    <a href="javascript:void(0);" >
                      <img src={PdpProduct3}alt="product" />
                    </a>
                    <span className="cp-product-description">Bensonhurst Pillow Sham</span>
                    <span className="cp-product-price">$21.99 <sub>sale</sub></span>
                    <span className="cp-previous-product-price">was $60 | original</span>
                    <div className="cp-rating-star">
                      <img src="https://jcpenney.ugc.bazaarvoice.com/1573-en_us/4_5/5/ratingLarge.gif" className="BVImgOrSprite" alt="4.5 out of 5" title="4.5 out of 5" />
                      <span className="cp-rating-number">(11)</span>
                    </div>
                    <span className="cp-included tooltip">What is included?</span>
                    <div className="tooltip-container">
                      <p>2-piece Twin comforter set includes:</p>
                      <ul>
                        <li>comforter</li>
                        <li>sham</li>
                      </ul>
                      <p>3-piece Ful/Queen or King comforter set includes:</p>
                      <ul>
                        <li>comforter</li>
                        <li>2 sham</li>
                      </ul>
                    </div>
                    <div className="cp-select">
                      <button>Select Option</button>
                    </div>
                  </div>
                  <div className="cp-add-product" id="product-3" style={{display: 'none'}}>
                    <div className="cp-add-img-desc">
                      <img src={ThProduct3} alt="product-add" />
                      <span className="cp-add-product-description">Bensonhurst Pillow Sham</span>
                    </div>
                    <div className="clr-fix" />
                    <span className="cp-add-product-price">$21.99 <sub>sale</sub></span>
                    <span className="cp-add-previous-product-price">was $60 | original</span>
                    <div className="cp-add-dropdown">
                      <span>SIZE</span>
                      <div className="custom-dropdown cp-sort">
                        <span>Select size</span>
                        <select className="colp-size-sel">
                          <option value="queen">STANDARD</option>
                          <option value="king">KING</option>
                        </select>
                      </div>
                      <span className="cp-error-msg colp-size-error">Please Select a Size</span>
                    </div>
                    <div className="cp-color-carousel-cont">
                      <span><b>COLOR</b> <span className="colorName hide">Lustrous Steel</span></span>
                      <ul className="bxslider5">
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Pewter" src={Swatch1} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Ivory" src={Swatch2} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Primitive Brown" src={Swatch3} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Gray" src={Swatch4} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Empire Red" src={Swatch5} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Majestic yellow" src={Swatch6} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Tofee" src={Swatch7} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Coffee" src={Swatch8} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Royal Blue" src={Swatch9} />
                          </a>
                        </li>
                      </ul>
                      <span className="cp-error-msg colp-color-error">Please Select a Color</span>
                    </div>
                    <div className="cp-add-dropdown">
                      <span>QUANTITY</span>
                      <div className="custom-dropdown cp-sort">
                        <span>1</span>
                        <select>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>
                      </div>
                    </div>
                    <form className="add-shop-collection-form" action="#">
                      <input type="hidden" name="seleted-color" className="shop-collection-selected-size" data-error="colp-size-error" defaultValue />
                      <input type="hidden" name="selected-size" className="shop-collection-selected-color" data-error="colp-color-error" defaultValue />
                      <input type="hidden" name="quantity" className="shop-collection-selected-quantity" defaultValue={1} />
                    </form>
                    <div className="remove-selection hide">Remove</div>
                    <div className="cp-add" data="cs-product-3.png">
                      <button className="colp-add-btn">Done</button>
                    </div>
                    <div className="cp-update hide">
                      <button className="colp-update-btn">Update</button>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{display: 'inline'}}>
                <div className="each-collection-product">
                  <div className="cp-select-product">
                    <a href="javascript:void(0);" >
                      <img src={PdpProduct4} alt="product"/>
                    </a>
                    <span className="cp-product-description">Bensonhurst Pleated Square Decorative Pillow</span>
                    <span className="cp-product-price">$24.99 <sub>sale</sub></span>
                    <span className="cp-previous-product-price">was $50 | original</span>
                    <div className="cp-rating-star">
                      <img src="https://jcpenney.ugc.bazaarvoice.com/1573-en_us/4_5/5/ratingLarge.gif" className="BVImgOrSprite" alt="4.5 out of 5" title="4.5 out of 5" />
                      <span className="cp-rating-number">(11)</span>
                    </div>
                    <span className="cp-included tooltip">What is included?</span>
                    <div className="tooltip-container">
                      <p>2-piece Twin comforter set includes:</p>
                      <ul>
                        <li>comforter</li>
                        <li>sham</li>
                      </ul>
                      <p>3-piece Ful/Queen or King comforter set includes:</p>
                      <ul>
                        <li>comforter</li>
                        <li>2 sham</li>
                      </ul>
                    </div>
                    <div className="cp-select">
                      <button>Select Option</button>
                    </div>
                  </div>
                  <div className="cp-add-product" id="product-4" style={{display: 'none'}}>
                    <div className="cp-add-img-desc">
                      <img src={ThProduct4} alt="product-add" />
                      <span className="cp-add-product-description">Bensonhurst Pleated Square Decorative Pillow</span>
                    </div>
                    <div className="clr-fix" />
                    <span className="cp-add-product-price">$24.99 <sub>SALE</sub></span>
                    <span className="cp-add-previous-product-price">was $50 | originsal</span>
                    <div className="cp-color-carousel-cont">
                      <span><b>COLOR</b> <span className="colorName hide">Lustrous Steel</span></span>
                      <ul className="bxslider5">
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Pewter" src={Swatch1} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Ivory" src={Swatch2} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Primitive Brown" src={Swatch3} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Gray" src={Swatch4} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Empire Red" src={Swatch5} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Majestic yellow" src={Swatch6} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Tofee" src={Swatch7} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Coffee" src={Swatch8} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Royal Blue" src={Swatch9} />
                          </a>
                        </li>
                      </ul>
                      <span className="cp-error-msg colp-color-error">Please Select a Color</span>
                    </div>
                    <div className="cp-add-dropdown">
                      <span>QUANTITY</span>
                      <div className="custom-dropdown cp-sort">
                        <span>1</span>
                        <select>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>
                      </div>
                    </div>
                    <form className="add-shop-collection-form" action="#">
                      {/* <input type="hidden" name="seleted-color" class="shop-collection-selected-size" data-error="colp-size-error" value=""> */}
                      <input type="hidden" name="selected-size" className="shop-collection-selected-color" data-error="colp-color-error" defaultValue />
                      <input type="hidden" name="quantity" className="shop-collection-selected-quantity" defaultValue={1} />
                    </form>
                    <div className="remove-selection hide">Remove</div>
                    <div className="cp-add" data="cs-product-4.png">
                      <button className="colp-add-btn">Done</button>
                    </div>
                    <div className="cp-update hide">
                      <button className="colp-update-btn">Update</button>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{display: 'inline'}}>
                <div className="each-collection-product">
                  <div className="cp-select-product">
                    <a href="javascript:void(0);" >
                      <img src={PdpProduct5} alt="product"/>
                    </a>
                    <span className="cp-product-description">Bensonhurst Tufted Square Decorative Pillow </span>
                    <span className="cp-product-price">$29.99 <sub>sale</sub></span>
                    <span className="cp-previous-product-price">was $50 | original</span>
                    <div className="cp-rating-star">
                      <img src="https://jcpenney.ugc.bazaarvoice.com/1573-en_us/4_5/5/ratingLarge.gif" className="BVImgOrSprite" alt="4.5 out of 5" title="4.5 out of 5" />
                      <span className="cp-rating-number">(11)</span>
                    </div>
                    <span className="cp-included tooltip">What is included?</span>
                    <div className="tooltip-container">
                      <p>2-piece Twin comforter set includes:</p>
                      <ul>
                        <li>comforter</li>
                        <li>sham</li>
                      </ul>
                      <p>3-piece Ful/Queen or King comforter set includes:</p>
                      <ul>
                        <li>comforter</li>
                        <li>2 sham</li>
                      </ul>
                    </div>
                    <div className="cp-select">
                      <button>Select Option</button>
                    </div>
                  </div>
                  <div className="cp-add-product" id="product-5" style={{display: 'none'}}>
                    <div className="cp-add-img-desc">
                      <img src={ThProduct5} alt="product-add" />
                      <span className="cp-add-product-description">Bensonhurst Tufted Square Decorative Pillow </span>
                    </div>
                    <div className="clr-fix" />
                    <span className="cp-add-product-price">$29.99 <sub>sale</sub></span>
                    <span className="cp-add-previous-product-price">was $50 | original</span>
                    <div className="cp-color-carousel-cont">
                      <span><b>COLOR</b> <span className="colorName hide">Lustrous Steel</span></span>
                      <ul className="bxslider5">
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Pewter" src={Swatch1} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Ivory" src={Swatch2} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Primitive Brown" src={Swatch3} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Gray" src={Swatch4} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Empire Red" src={Swatch5} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Majestic yellow" src={Swatch6} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Tofee" src={Swatch7} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Coffee" src={Swatch8} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Royal Blue" src={Swatch9} />
                          </a>
                        </li>
                      </ul>
                      <span className="cp-error-msg colp-color-error">Please Select a Color</span>
                    </div>
                    <div className="cp-add-dropdown">
                      <span>QUANTITY</span>
                      <div className="custom-dropdown cp-sort">
                        <span>1</span>
                        <select>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>
                      </div>
                    </div>
                    <form className="add-shop-collection-form" action="#">
                      {/* <input type="hidden" name="seleted-color" class="shop-collection-selected-size" data-error="colp-size-error" value=""> */}
                      <input type="hidden" name="selected-size" className="shop-collection-selected-color" data-error="colp-color-error" defaultValue />
                      <input type="hidden" name="quantity" className="shop-collection-selected-quantity" defaultValue={1} />
                    </form>
                    <div className="remove-selection hide">Remove</div>
                    <div className="cp-add" data="cs-product-5.png">
                      <button className="colp-add-btn">Done</button>
                    </div>
                    <div className="cp-update hide">
                      <button className="colp-update-btn">Update</button>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{display: 'inline'}}>
                <div className="each-collection-product">
                  <div className="cp-select-product">
                    <a href="javascript:void(0);" >
                      <img src={PdpProduct7} alt="product"/>
                    </a>
                    <span className="cp-product-description">Bensonhurst Oblong Decorative Pillow</span>
                    <span className="cp-product-price">$29.99 <sub>SALE</sub></span>
                    <span className="cp-previous-product-price">was $50 | original</span>
                    <div className="cp-rating-star">
                      <img src="https://jcpenney.ugc.bazaarvoice.com/1573-en_us/4_5/5/ratingLarge.gif" className="BVImgOrSprite" alt="4.5 out of 5" title="4.5 out of 5" />
                      <span className="cp-rating-number">(11)</span>
                    </div>
                    <span className="cp-included tooltip">What is included?</span>
                    <div className="tooltip-container">
                      <p>2-piece Twin comforter set includes:</p>
                      <ul>
                        <li>comforter</li>
                        <li>sham</li>
                      </ul>
                      <p>3-piece Ful/Queen or King comforter set includes:</p>
                      <ul>
                        <li>comforter</li>
                        <li>2 sham</li>
                      </ul>
                    </div>
                    <div className="cp-select">
                      <button>Select Option</button>
                    </div>
                  </div>
                  <div className="cp-add-product" id="product-6" style={{display: 'none'}}>
                    <div className="cp-add-img-desc">
                      <img src={ThProduct7} alt="product-add" />
                      <span className="cp-add-product-description">Bensonhurst Oblong Decorative Pillow</span>
                    </div>
                    <div className="clr-fix" />
                    <span className="cp-add-product-price">$29.99 <sub>SALE</sub></span>
                    <span className="cp-add-previous-product-price">was $50 | original</span>
                    <div className="cp-color-carousel-cont">
                      <span><b>COLOR</b> <span className="colorName hide">Lustrous Steel</span></span>
                      <ul className="bxslider5">
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Pewter" src={Swatch1} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Ivory" src={Swatch2} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Primitive Brown" src={Swatch3} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Gray" src={Swatch4} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Empire Red" src={Swatch5} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Majestic yellow" src={Swatch6} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Tofee" src={Swatch7} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Coffee" src={Swatch8} />
                          </a>
                        </li>
                        <li id="img0ppr5007120035" style={{}} className="swatch_selected inline ">
                          <a className="swatch">
                            <img title height={30} alt name="Royal Blue" src={Swatch9} />
                          </a>
                        </li>
                      </ul>
                      <span className="cp-error-msg colp-color-error">Please Select a Color</span>
                    </div>
                    <div className="cp-add-dropdown">
                      <span>QUANTITY</span>
                      <div className="custom-dropdown cp-sort">
                        <span>1</span>
                        <select>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>
                      </div>
                    </div>
                    <form className="add-shop-collection-form" action="#">
                      {/* <input type="hidden" name="seleted-color" class="shop-collection-selected-size" data-error="colp-size-error" value=""> */}
                      <input type="hidden" name="selected-size" className="shop-collection-selected-color" data-error="colp-color-error" defaultValue />
                      <input type="hidden" name="quantity" className="shop-collection-selected-quantity" defaultValue={1} />
                    </form>
                    <div className="remove-selection hide">Remove</div>
                    <div className="cp-add" data="cs-product-7.png">
                      <button className="colp-add-btn">Done</button>
                    </div>
                    <div className="cp-update hide">
                      <button className="colp-update-btn">Update</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="seleted-item-image-btn-div  padt53">
            <div className="seleted-item-image-div inline flt-lft">
              <ul>
              </ul>
            </div>
            <div className="cart-addtobag-btn-div inline ">
              <span className="seleted-item-image-div inline padr20"><span id="numof-items">0</span> Item(s) Selected</span>
              <div className="button-container inline">
                <div className="button-wrapper">
                  <button className="redButton"> ADD SELECTED TO BAG</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default ProductShopCollection;