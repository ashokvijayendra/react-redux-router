/*
 *
 * ProductPage
 *
 */

import React from 'react';
import marked from 'marked'


class ProductDescription extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <div id="pdp-product-desc-container" className="pdp-product-desc-container">
          {
            this.props.description && <div className="pd-produc-desc" style={{fontSize: 'x-small'}}  dangerouslySetInnerHTML={{__html: marked(this.props.description) }} />
          }
          <div className="pd-helpful-info">
            <h3 className="pd-helpful-info-title">HELPFUL INFORMATION</h3>
            <a href="#" className="pd-help-info-guide">Decorative Bedding Buying Guide</a>
            <a href="#" className="pd-help-info-guide">Helpful Sheets Buying Guide</a>
            <div className="pd-help-info-seperator" />
            <span className="pd-helpful-info-returns">RETURNS</span>
            <p className="pd-helpful-info-return-desc">You can return this item at any JCPenney store. For complete details, read our <a href="#">Return Policy</a></p>
            <div className="pd-help-info-seperator" />
            <h3 className="pd-helpful-info-title">CUSTOMER REVIEW</h3>
            <div className="pd-helpful-info-star">
              <img src="https://jcpenney.ugc.bazaarvoice.com/1573-en_us/4_5/5/ratingLarge.gif" className="BVImgOrSprite" alt="4.5 out of 5" title="4.5 out of 5" />
              <span>this product is rated <b>4.5 out of 5</b> based on 675 reviews</span>
            </div>
            <div className="pd-fit-summary">
              <span className="pd-fit-fit-count">90%</span>
              <span className="pd-fit-fit-description">of customers would recomend this product to a friend!</span>
            </div>
            <a href="#" className="pd-help-info-guide">See Customer Review</a>
          </div>
          <div className="clr-fix" />
        </div>
    );
  }
}

export default ProductDescription;
