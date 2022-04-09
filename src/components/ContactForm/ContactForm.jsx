import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup
    .string()
    .required('This field is Required')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number is not valid'
    ),
});

const FormContainer = styled(Form)`
  outline: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 15px;
`;

const Input = styled(Field)`
  width: 150px;
  margin-bottom: 15px;
`;

const Submit = styled.button`
  width: 100px;
`;

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    return onSubmit(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormContainer>
        <label htmlFor="name">Name</label>
        <Input type="text" id="name" name="name" />
        <ErrorMessage name="name" />
        <label htmlFor="number">Number</label>
        <Input type="tel" name="number" id="number" />
        <ErrorMessage name="number" />
        <Submit type="submit">Add contact</Submit>
      </FormContainer>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
