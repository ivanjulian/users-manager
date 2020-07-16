import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useEffect } from 'react';
import { connect } from 'formik';
import { postUserRequest } from '../../redux/actions/postActions'
import { getUsersRequest } from '../../redux/actions/getActions'
import { useDispatch } from 'react-redux'


export const Form = (props) => {
  const dispatch = useDispatch()
  const {
    values: { name, surename, description },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched,
    postUser
  } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };
  return (
    <form onSubmit={async(e) => {
      e.preventDefault()
      alert('submitted')
      await dispatch(postUserRequest())
     // await dispatch(getUsersRequest())
      //postUser()
    }}>
      <TextField
        id="name"
        name="name"
        label="Name"
        fullWidth
        margin='dense'
        helperText={touched.name ? errors.name : ""}
        error={touched.name && Boolean(errors.name)}
        value={name}
        onChange={change.bind(null, "name")}
      />

      <TextField
        id="surename"
        name="surename"
        label="Surename"
        fullWidth
        margin='dense'
        helperText={touched.surename ? errors.surename : ""}
        error={touched.surename && Boolean(errors.surename)}
        value={surename}
        onChange={change.bind(null, "surename")}
      />

      <TextField
        id="description"
        name="description"
        label="Description"
        multiline //for textarea
        rowsMax={4}
        variant="outlined"
        fullWidth
        margin='dense'
        helperText={touched.description ? errors.description : ""}
        error={touched.description && Boolean(errors.description)}
        value={description}
        onChange={change.bind(null, "description")}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={!isValid}
        margin='dense'
      >
        Submit
      </Button>
    </form>
  )
}

// const mapStateToProps = (state) => {
//   return{
//     posts: state.posts
//   }
// }

// const mapDispatchToProps = (dispath) => {
//   return{
//     postUser: () => dispath(postUserRequest())
//   }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(Form)

