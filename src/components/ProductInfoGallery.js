/**
*
* Pdpgallery
*
*/

import React from 'react';

const TcProduct1 = '/public/assets/images/tc-product-1.png';
const TcProduct2 = '/public/assets/images/tc-product-2.png';
const TcProduct3 = '/public/assets/images/tc-product-3.png';
const ProductPreview = '/public/assets/images/product-preview.png';

    function handleClick() {
			console.log('Im clickeed');
    }
class ProductInfoGallery extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    //console.log('img');console.log(this.props.images);
    return (
    	<div className = "pdpImgGallery">
    		<div id="pro-img-variant" className="pro-img-var-div inline">
    			<ul>
            {this.props.images && this.props.images.map(function(item, i){
              return <li key={i}><img src={item.url} data="product-preview.png" /></li>;
            })}
    			</ul>
    		</div>
    		<div id="pro-big-img" className="pro-big-img-div inline">
    			<a href="javascript:void(0);" onClick={() => alert('click')}>
    				<img src={this.props.images && this.props.images[0].url} />
    			</a>
    		</div>
	    </div>
    );
  }
}

export default ProductInfoGallery;
