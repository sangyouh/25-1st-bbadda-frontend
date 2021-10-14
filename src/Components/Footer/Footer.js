import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <div className="footerWrapper">
          <div className="menu">
            <ul className="menuLists">
              {FOOTER_DATA.map(({ id, content }) => {
                return (
                  <li className="list" key={id}>
                    <Link to="#">{content}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="company">
            <address>
              <p>427 Teheran-ro, Samseong-dong, Gangnam-gu, Seoul</p>
              <p>
                사업자등록번호:1234-56-789/통신판매업
                신고번호:제2021-서울강남-99999
              </p>
            </address>
            <div className="copyright">
              <p>
                BBADDA!에서 직접 운영하는 BBADDA! 온라인 사이트 내의 상품은
                BBADDA! 오프라인 매장과 동일하게 판매되는 정품 상품입니다.
              </p>
            </div>
          </div>
          <div className="infos">
            <div className="cs">
              <span>CS CENTER</span>
              <span>010-5555-4321</span>
            </div>
            <div className="time">
              <p>AM 10시 ~ PM 10시</p>
              <p>DAY OFF (SATURDAY, SUNDAY, HOLIDAY)</p>
              <p>E-MAIL : BBADDA@bbadda.com</p>
            </div>
          </div>
          <div className="infoBottom">
            <div className="link">
              <ul>
                <li>
                  <Link to="#">개인정보처리방침</Link>
                </li>
                <li>
                  <Link to="#">이용약관</Link>
                </li>
                <li>
                  <Link to="#">이메일 무단 수집 거부</Link>
                </li>
                <li>
                  <Link to="#">SNS 저작물 이용 동의서</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

const FOOTER_DATA = [
  {
    id: 1,
    content: '공지사항',
  },
  {
    id: 2,
    content: '매장안내',
  },
  {
    id: 3,
    content: '단체구매문의',
  },
  {
    id: 4,
    content: '대리점 개설/위탁관리자 지원 문의',
  },
  {
    id: 5,
    content: '고객센터',
  },
  { id: 6, content: '1:1문의' },
];
