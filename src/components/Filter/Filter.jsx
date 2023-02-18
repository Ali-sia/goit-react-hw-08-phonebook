import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/contacts.filter.slice';
import { getFilter } from '../../redux/contacts/contacts.selectors';

// import PropTypes from 'prop-types';
import { EnterLabel, EnterInput } from '../App.styled';

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
      <EnterLabel>
        Filter:
        <EnterInput type="text" value={filter} onChange={onChangeFilter} />
      </EnterLabel>
    </>
  );
};

export default Filter;
