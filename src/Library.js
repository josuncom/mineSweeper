import { CODES } from "./Setting";

export const initBoard = ( width, height, numOfMine) => {
    const numbers = Array(width * height).fill().map((v, i) => i);  // Board의 칸 수만큼의 수를 저장하는 배열
    const temp = [];        
    const BoardData = [];

    while (numbers.length > (width * height - numOfMine)){
        const randomNum = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0]; // 지뢰 수만큼의 랜덤한 수를 temp에 push
        temp.push(randomNum);
    }

    for (let i = 0; i < height; i++) {
		const rowData = Array(width).fill(CODES.NOTHING);   // Board의 모든 칸을 지뢰가 아닌 칸으로 초기화
		BoardData.push(rowData);
	}

	for (let i = 0; i < temp.length; i++) {     // 지뢰를 랜덤하게 배치
		const x = temp[i] % width;
		const y = Math.floor(temp[i] / width);
		BoardData[y][x] = CODES.MINE;
	}

	return BoardData;
};

export const getNextCellCode = (code) => {
	switch (code) {
		case CODES.NOTHING:
			return CODES.FLAG;
		case CODES.MINE:
			return CODES.MINE_FLAG;
		case CODES.FLAG:
			return CODES.QUESTION;
		case CODES.MINE_FLAG:
			return CODES.MINE_QUESTION;
		case CODES.QUESTION:
			return CODES.NOTHING;
		case CODES.MINE_QUESTION:
			return CODES.MINE;
		default:
			return code;
	}
};

export const getFlagIncDec = (code) => {
	switch (code) {
		case CODES.NOTHING:
		case CODES.MINE:
			return 1;
		case CODES.FLAG:
		case CODES.MINE_FLAG:
			return -1;
		default:
			return 0;
	}
};

export const expandOpenedCell = (boardData, x, y) => {
	let openedCellCount = 0;

	// 지뢰의 수를 카운트하기 위한 함수
	const getMineCount = (x, y) => {
		let aroundCode = [];
		let mineCount = 0;

		aroundCode = boardData[y - 1] ? aroundCode.concat(boardData[y - 1][x - 1], boardData[y - 1][x], boardData[y - 1][x + 1]) : aroundCode;
		aroundCode = aroundCode.concat(boardData[y][x - 1], boardData[y][x + 1]);
		aroundCode = boardData[y + 1] ? aroundCode.concat(boardData[y + 1][x - 1], boardData[y + 1][x], boardData[y + 1][x + 1]) : aroundCode;

		mineCount = aroundCode.filter(v => [
			CODES.MINE,
			CODES.MINE_FLAG,
			CODES.MINE_QUESTION
		].includes(v)).length;

		return mineCount;
	};

	// 칸 확장을 위한 DFS Search 진행 
	const dfsSearch = (x, y) => {
		if (boardData[y][x] !== CODES.NOTHING) {
			return;
		}

		boardData[y][x] = getMineCount(x, y);
		openedCellCount++;

		let aroundPoint = [];
		aroundPoint = boardData[y - 1] ? aroundPoint.concat({ x: x - 1, y: y - 1 }, { x, y: y - 1 }, { x: x + 1, y: y - 1 }) : aroundPoint;
		aroundPoint = aroundPoint.concat({ x: x - 1, y }, { x: x + 1, y });
		aroundPoint = boardData[y + 1] ? aroundPoint.concat({ x: x - 1, y: y + 1 }, { x, y: y + 1 }, { x: x + 1, y: y + 1 }) : aroundPoint;

		if (boardData[y][x] === 0) {
			aroundPoint.forEach((v) => {
				dfsSearch(v.x, v.y);
			});
		}
	};

	dfsSearch(x, y);
	return { boardData, openedCellCount };
};