// 하단에 표기될 게임 현황 출력 컴포넌트

import React from 'react';
import { Wrapper, Mine, ButtonWrapper, RestartButton, SettingsButton, Timer } from './StatusStyle';

const Status = ({	
	leftMineCount,
	mineCount,
	resultEmoji,
	enableSettings,
	elapsedTime,
	onClickRestart,
	onClickSettings
}) => {
	return (
		<Wrapper>
			<Mine>😈 {leftMineCount} / {mineCount}</Mine>
			<ButtonWrapper>
				<RestartButton title="Restart" onClick={onClickRestart}>{resultEmoji}</RestartButton>
				{enableSettings && <SettingsButton title="Settings" onClick={onClickSettings}>⚙️</SettingsButton>}
			</ButtonWrapper>
			<Timer>🕙 {elapsedTime}</Timer>
		</Wrapper>
	);
};

export default Status;