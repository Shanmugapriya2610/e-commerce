import React, { useEffect, useState } from "react";
import './layout.scss'


export function AuthLayout(props){

  const [headerContent, setHtmlContent] = useState('');
  const [footerContent, setFooterContent] = useState('');

  useEffect(() => {
    async function fetchHeaderContent() {
      const response = await fetch(process.env.REACT_APP_HEADER_URL);
      const html = await response.text();
      setHtmlContent(html);
    }
    async function fetchFooterContent() {
      const res = await fetch(process.env.REACT_APP_FOOTER_URL);
      const footer = await res.text();
      setFooterContent(footer);
    }
    fetchHeaderContent();
    fetchFooterContent();
  }, []);


  return (
    <div className="authLayout">
      <div dangerouslySetInnerHTML={{ __html: headerContent }} />
      <div className="login-wrapper">{props?.children}</div>
      <div dangerouslySetInnerHTML={{ __html: footerContent }} className='footer-item' />
    </div>
  );
}

export default AuthLayout;