import "./styles/reset.css";
import "./styles/App.css";
import Display from "./Display";
import styled from "@emotion/styled";

function App() {
  return (
    <Container className="App">
      <h1>Bill Splitter</h1>
      <Display />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 3rem 0;
  }
`;
