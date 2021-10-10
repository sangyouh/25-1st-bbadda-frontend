import React from 'react';
import './DeliverOption.scss';

class DeliverOption extends React.Component {
  render() {
    return (
      <div className="DeliverOption optionBox">
        <span className="optionTtl">배송</span>
        <div className="seletDetail">
          <input type="radio" name="deliversy" />
          <label>택배(무료배송)</label>
          <input type="radio" name="deliversy" />
          <label>매장픽업</label>
        </div>
      </div>
    );
  }
}

export default DeliverOption;
