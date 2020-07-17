import React from 'react'
import { Form } from './form'
import { Paper } from '@material-ui/core'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import './form.css'
import Typography from '@material-ui/core/Typography';

const validationSchema = Yup.object({
  name: Yup.string('Enter your name').required('Name is required').max(10, 'Too much symbols, 10 allowed'),
  surname: Yup.string('Enter your surename').required('Surename is required').max(10, 'Too much symbols, 10 allowed'),
  desc: Yup.string('Enter description').required('Description is required').max(180, 'Too much symbols, 180 allowed'),
})

function InputForm() {
  const [initialValues, setInitialValues] = useState({
    id: 0,
    name: "",
    surname: "",
    desc: ""
  })
  return (
    <>
      <Paper className="input-form-paper" elevation={3}>
        <Typography variant="h4" color="primary" align="center">Add User</Typography>
        {/* <Formik
          render={props => <Form {...props} />}
          initialValues={initialValues}
          validationSchema={validationSchema}
        /> */}
        <Formik initialValues={initialValues}
          validationSchema={validationSchema}>
          {props => <Form {...props}/>}
        </Formik>
      </Paper>

    </>

  )
}

export default InputForm
