import React from "react";
import styled from "@emotion/styled";
import { useState } from "react/cjs/react.production.min";

function Calculator({ bill, people, percentage, numberOfPeople }) {
  const five = 5;
  const ten = 10;
  const fifteen = 15;
  const twentyFive = 25;
  const fifty = 50;
  const [custom, setCustom] = useState(0);
  return (
    <FormContainer>
      <label className="bill-section">
        <p>Bill</p>
        <input type="text" placeholder="$0.00" />
      </label>
      <div className="percentage">
        <p>Select Tip %</p>
        <div className="percentage-grid">
          {/* <input type="button" value="5%" />
          <input type="button" value="10%" />
          <input type="button" value="15%" />
          <input type="button" value="25%" />
          <input type="button" value="50%" />
          <input type="button" value="custom" /> */}
          <button value={five}>5%</button>
          <button value={ten}>10%</button>
          <button value={fifteen}>15%</button>
          <button value={twentyFive}>25%</button>
          <button value={fifty}>50%</button>
          <button value={custom}>custom!</button>
        </div>
      </div>
      <label className="people-section">
        <p>Number of People</p>
        <input type="number" onChange={numberOfPeople} />
      </label>
    </FormContainer>
  );
}

export default Calculator;

const FormContainer = styled.div`
  padding: 1em 1em;
  display: flex;
  flex-direction: column;

  .bill-section {
    padding: 0 0 2em;
  }

  .percentage {
    padding: 0 0 1em;
    .percentage-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 10px;
      row-gap: 20px;
    }
  }

  .people-section {
    padding: 3em 0 0;
  }
`;
