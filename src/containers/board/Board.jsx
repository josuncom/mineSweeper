import React from 'react';
import { useSelector } from 'react-redux';
import { Board } from '../../components/board/Board';

const BoardContainer = () => {
	const width = useSelector(rootState => rootState.control.width);
	const height = useSelector(rootState => rootState.control.height);

	return (
			<Board width={width} height={height}/>
	);
};

export default BoardContainer;