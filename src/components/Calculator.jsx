import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  getValueInputOneAction,
  getValueInputTwoAction,
  getSelectValueAction,
} from '../store/calculator';

export const Calculator = () => {
  const calculator = useSelector((store) => store.calculator);
  const dispatch = useDispatch();
  console.log(calculator);
  function getSelectValue(e) {
    dispatch(getSelectValueAction(e.target.value));
  }
  function getInputOneValue(e) {
    dispatch(getValueInputOneAction(Number(e.target.value)));
  }
  function getInputTwoValue(e) {
    dispatch(getValueInputTwoAction(Number(e.target.value)));
  }
  function resultHandler() {
    switch (calculator.operator) {
      case '+':
        return dispatch({ type: '+' });
      case '-':
        return dispatch({ type: '-' });
      case 'x':
        return dispatch({ type: 'x' });
      case '/':
        return dispatch({ type: '/' });
    }
  }
  return (
    <Container>
      <h1>Calculator</h1>
      <OperatorContainer>
        <Input
          value={calculator.inputOne}
          type="number"
          onChange={getInputOneValue}
        />
        <select onChange={getSelectValue} name="Arifmetic action" id="">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="x">x</option>
          <option value="/">/</option>
        </select>
        <Input
          value={calculator.inputTwo}
          type="number"
          onChange={getInputTwoValue}
        />
        <button onClick={resultHandler}>=</button>
        <p>{calculator.result}</p>
      </OperatorContainer>
    </Container>
  );
};
const Container = styled.div`
  margin-top: 30px;
  border-radius: 10px;
  background-color: #ffc83d;
  width: 50%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const OperatorContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  select {
    height: 40px;
    width: 50px;
    text-align: center;
    background-color: #504f4f;
    color: white;
    font-size: 24px;
    border-radius: 10px;
    border: none;
    :focus {
      background-color: #bbebeb;
      color: black;
    }
  }
  button {
    height: 40px;
    width: 50px;
    text-align: center;
    background-color: #504f4f;
    color: white;
    font-size: 24px;
    border-radius: 10px;
    border: none;
    :active {
      background-color: #bbebeb;
      color: black;
    }
  }
  p {
    margin: 0;
    font-size: 20px;
  }
`;
const Input = styled.input`
  width: 150px;
  height: 40px;
  font-size: 20px;
  border-radius: 10px;
  border: none;
  text-align: center;
  :focus {
    background-color: #bbebeb;
  }
`;
