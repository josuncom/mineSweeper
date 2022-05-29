import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GAME, CODES } from '../../GameSetting';
import { Cell } from '../components/board/Cell';

const CellContainer = ({
	x,
	y
}) => {
	const dispatch = useDispatch();
	const gameState = useSelector(rootState => rootState.control.gameState);
	const cellCode = useSelector(rootState => rootState.control.boardData[y][x]);

	const getCellText = useCallback((code) => {
		switch (code) {
			case CODES.OPENED:
			case CODES.NOTHING:
				return '';
			case CODES.FLAG:
				return '🚩'
			case CODES.MINE_FLAG:
				switch (gameState) {
					case GAME.WIN:
						return '💣';
					case GAME.LOSE:
						return '💥';
					default:
						return '🚩';
				}
			case CODES.QUESTION:
				return '❔'
			case CODES.MINE_QUESTION:
				switch (gameState) {
					case GAME.WIN:
						return '💣';
					case GAME.LOSE:
						return '💥';
					default:
						return '❔';
				}
			case CODES.MINE:
				switch (gameState) {
					case GAME.WIN:
						return '💣';
					case GAME.LOSE:
						return '💥';
					default:
						return '';
				}
			default:
				return code;
		}
	}, [gameState]);

	return (
		<Cell
			cellCode={cellCode}
			cellText={getCellText(cellCode)}
		/>
	);
};

export default memo(CellContainer);