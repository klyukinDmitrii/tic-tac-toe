import { FieldLayout } from './FieldLayout';
import PropTypes from 'prop-types';

export const Field = ({field, handleClick}) => {
	return (
		<FieldLayout field={field} handleClick={handleClick} />
	)
};

Field.propTypes = {
	field: PropTypes.array,
    handleClick: PropTypes.func,
}
