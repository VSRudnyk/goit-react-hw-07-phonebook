import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 150px;
`;

const Filter = ({ value, onChange }) => {
  return (
    <Form>
      <label htmlFor="filter">Find contact by name</label>
      <Input type="text" id="filter" onChange={onChange} value={value} />
    </Form>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
