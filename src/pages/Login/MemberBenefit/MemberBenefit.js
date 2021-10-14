import React, { Component } from 'react';
import './MemberBenefit.scss';

class MemberBenefit extends Component {
  render() {
    return (
      <ul className="MemberBenefit">
        <li className="mileage">
          <div>
            <span>
              가입 마일리지
              <br />
              10,000원
            </span>
          </div>
        </li>
        <li className="coupon">
          <div>
            <span>
              첫구매 감사
              <br />
              15% 쿠폰
              <br />
              (온라인전용)
            </span>
          </div>
        </li>
        <li className="percent">
          <div>
            <span>
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
