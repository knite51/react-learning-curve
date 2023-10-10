import React from 'react';
import Form from './1.Form';
import FormDataWithState from './2.FormDataWithState';
import FormDataWithReactHook from './3.FormDataWithReactHook';
import ValidationWithZod from './4.ValidationWithZod';

const FourthSection = () => {
  return (
    <>
      <div className="row mt-3">
        <hr />
        <h4 className="mb-3">Section Four</h4>
        <Form></Form>
        <FormDataWithState></FormDataWithState>
        <FormDataWithReactHook></FormDataWithReactHook>
        <ValidationWithZod></ValidationWithZod>
      </div>
    </>
  );
};

export default FourthSection;
