import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GAME, CODES } from '../../Constants';
import { openCell, rotateCellState } from '../../store/modules/control';
import { Cell } from '../../components';

const CellContainer = ({
	x, y
}) => {
	const dispatch = useDispatch();	
	const gameState = useSelector(state => state.control.gameState);		// '게임의 상태' 상태 정보를 가져옴
	const cellCode = useSelector(state => state.control.boardData[y][x]);	// '각 칸의 코드' 상태 정보를 가져옴

	const getCellText = useCallback((code) => {	// 각 cell의 code에 따른 동작(cell 형태 변화)해주는 함수
		switch (code) {
			case CODES.OPENED:
			case CODES.NOTHING:
				return '';
			case CODES.FLAG:
				return '🏁'
			case CODES.MINE_FLAG:
				switch (gameState) {
					case GAME.WIN:
						return '💣';
					case GAME.LOSE:
						return '😈';
					default:
						return '🏁';
				}
			case CODES.QUESTION:
				return '❔'
			case CODES.MINE_QUESTION:
				switch (gameState) {
					case GAME.WIN:
						return '💣';
					case GAME.LOSE:
						return '😈';
					default:
						return '❔';
				}
			case CODES.MINE:
				switch (gameState) {
					case GAME.WIN:
						return '💣';
					case GAME.LOSE:
						return '😈';
					default:
						return '';
				}
			default:
				return code;
		}
	}, [gameState]);

	// ../store/control로부터 상태 변화시 실행할 함수를 받아와 알맞게 실행(gameState가 달라질 때까지 저장해놓고 재사용)
	const onClickCell = useCallback(() => {	
		if (gameState === GAME.READY || gameState === GAME.RUN) {
			dispatch(openCell(x, y));
		}
	}, [gameState]);

	const onRightClickCell = useCallback((e) => {
		e.preventDefault();

		if (gameState === GAME.READY || gameState === GAME.RUN) {
			dispatch(rotateCellState(x, y))
		}
	}, [gameState]);

	return (
		<Cell
			cellCode={cellCode}
			cellText={getCellText(cellCode)}
			onClickCell={onClickCell}
			onRightClickCell={onRightClickCell}
		/>
	);
};

export default CellContainer;