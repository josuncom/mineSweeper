// setting에서의 slider 디자인

import styled, { css } from 'styled-components';

const thumbCSS = css
`
	background-color: black;
	border: none;
	border-radius: 0;
	width: 20px;
	height: 20px;
`;

const Slider = styled.input.attrs({
	type: 'range'
})
`
	background-color: white;
	outline: none;
	width: 100%;
	height: 20px;
	-webkit-appearance: none;
	&::-webkit-slider-thumb {
		${thumbCSS};
		-webkit-appearance: none;
	}
	&::-moz-range-thumb {
		${thumbCSS};
	}
	&::-ms-thumb {
		${thumbCSS};
	}
`;

export default Slider;