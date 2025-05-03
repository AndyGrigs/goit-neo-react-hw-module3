import { Formik, Form, Field } from "formik";
import React, { useState, useId } from "react";
import * as Yup from "yup";

const ContactForm = ({ onAddContact }) => {
  const concactId = useId();

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(
        /^[0-9\-]+$/,
        "Phone number can only contain numbers and dashes"
      ),
  });

  const initialValues = {
    name: "",
    phone: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    onAddContact({ id: `${concactId}`, ...values });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <label className="block text-gray-700" htmlFor="name">Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              className="mt-1 block h-7  rounded-md border border-gray-300 shadow-sm hover:border-indigo-700 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
