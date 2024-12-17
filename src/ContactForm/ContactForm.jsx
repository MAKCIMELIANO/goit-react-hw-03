import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required field')
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters'),
  number: Yup.string()
    .required('Required field')
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters'),
});

export default function ContactForm({ onAddContact }) {
  const handleSubmit = async (values, { resetForm }) => {
    onAddContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.contactForm}>
          <ErrorMessage name="name" component="div" className={css.error} />
          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage name="number" component="div" className={css.error} />
          <Field type="number" name="number" placeholder="Number" />

          <button type="submit" disabled={isSubmitting}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
