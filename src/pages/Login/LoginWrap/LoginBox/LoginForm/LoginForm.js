import React, { Component } from 'react';
import MemberForm from './MemberForm/MemberForm';
import NonMemberForm from './NonMemberForm';
import './LoginForm.scss';

class LoginForm extends Component {
  render() {
    return (
      <div className="forms">
        <MemberForm />
        {/* <NonMemberForm /> */}
      </div>
    );
  }
}

export default LoginForm;
