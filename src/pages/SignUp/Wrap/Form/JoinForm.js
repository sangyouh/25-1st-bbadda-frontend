import React, { Component } from 'react';
import JoinList from './JoinList';
import JoinRadioList from './JoinRadioList';
import './JoinForm.scss';
class JoinForm extends Component {
  constructor() {
    super();
    this.state = {
      checkPw: '',
      inputList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/joinListData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          inputList: res.list, //footList = 기존 배열 footer = json에서 내가 만든 데이터 배열 이름,
        });
      });
  }

  render() {
    const { onChange, onClick } = this.props;
    const { inputList } = this.state;
    const list = inputList.map(input =>
      input.type !== 'radio' ? (
        <JoinList input={input} onChange={onChange} />
      ) : (
        <JoinRadioList input={input} onClick={onClick} />
      )
    );
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
                        {list}
                        {/* <li className="firstInput">
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
                          />
                        </li>
                        <li>
                          <input
                            placeholder="비밀번호 확인"
                            onChange={onChange}
                            name="checkPw"
                          />
                        </li>
                        <li>
                          <input
                            className="name"
                            placeholder="이름(실명입력)"
                            onChange={onChange}
                            name="name"
                          />
                          <input
                            className="button1"
                            type="radio"
                            name="foreign"
                            value="false"
                            onChange={onClick}
                            // checked={'foreign' === false}
                          />
                          <label className="radioLabel">내국인</label>
                          <input
                            className="button2"
                            type="radio"
                            name="foreign"
                            value="true"
                            onChange={onClick}
                            // checked={'foreign' === true}
                          />
                          <label className="radioLabel">외국인</label>
                        </li>
                        <li>
                          <input
                            className="year"
                            placeholder="생년(4자)"
                            onChange={onChange}
                            name="year"
                          />
                          <input
                            className="month"
                            placeholder="월"
                            onChange={onChange}
                            name="month"
                          />
                          <input
                            className="date"
                            placeholder="일"
                            onChange={onChange}
                            name="date"
                          />

                          <input
                            className="button1"
                            type="radio"
                            name="gender"
                            value="true"
                            onChange={onClick}
                            // checked={'foreign' === false}
                          />
                          <label className="radioLabel">남자</label>
                          <input
                            className="button2"
                            type="radio"
                            name="gender"
                            value="false"
                            onChange={onClick}
                            // checked={'foreign' === false}
                          />
                          <label className="radioLabel">여자</label>
                        </li>
                        <li>
                          <input
                            placeholder="E-mail"
                            onChange={onChange}
                            name="email"
                          />
                        </li>
                        <li>
                          <input
                            placeholder="전화번호"
                            onChange={onChange}
                            name="phoneNum"
                          />
                        </li> */}
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
