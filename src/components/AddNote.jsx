import React from 'react';
// Import Formik and Yup
import { Formik, Form , Field , ErrorMessage} from 'formik';
import * as Yup from 'yup';

const AddNote = (props) => {

  // add form logic here

  const {addNote} = props;
  const initialValues = {
    title: '',
    description: ''
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Add your title here  '),
    description: Yup.string().required('Add your content here note')
  });


  const handleSubmit = (values) => {
    addNote({
      title: values.title,
      content: values.description
    });

  }

  return (
    <div className="p-6 w-2/4 bg-white rounded"  >
     <Formik
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={handleSubmit}
     >
      <Form className="p-2 flex flex-col  ">
        <Field 
          type="text"
          name="title"
          placeholder="title"
          className="w-full p-3  mb-1 border-2 rounded outline-none"
          />
        <ErrorMessage name="title" component="div" className="  text-sm text-[#f97070]  "/>
         <Field 
          as="textarea"
          name="description"
          placeholder="description"
          className="w-full p-3 border-2 mb-1 rounded outline-none"
         />
        <ErrorMessage name="description" component="div" className="  text-sm text-[#f97070] "/>
         <button type="submit" className="p-4 bg-yellow-400 rounded text-black ">Add Note</button>
      </Form>
     </Formik>
    </div>
  );
};

export default AddNote;