import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form, Input, Submit, ErrorMessage } from './ContactForm.styled';
import { useAddContactMutation } from 'redux/myContactsSlice';

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

export const ContactForm = ({ addContact }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { isLoading } = useAddContactMutation();

  const onSubmit = values => {
    addContact(values);

    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <Input type="text" id="name" name="name" {...register('name')} />
      <ErrorMessage>{errors.name?.message}</ErrorMessage>

      <label htmlFor="number">Number</label>
      <Input type="tel" name="number" id="number" {...register('number')} />
      <ErrorMessage>{errors.number?.message}</ErrorMessage>
      <Submit type="submit" disabled={isLoading}>
        Add contact
      </Submit>
    </Form>
  );
};
