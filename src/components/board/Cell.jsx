import React, {memo} from 'react';
import { Button } from './CellStyle';

const Cell = ({
	cellCode,
	cellText,
}) => {
	return (
		<Button cellCode={cellCode}>{cellText}</Button>
	);
};

export default memo(Cell);