import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useState } from 'react';
import { postUserRequest } from '../../redux/actions/postActions'
import { getUsersRequest } from '../../redux/actions/getActions'
import { useDispatch } from 'react-redux'


export const Form = (props) => {
  const dispatch = useDispatch()
  const {
    //values: { name, surename, desc },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched,
  } = props;
  const formStateInitialValues = {
    name: '',
    surname: '',
    desc: ''
  }
  const [formState, setFormState] = useState(formStateInitialValues);

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
    setFormState({...formState, [e.target.name]: e.target.value});
  };

  const handleSubmit = async() => {
    await dispatch(postUserRequest(formState));
    //dispatch(getUsersRequest());
    setFormState(formStateInitialValues);
  }
  return (
    <form onSubmit={async(e) => {
      e.preventDefault();
      await handleSubmit();
    }}>
      <TextField
        id="name"
        name="name"
        label="Name"
        fullWidth
        margin='dense'
        helperText={touched.name ? errors.name : ""}
        error={touched.name && Boolean(errors.name)}
        value={formState.name}
        onChange={change.bind(null, "name")}
      />

      <TextField
        id="surname"
        name="surname"
        label="Surname"
        fullWidth
        margin='dense'
        helperText={touched.surename ? errors.surename : ""}
        error={touched.surename && Boolean(errors.surename)}
        value={formState.surname}
        onChange={change.bind(null, "surname")}
      />

      <TextField
        id="desc"
        name="desc"
        label="Desc"
        multiline //for textarea
        rowsMax={4}
        variant="outlined"
        fullWidth
        margin='dense'
        helperText={touched.desc ? errors.desc : ""}
        error={touched.desc && Boolean(errors.desc)}
        value={formState.desc}
        onChange={change.bind(null, "desc")}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={!isValid}
        color="primary"
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

