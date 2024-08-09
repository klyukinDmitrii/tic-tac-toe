import { GameLayout } from './GameLayout';
import { useState } from 'react';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const handleClick = (index) => {
		if (winner() || field[index]) return;
		const newFiled = field.slice();
		newFiled[index] = currentPlayer;
		setField(newFiled);
		const newCurrentPlayer = currentPlayer === 'X' ? '0' : 'X';
		setCurrentPlayer(newCurrentPlayer);
	};

	const handleRestart = () => {
		setField(Array(9).fill(''));
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
	};

	const winner = () => {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i];
			if (field[a] && field[a] === field[b] && field[a] === field[c]) {
				return field[a];
			}
		}
		return null;
	};

	if (winner() && !isGameEnded) {
		setIsGameEnded(true);
		currentPlayer === 'X' ? setCurrentPlayer('0') : setCurrentPlayer('X');
	} else if (field.every((elem) => elem !== '') && !isDraw) {
		setIsDraw(true);
		setIsGameEnded(true);
	}

	return (
		<>
			<GameLayout
				field={field}
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
				handleClick={handleClick}
				handleRestart={handleRestart}
			/>
		</>
	);
};
