import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/filterSelectors';
import { editFilter } from 'redux/filter/filterSlice';
import { Input } from './Filter.styled';

const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChangeFilter = e => {
    dispatch(editFilter(e.currentTarget.value));
  };
  return (
    <Formik>
      <Input
        placeholder="Search Contact"
        onChange={handleChangeFilter}
        value={value}
      />
    </Formik>
  );
};

export default Filter;
