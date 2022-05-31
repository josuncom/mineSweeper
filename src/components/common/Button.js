// setting에서의 버튼 디자인

import styled from 'styled-components';

const Button = styled.button
`
	background-color: white;
	border: none;
	border-radius: 5px;
	color: black;
	cursor: pointer;
	font-size: 14px;
	outline: none;
	padding: 10px;
	transition-duration: 0.2s;
	width: 100%;
	&:hover {
		background-color: #1C567D;
	}
`;

export default Button;