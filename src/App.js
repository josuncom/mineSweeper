import React from 'react';
import { 
	SettingsContainer,
	StatusContainer,
	BoardContainer
} from './containers';
import {
	Wrapper,
	Title
} from './AppStyle';

const App = () => {
	return (
		<Wrapper>
			<Title>Minesweeper Game in React</Title>
			<BoardContainer />
		</Wrapper>
	);
};

export default App;