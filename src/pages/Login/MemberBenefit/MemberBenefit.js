import React, { Component } from 'react';
import './MemberBenefit.scss';

class MemberBenefit extends Component {
  render() {
    return (
      <ul className="MemberBenefit">
        <li className="mileage">
          <div className="memberDiv">
            <span className="memberSpan">
              가입 마일리지
              <br />
              10,000원
            </span>
          </div>
        </li>
        <li className="coupon">
          <div className="memberDiv">
            <span className="memberSpan">
              첫구매 감사
              <br />
              15% 쿠폰
              <br />
              (온라인전용)
            </span>
          </div>
        </li>
        <li className="percent">
          <div className="memberDiv">
            <span className="memberSpan">
              등급별 마일리지
              <br />
              최대 6% 적립
            </span>
          </div>
        </li>
      </ul>
    );
  }
}

export default MemberBenefit;
