import styles from './InformationLayout.module.css';
import PropTypes from 'prop-types';



export const InformationLayout = ({isDraw, isGameEnded, currentPlayer}) => {
	return (
		<div className={styles.info}>
			<p className={styles['info_text']}>
				{isDraw && 'Ничья'}
				{!isDraw && isGameEnded && `Победа: ${currentPlayer}`}
				{!isDraw && !isGameEnded && `Ходит: ${currentPlayer}`}
			</p>
		</div>
	)
}

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool
}
