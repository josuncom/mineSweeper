import React from 'react';
import { Wrapper } from './BoardStyle';
import { CellContainer } from '../../containers';

const Board = ({
	width,
	height
}) => {
	return (
		<Wrapper widthSize={width}>
			{Array(width * height).fill().map((v, i) => 
				<CellContainer key={i} x={i % width} y={Math.floor(i / width)} />
			)}
		</Wrapper>
	);
};

export default Board;