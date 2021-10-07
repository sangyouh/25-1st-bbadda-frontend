import React, { Component } from 'react';
import './JoinForm.scss';
class JoinForm extends Component {
  constructor() {
    super();
    this.state = {
      checkPw: '',
    };
  }
  render() {
    const { onChange, onClick, birthday } = this.props;
    return (
      <form className="joinForm">
        <section>
          <div className="header">
            <span className="joinInfo">가입정보</span>
            <span className="requiredInfo">필수입력 항목</span>
            <div className="infoForm">
              <table>
                <colgroup></colgroup>
                <tbody>
                  <tr className="basicInfo">
                    <th>기본정보</th>
                    <td>
                      <ul>
                        <li className="firstInput">
                          <input
                            placeholder="아이디 (6~15자 영문 소문자.숫자)"
                            onChange={onChange}
                            name="id"
                          ></input>
                        </li>
                        <li>
                          <input
                            placeholder="비밀번호 ( 8~12자 영문, 숫자, 특수문자 중 최소 2가지 조합"
                            onChange={onChange}
                            name="pw"
                          ></input>
                        </li>
                        <li>
                          <input
                            placeholder="비밀번호 확인"
                            onChange={onChange}
                            name="checkPw"
                          ></input>
                        </li>
                        <li>
                          <span className="inputSpan">
                            <input
                              className="name"
                              placeholder="이름(실명입력)"
                              onChange={onChange}
                              name="name"
                            ></input>
                          </span>
                          <span className="buttonSpan">
                            <input
                              className="button1"
                              type="radio"
                              name="foreign"
                              value="false"
                              onChange={onClick}
                              // checked={'foreign' === false}
                            ></input>
                            <label className="male">내국인</label>
                            <input
                              className="button2"
                              type="radio"
                              name="foreign"
                              value="true"
                              onChange={onClick}
                              // checked={'foreign' === true}
                            ></input>
                            <label className="female">외국인</label>
                          </span>
                        </li>
                        <li>
                          <span className="inputSpan">
                            <input
                              className="year"
                              placeholder="생년(4자)"
                              onChange={onChange}
                              name="year"
                            ></input>
                            <input
                              className="month"
                              placeholder="월"
                              onChange={onChange}
                              name="month"
                            ></input>
                            <input
                              className="date"
                              placeholder="일"
                              onChange={onChange}
                              name="date"
                            ></input>
                          </span>
                          <span className="buttonSpan">
                            <input
                              className="button1"
                              type="radio"
                              name="gender"
                              value="true"
                              onChange={onClick}
                              // checked={'foreign' === false}
                            ></input>
                            <label className="male">남자</label>
                            <input
                              className="button2"
                              type="radio"
                              name="gender"
                              value="false"
                              onChange={onClick}
                              // checked={'foreign' === false}
                            ></input>
                            <label className="female">여자</label>
                          </span>
                        </li>
                        <li>
                          <input
                            placeholder="E-mail"
                            onChange={onChange}
                            name="email"
                          ></input>
                        </li>
                        <li>
                          <input
                            placeholder="전화번호"
                            onChange={onChange}
                            name="phoneNum"
                          ></input>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  {/* <tr className="certProcess">
                    <th>본인인증</th>
                    <td></td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </form>
    );
  }
}

export default JoinForm;
