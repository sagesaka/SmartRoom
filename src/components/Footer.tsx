/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const footerBackground = css`
  padding: 20px 0;
  background-color: #28c8ff;
  position: sticky;
  top: 100vh;
  width: 100%;
`
const footerContent = css`
  font-size: 0.8rem;
  color: #fff;
  text-align: center;
`

const Footer = () => {
  return (
    <div css={footerBackground}>
      <div css={footerContent}>
        © 2025 Riprice Co.,Ltd. Development Div.
      </div>
    </div>
  )
}

export default Footer;