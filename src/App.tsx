import styled1 from "@emotion/styled";
import styled2 from "styled-components";

const StyledDiv1 = styled1("div")({
  color: "red"
});

// or
const StyledDiv2 = styled2.div`
  color: red;
`;

export default function App() {
  return (
    <div>
      <StyledDiv1>emotion</StyledDiv1>
      <StyledDiv2>styled-components!</StyledDiv2>
    </div>
  );
}
