import { Field, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/filterSelectors';
import { editFilter } from 'redux/filter/filterSlice';

const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChangeFilter = e => {
    dispatch(editFilter(e.currentTarget.value));
  };
  return (
    <Formik>
      <div>
        <Field
          placeholder="Search Contact"
          onChange={handleChangeFilter}
          value={value}
        />
      </div>
    </Formik>
  );
};

export default Filter;
