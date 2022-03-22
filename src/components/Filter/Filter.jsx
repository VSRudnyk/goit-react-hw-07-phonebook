import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <form className={s.form}>
      <label htmlFor="filter">Find contact by name</label>
      <input
        className={s.input}
        type="text"
        id="filter"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
