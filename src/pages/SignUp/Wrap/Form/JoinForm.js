import React, { Component } from 'react';
import List from '../../../../Components/List/List';
import JOIN_LIST from '../../../../data/JoinListData';

import './JoinForm.scss';
class JoinForm extends Component {
  constructor() {
    super();
    this.state = {
      checkPw: '',
      inputList: [],
    };
  }

  render() {
    const { onChange, onClick } = this.props;
    // const { inputList } = this.state;
    // const list = inputList.map(li =>
    //   li.native ? (
    //     <JoinNameList onChange={onChange} onClick={onClick} />
    //   ) : li.year ? (
    //     <JoinBrithList onChange={onChange} onClick={onClick} />
    //   ) : (
    //     <JoinList input={li} onChange={onChange} />
    //   )
    // );

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
                        <List data={JOIN_LIST.first} onChange={onChange} />
                        <List
                          data={JOIN_LIST.sec}
                          onChange={onChange}
                          onClick={onClick}
                        />
                        <List
                          data={JOIN_LIST.third}
                          onChange={onChange}
                          onClick={onClick}
                        />
                        <List data={JOIN_LIST.fou} onChange={onChange} />
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
