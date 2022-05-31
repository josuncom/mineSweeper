import styled from 'styled-components';
import { CELL_SIZE, CELL_MARGIN, CODES } from '../../Constants';

export const Button = styled.button
`
	background-color: ${({ cellCode }) => {	// 각 칸에 해당하는 3가지 경우의 색 지정
		switch (cellCode) {
			case CODES.NOTHING:
			case CODES.MINE:
				return '#656565';
			case CODES.FLAG:
			case CODES.MINE_FLAG:
				return '#6EFF77';
			case CODES.QUESTION:
			case CODES.MINE_QUESTION:
				return '#F7FF77';
			default:
				return 'white';
		}
	}};
	transition : 0.5s;
	border: none;
	box-sizing: border-box;
	color: ${({ cellCode }) => {	// 각 칸의 숫자에 해당하는 색 지정
		switch (cellCode) {
			case 1:
				return '#0984E3';
			case 2:
				return '#00B894';
			case 3:
				return '#D63031';
			case 4:
				return '#223DAA';
			case 5:
				return '#D35400';
			case 6:
				return '#8E44AD';
			case 7:
				return '#904323';
			case 8:
				return '#FC427B';
			default:
			
			return 'black';
		
		
		}	// 아래는 폰트 크기, 각 칸당 크기 등 선언		
	}};		
	display: block;	
	font-size: 18px;
	font-weight: bold;
	margin: ${CELL_MARGIN}px;
	outline: none;
	width: ${CELL_SIZE}px;
	height: ${CELL_SIZE}px;
`;