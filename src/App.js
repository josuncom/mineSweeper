import React from 'react';
import { SettingsContainer, StatusContainer, BoardContainer } from './containers';
import { Wrapper, Title } from './AppStyle';

const App = () => {
	return (
		<Wrapper>
			<Title>지뢰 찾기</Title>
			<SettingsContainer/>
			<BoardContainer />
			<StatusContainer/>
		</Wrapper>
	);
};

export default App;