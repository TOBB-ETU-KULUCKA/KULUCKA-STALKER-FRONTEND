import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import Image from 'next/image'

import styles from '../styles/Login.module.css'

type Data = {
  name: string,
  email: string,
  password: string,
  accept: boolean
}

type Error = {
  email: string,
  password: string,
  accept: string
}

const Register = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState<Data>();

  const validate = (data: Data) => {
    let errors: any = {};

    if (!data.name) {
      errors.name = 'Name is required.';
    }
    if (!data.email) {
      errors.email = 'Email is required.';
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = 'Invalid email address. E.g. example@email.com';
    }

    if (!data.password) {
      errors.password = 'Password is required.';
    }

    if (!data.accept) {
      errors.accept = 'You need to agree to the terms and conditions.';
    }

    return errors;
  };

  const onSubmit = (data: Data, form: any) => {
    setFormData(data);
    setShowMessage(true);

    form.restart();
  };

  const isFormFieldValid = (meta: any) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta: any) => {
    return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
  };

  const passwordHeader = <h6>Pick a password</h6>;
  const passwordFooter = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </React.Fragment>
  );

  return (
    <div className={styles.container}>

      <main className={styles.main}>

        <section className="h-screen">
          <div className="container px-6 py-12 h-full">
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
              <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                <Image src="/images/kulucka.png" className="w-full" alt="Phone image" width={643} height={644} style={{ maxWidth: "500px" }} />
              </div>
              <div className="form-demo md:w-8/12 lg:w-5/12 lg:ml-20">
                <div className="flex justify-content-center">
                  <div className="card">
                    <h5 className="text-center">Register</h5>
                    <Form onSubmit={onSubmit} initialValues={{ name: '', email: '', password: '', date: null, country: null, accept: false }} validate={validate} render={({ handleSubmit }) => (
                      <form onSubmit={handleSubmit} className="p-fluid">

                        <Field name="name" render={({ input, meta }) => (
                          <div className="field">
                            <span className="p-float-label">
                              <InputText id="name" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                              <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Name*</label>
                            </span>
                            {getFormErrorMessage(meta)}
                          </div>
                        )} />

                        <Field name="email" render={({ input, meta }) => (
                          <div className="field">
                            <span className="p-float-label p-input-icon-right">
                              <i className="pi pi-envelope" />
                              <InputText id="email" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                              <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Email*</label>
                            </span>
                            {getFormErrorMessage(meta)}
                          </div>
                        )} />

                        <Field name="password" render={({ input, meta }) => (
                          <div className="field">
                            <span className="p-float-label">
                              <Password id="password" {...input} toggleMask className={classNames({ 'p-invalid': isFormFieldValid(meta) })} header={passwordHeader} footer={passwordFooter} />
                              <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Password*</label>
                            </span>
                            {getFormErrorMessage(meta)}
                          </div>
                        )} />

                        <Button type="submit" label="Register" className="mt-2" />
                      </form>
                    )} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        Powered by TOBB ETU Kulu??ka
      </footer>
    </div>
  )
}

export default Register;