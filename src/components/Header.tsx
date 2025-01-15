/** @jsxImportSource @emotion/react */
import React from 'react';
import EventAvailable from '@mui/icons-material/EventAvailable'
import { css } from '@emotion/react';

const headerBackground = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 40px;
  background-color: #28c8ff;
`
const appTitle = css`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`
const iconStyle = css`
  font-size: 1.5rem;
  margin-right: 10px;
`
const login = css`
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 5px 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    background-color: #fff;
    transition: right 0.3s ease-in-out;
    z-index: -1;
  }
  &:hover {
    color: #28c8ff;
  }
  &:hover::before {
    right: 0;
  }
`

const Header = () => {
  return (
    <div css={headerBackground}>
      <div css={appTitle}>
        <EventAvailable css={iconStyle} />
        SmartRoom
      </div>
      <div css={login}>
        Login
      </div>
    </div>
  )
}

export default Header