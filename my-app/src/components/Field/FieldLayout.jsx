import styles from './FieldLayout.module.css'
import PropTypes from 'prop-types';

export const FieldLayout = ({field, handleClick}) => {
	return (
		<div className={styles.board}>
			{field.map((e, i) => (<button className={styles.square} key={i} onClick={() => handleClick(i)}>{e}</button>))}

	</div>
)
}

FieldLayout.propTypes = {
	field: PropTypes.array,
    handleClick: PropTypes.func,
}
