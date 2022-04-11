import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FcSearch } from 'react-icons/fc';
import {
  Header,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';
const initialValues = {
  searchImage: '',
};

const schema = yup.object().shape({
  searchImage: yup
    .string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
});

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = ({ searchImage }, { resetForm }) => {
    onSubmit(searchImage);
    resetForm();
  };
  return (
    <Header>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <SearchForm>
          <SearchFormBtn type="submit">
            <SearchFormBtnLabel>
              <FcSearch style={{ width: 32, height: 32 }} />
            </SearchFormBtnLabel>
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            name="searchImage"
            placeholder="Search images and photos"
          />
          <ErrorMessage name="searchImage" />
        </SearchForm>
      </Formik>
    </Header>
  );
};
