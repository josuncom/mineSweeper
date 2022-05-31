import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Board } from '../../components';

const BoardContainer = () => {
	// 필요한 상태 정보를 store로부터 가져옴
	const enableSettings = useSelector(state => state.control.enableSettings);
	const width = useSelector(state => state.control.width);
	const height = useSelector(state => state.control.height);


	return (
		<>
			{!enableSettings &&
			<Board
				width={width}
				height={height}
			/>}
		</>
	);
};

export default BoardContainer;