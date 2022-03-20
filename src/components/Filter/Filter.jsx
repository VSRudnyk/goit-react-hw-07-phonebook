const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contact by name
      <input type="text" onChange={onChange} value={value} />
    </label>
  );
};

export default Filter;
