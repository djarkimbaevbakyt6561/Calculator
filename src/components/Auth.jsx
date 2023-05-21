import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

export const Auth = () => {
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();
  function loginUser() {
    dispatch({ type: 'LOGIN' });
  }
  function logoutUser() {
    dispatch({ type: 'LOGOUT' });
  }
  return (
    <div>
      {auth ? (
        <Button onClick={logoutUser}>LogOut</Button>
      ) : (
        <Button onClick={loginUser}>LogIn</Button>
      )}
    </div>
  );
};
const Button = styled.button`
  height: 60px;
  width: 120px;
  font-size: 24px;
  border: none;
  border-radius: 10px;
  :active {
    background-color: #bbebeb;
  }
`;
