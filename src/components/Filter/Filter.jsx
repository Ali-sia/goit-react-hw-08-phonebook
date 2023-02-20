import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/contacts.filter.slice';
import { getFilter } from '../../redux/contacts/contacts.selectors';

// import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = e => {
    const filterValue = e.target.value;

    try {
      setFilter(filterValue);
    } catch {
      console.log('-> set filter dont work');
    }
    try {
      dispatch(setFilter(filterValue));
    } catch {
      console.log('-> filter dispatch dont work');
    }
  };

  return (
    <>
      <FormGroup
        sx={{
          marginTop: '20px',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      >
        <TextField
          id="outlined-basic"
          label="Filter"
          variant="outlined"
          type="text"
          value={filter}
          onChange={onChangeFilter}
        />
      </FormGroup>
    </>
  );
};

export default Filter;
