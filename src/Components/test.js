<ul>
  <List
    data={JOIN_LIST.first}
    onChange={onChange}
    errorMessage={errorMessage}
  />
  <li className="joinList">
    <Input
      className="name"
      placeholder="이름(실명입력)"
      name="name"
      onChange={onChange}
    />
    <RadioInput
      name="foreigner"
      onClick={onClick}
      firstText="외국인"
      secondText="내국인"
    />
  </li>
  <li className="joinList">
    <BirthdayInput onChange={onChange} />
    <RadioInput
      name="gender"
      onClick={onClick}
      firstText="남자"
      secondText="여자"
    />
  </li>
  <List data={JOIN_LIST.fou} onChange={onChange} />
  <li className="joinListLast">
    <PhoneInput
      firstInputName="firstNum"
      secondInputName="secondNum"
      thirdInputName="thirdNum"
      onChange={onChange}
      None=""
    />
  </li>
</ul>;
