import React from "react";
import { Wrapper, Title } from "./AppStyle";
import BoardContainer from "./containers/board/Board";


export default function App() {

  return (
    <Wrapper>
      <Title>지뢰 찾기 게임</Title>
      <BoardContainer/>
    </Wrapper>
  );
}