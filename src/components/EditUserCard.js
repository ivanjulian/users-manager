import React, {useState} from 'react'
import { Formik } from 'formik'
import { Card, Typography } from '@material-ui/core'

import {validationSchema} from './InputForm'
import {EditUserCardForm} from './EditUserCardForm'

export function EditUserCard(props) {
  const {putUser, editUser, user, loadUsers} = props;
  const [initialValues, setInitialValues] = useState({
    id: user.id,
    name: user.name,
    surname: user.surname,
    desc: user.desc
  })
  return (
    <>
      <Card className="input-form-paper">
      <Typography color="primary" align="center">Edit User</Typography>
        <Formik initialValues={initialValues}
          validationSchema={validationSchema}>
          {props => <EditUserCardForm loadUsers={loadUsers} putUser={putUser} editUser={editUser} user={user} {...props}/>}
        </Formik>
      </Card>
    </>

  )
}

