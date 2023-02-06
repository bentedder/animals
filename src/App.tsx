import styled from "@emotion/styled";
import { Button } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Wrap>
      <h1>Guess the animal</h1>
      <Button variant="contained">Start!</Button>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 16px;
`;

export default App;
