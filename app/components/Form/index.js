import React from 'react';
import './Form.scss';
import * as Yup from 'yup';
import { Container, Button, FormGroup } from 'reactstrap';
import BrightButton from '../BrightButton';
import BasicButton from '../BasicButton';
import Placeholder from '../Placeholder';
// import girl from '../../images/girl.png';
// import cake from '../../images/cake.png';
// import lipstick from '../../images/lipstick.png';
// import cherries from '../../images/cherries.png';
// import { Formik, Form, Field, ErrorMessage } from '../../../node_modules/formik';
// import send from './../SendEmailAPI';

const ContactFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  phoneNumber: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number is not valid',
    )
    .required('Required'),
  age: Yup.number()
    .required('Required')
    .positive()
    .integer()
    .min(16),
  experience: Yup.string().required('Required'),
  diagnosis: Yup.string()
    .min(5, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  comments: Yup.string(),
  aboutTherapy: Yup.boolean()
    .required('The terms and conditions must be accepted.')
    .oneOf([true], 'The terms and conditions must be accepted.'),
  acceptTerms: Yup.boolean()
    .required('The terms and conditions must be accepted.')
    .oneOf([true], 'The terms and conditions must be accepted.'),
});

export default function ContactForm() {
  return (
    <div className="ContactForm">
      {/* <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            age: '',
            diagnosis: '',
            comments: '',
            experience: '',
            aboutTherapy: false,
            acceptTerms: false,
          }}
          validationSchema={ContactFormSchema}
          onSubmit={(values, { resetForm }) => {
            // same shape as initial values
            send(values);
            resetForm({});
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Container className="form-container">
                <FormGroup>
                  <Field name="firstName" placeholder="imię" />
                  {errors.firstName && touched.firstName ? (
                    <div>{errors.firstName}</div>
                  ) : null}
                </FormGroup>

                <FormGroup>
                  <Field name="lastName" placeholder="nazwisko" />
                  {errors.lastName && touched.lastName ? (
                    <div>{errors.lastName}</div>
                  ) : null}
                </FormGroup>

                <FormGroup>
                  <Field name="email" type="email" placeholder="adres email" />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </FormGroup>

                <FormGroup>
                  <Field
                    name="comments"
                    type="comments"
                    placeholder="Uwagi"
                    component="textarea"
                  />
                </FormGroup>

                <FormGroup>
                  <Field
                    type="checkbox"
                    name="aboutTherapy"
                    className={
                      'form-check-input ' +
                      (errors.acceptTerms && touched.acceptTerms
                        ? ' is-invalid'
                        : '')
                    }
                  />
                  <label htmlFor="boutTherapy" className="form-check-label">
                    Zapoznałem się z treścią zakładek "O metodzie" i "O terapii"
                  </label>
                  <ErrorMessage
                    name="aboutTherapy"
                    component="div"
                    className="invalid-feedback"
                  />
                </FormGroup>

                <FormGroup>
                  <Field
                    type="checkbox"
                    name="acceptTerms"
                    className={
                      'form-check-input ' +
                      (errors.acceptTerms && touched.acceptTerms
                        ? ' is-invalid'
                        : '')
                    }
                  />
                  <label htmlFor="acceptTerms" className="form-check-label">
                    Zgadzam się na przetwarzanie moich danych w celu
                    przeprowadzenia terapii
                  </label>
                  <ErrorMessage
                    name="acceptTerms"
                    component="div"
                    className="invalid-feedback"
                  />
                </FormGroup>

                <FormGroup>
                  <BrightButton type="submit">
                    Wyślij
                  </BrightButton>
                </FormGroup>
              </Container>
            </Form>
          )}
        </Formik> */}
    </div>
  );
}
