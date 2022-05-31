// 게임 설정에 들어갈 상수 선언


// 게임 설정(가로 세로 지뢰수)
export const MIN_WIDTH = 8;
export const MAX_WIDTH = 32;
export const MIN_HEIGHT = 8;
export const MAX_HEIGHT = 20;
export const MIN_MINES = 10;

// 디자인을 위한 설정
export const CELL_SIZE = 40;
export const CELL_MARGIN = 2;

// 게임 상태를 나타내는 변수
export const GAME = {
	READY: 'ready',
	RUN: 'run',
	WIN: 'win',
	LOSE: 'lose'
};

// 각 칸의 상태를 나타내는 변수
export const CODES = {
	OPENED: 0,
	NOTHING: -1,
	FLAG: -2,
	QUESTION: -3,
	MINE: -4,
	MINE_FLAG: -5,
	MINE_QUESTION: -6
};