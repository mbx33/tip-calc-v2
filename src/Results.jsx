import React from "react";
import styled from "@emotion/styled";

function Results({ total, tip, reset, people }) {
  return (
    <ResultsContainer>
      <TopWrap>
        <p>Tip Amount</p>
        <p>/ person</p>
        <p className="tip">${tip}</p>
        <br />
        <p>Total</p>
        <p>/ person</p>
        <p className="total">${total}</p>
      </TopWrap>
      <BottomWrap>
        <button onClick={reset}>RESET</button>
      </BottomWrap>
      {people}
    </ResultsContainer>
  );
}

export default Results;

const ResultsContainer = styled.div`
  background: hsl(183, 100%, 15%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .tip,
  .total {
    color: hsl(172, 67%, 45%);
    font-size: 40px;
  }

  button {
    background-color: hsl(172, 67%, 45%);
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: none;
  }
`;

const TopWrap = styled.div`
  padding: 1rem 1rem 0;
`;

const BottomWrap = styled.div`
  padding: 2rem 1rem 2rem;
`;
