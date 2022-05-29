import React from "react";
import { Wrapper, Title } from "./AppStyle";
import BoardContainer from "./containers/BoardContainer";
import SettingContainer from "./containers/SettingContainer";
import StatusContainer from "./containers/StatusContainer";



export default function App() {
  return (
    <Wrapper>
      <Title>지뢰 찾기 게임</Title>
      <SettingContainer/>
      <StatusContainer/>
      <BoardContainer/>
    </Wrapper>
  );
}