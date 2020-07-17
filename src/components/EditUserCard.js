import React from 'react'
import { Card, Typography } from '@material-ui/core'
import { Formik } from 'formik'
import { useState } from 'react'
import {validationSchema} from './InputForm'
import {EditUserCardForm} from './EditUserCardForm'
export function EditUserCard(props) {
  const {putUser, editUser, user} = props;
  const [initialValues, setInitialValues] = useState({
    id: 0,
    name: "",
    surname: "",
    desc: ""
  })
  return (
    <>
      <Card className="input-form-paper">
      <Typography color="primary" align="center">Edit User</Typography>
        <Formik initialValues={initialValues}
          validationSchema={validationSchema}>
          {props => <EditUserCardForm putUser={putUser} editUser={editUser} user={user} {...props}/>}
        </Formik>
      </Card>
    </>

  )
}

