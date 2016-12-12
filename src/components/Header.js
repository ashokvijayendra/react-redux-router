/**
*
* Header
*
*/

import React from 'react';

const Logo = '/public/assets/images/logo.gif';
const LocationIcon = '/public/assets/images/location-icon.svg';
const DeptLogo = '/public/assets/images/dept20000018_mt00009_62700036.gif';
// function submitForm(){

// }

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
 	 <header>
        <div id="top-nav-bar-div">				
          <div id="header-left" className="inline">
            <ul>
              <li className="pipe"><a title="find a store">Find a store</a></li>
              <li className="pipe"><a title="Store ads">store ads</a></li>
              <li className="pipe"><a title="gift cards">gift cards</a></li>
              <li><a title="registry">registry</a></li>
            </ul>
          </div>
          <div id="header-right" className="inline flt-right">
            <ul>
              <li className="pipe">
                <a title="my account">my account </a>
              </li>
              <li className="pipe">
                <a title="saved items" id="myfavoriteLink">
                  <span>no saved items</span>
                </a>
              </li>
              <li className="pipe">
                <a title="recommendations">recommendations</a>
              </li>
              <li className="pipe">
                <a title="track order">track order</a>
              </li>
              <li>
                <a title="customer service">customer service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="global_header">
          <div className="list_container">
            <div className="main_logo flt_lft">
              <a title="JCPenney Home" href="/">
                <img src={Logo} alt="JCPenney has the best deals on clothing, accessories, shoes, jewelry, bed & bath, and furniture." /></a>
            </div>
            <div className="list_search flt_rgt">
              <div className="jcp_search flt_lft">
                <div className="header_search">
                  <form id="keywordSearch">
                    <fieldset>
                      <p>
                        <input autoComplete="off" name="searchTerm" id="searchTerm" type="text" defaultValue="enter search term or web id" maxLength={175} className="searchT flt_lft search_input" style={{color: 'rgb(205, 205, 205)'}} />
                      </p>
                      <p className="command">
                        <input id="searchbutton" type="button" className="middle_bluesmall_input" defaultValue="" data-onclick="submitForm()" title="search" />
                      </p>
                    </fieldset>
                  </form>					    
                </div>
              </div>
              <div id="store_locator" className="flt_lft store_locator" style={{display: 'block'}}>
                <div className="img">
                  <img src={LocationIcon} alt="location" />
                </div>
                <div className="desc">
                  <span id="globalHdrStoreName">
                    <span id="storeheadLabel" alt="selectedStoreName">Your Store:</span>
                    <span id="selStoreName" style={{display: 'none'}}>selectedStoreName</span>
                  </span>
                  <span>
                    <a id="modStore">select store</a>
                  </span>
                </div>
              </div>
              <div className="shopping_cart flt_rgt">
                <a id="shopping_bag" title="my bag">
                  {/* code changes for My Bag alignment issue start */}
                  <em id="reloadFragment">
                    <b>
                      <b className="shop_bag_tp">&nbsp;</b>
                      <span id="orderQuantity">0</span>
                    </b>
                    <div className="mybagText">
                      <strong className="flt_lft">my bag</strong>
                      <strong id="priceOrder" className="flt_lft price_txt">$0.00</strong>
                    </div>
                  </em>
                  {/* code changes for My Bag alignment issue end */}
                </a>
              </div>
            </div>
          </div>						
        </div>
        <div className="global_header">
          <div className="holder">
            <ul id="topmenu" className="top_nav">
              <li>
                <a rel=".dept20000011" name="dept20000011" className="topmenu_link"> for the home
                </a>
              </li>
              <li>
                <a rel=".dept20000012" name="dept20000012" className> bed &amp; bath
                </a>
              </li>
              <li>
                <a name="dept2842930842" className> window
                </a>
              </li>
              <li>
                <a name="dept2846220841" className> appliances
                </a>
              </li>
              <li>
                <a name="dept20000013" className> women
                </a>
              </li>
              <li>
                <a name="dept100240035" className> lingerie
                </a>
              </li>
              <li>
                <a name="dept20000014" className> men
                </a>
              </li>
              <li>
                <a name="dept2843580841" className> juniors
                </a>
              </li>
              <li>
                <a name="dept20000016" className> kids
                </a>
              </li>
              <li>
                <a name="dept20000017" className> baby
                </a>
              </li>
              <li>
                <a name="dept20000018" className> shoes
                </a>
              </li>
              <li>
                <a name="dept20000019" className> handbags
                </a>
              </li>
              <li>
                <a name="dept20000020" className> jewelry
                </a>
              </li>
              <li>
                <a name="dept2840330850" className>Salon</a>
              </li>
              <li>
                <a rel=".dept2845050842" name="dept2845050842" className> sephora
                </a>
              </li>
              <li><a id="last_department" className="clearance_color" name="dept2841340857"> clearance
                </a>
              </li>
              <li className="filler" />
            </ul>
          </div>
        </div>
        <div className="global_header">
          <div id="pdp-gh-campaign-container">
            <p><img src={DeptLogo} useMap="#imgmap2016113115152" /><map id="imgmap2016113115152" name="imgmap2016113115152"><area data-fcksavedurl="/jsp/browse/marketing/promotion.jsp?cmJCP_T=PDP&cmJCP_C=S1&pageId=pg4005600007&cm_re=DT-_-c1-_-fsh-$99" alt="fsh $99" coords="114,9,256,96" href="/dotcom/jsp/browse/marketing/promotion.jsp?cmJCP_T=PDP&cmJCP_C=S1&pageId=pg4005600007&cm_re=DT-_-c1-_-fsh-$99" shape="rectangle" title="fsh $99" /><area data-fcksavedurl="/jsp/browse/marketing/promotion.jsp?cmJCP_T=PDP&cmJCP_C=S1&pageId=pg40048300007&cm_re=DT-_-c2-_-foryou27" alt="FORYOU27" coords="292,2,891,97" href="/dotcom/jsp/browse/marketing/promotion.jsp?cmJCP_T=PDP&cmJCP_C=S1&pageId=pg40048300007&cm_re=DT-_-c2-_-foryou27" shape="rectangle" title="FORYOU27" /></map></p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
