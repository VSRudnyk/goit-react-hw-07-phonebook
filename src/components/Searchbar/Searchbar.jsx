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
    console.log(searchImage);
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

/* 
      <Formik initialValues={initialValues}>
        {' '}
        onSubmit={handleSubmit}
        
        
            <span class="button-label">Search</span>
          </button>

          <Field
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            name="searchImage"
            placeholder="Search images and photos"
          />
          <ErrorMessage name="searchImage" />
        </Form>
      </Formik>
    </header> */
