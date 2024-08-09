import styles from './GameLayout.module.css';
import { Field } from '../Field';
import PropTypes from 'prop-types';
import { Information } from '../Information';


export const GameLayout = ({field, isDraw, isGameEnded, currentPlayer, handleClick, handleRestart}) => {
	return (
		<div className={styles.wrapper}>
			<Information isDraw={isDraw} isGameEnded={isGameEnded} currentPlayer={currentPlayer} />
			<Field field={field} handleClick={handleClick} />
			<button className={styles.buttonRestart} onClick={handleRestart}>Начать заново</button>
		</div>
	);
};

GameLayout.propTypes = {
	field: PropTypes.array,
    handleClick: PropTypes.func,
	handleRestart: PropTypes.func,
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool
}
