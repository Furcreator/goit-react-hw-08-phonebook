import { Field, Formik } from 'formik';
// import { useDispatch, useSelector } from 'react-redux';
// import { editFilter } from 'redux/filterSlice';
// import { getFilter } from 'redux/selectors';

const Filter = () => {
  //   const value = useSelector(getFilter);
  //   const dispatch = useDispatch();
  //   const handleChangeFilter = e => {
  //     dispatch(editFilter(e.currentTarget.value));
  //   };
  return (
    <Formik>
      <div>
        <Field
          placeholder="Search Contact"
          //   onChange={handleChangeFilter}
          //   value={value}
        />
      </div>
    </Formik>
  );
};

export default Filter;