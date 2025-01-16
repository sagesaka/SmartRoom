/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import EventAvailable from '@mui/icons-material/EventAvailable';
import Person from '@mui/icons-material/Person';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { signInWithGoogle, auth } from '../Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

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
const userIcon = css`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
`
const logout = (isClick: boolean) => css`
  position: absolute;
  top: 50px;
  right: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 2;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  opacity: ${isClick ? 1 : 0};
  transform: scale(${isClick? 1 : 0.95});
`
const StyledHR = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
`

const Header = () => {
  const [user, setUser] = useState(null);
  const [logoutWindow, setLogoutWindow] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // ログイン機能
  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      alert("ログインに失敗しました")
    }
  }
  
  // ログアウト機能
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setLogoutWindow(false);
      alert("ログアウトしました");
    } catch (error) {
      console.error("ログアウトに失敗しました", error)
    }
  };
  
  return (
    <div css={headerBackground}>
      <div css={appTitle}>
        <EventAvailable css={iconStyle} />
        SmartRoom
      </div>
      {user ? (
        <div css={userIcon} onClick={() => setLogoutWindow(!logoutWindow)}>
          <img src={user.photoURL || <Person />}
          css={userIcon}
          title={user.displayName || 'User'}
          />
          <div css={logout(logoutWindow)} onClick={handleLogout}>
            <div>{user.displayName } {user.email}</div>
            <StyledHR />
            <div onClick={handleLogout}>ログアウト</div>
          </div>
        </div>
      ) : (
        <div css={login} onClick={handleLogin}>
          ログイン
        </div>
      )}
    </div>
  )
}

export default Header