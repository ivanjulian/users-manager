import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

export const EditUserCardForm = (props) => {
  const dispatch = useDispatch()
  const {
    values: { name, surename, desc },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched,
    putUser,
    editUser,
    user

  } = props;

  const [editMode, setEditMode] = useState({
    isEdit: false,
    idUserToEdit: null
  })

  const [formState, setFormState] = useState({
    id: user.id,
    name: user.name,
    surname: user.surname,
    desc: user.desc
  });

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
    setFormState({ ...formState, [e.target.name]: e.target.value })
  };
  return (
    <form onSubmit={async (e) => {

      // alert('submitted')
      // console.log(formState)
      e.preventDefault();
      putUser(formState);
      editUser(user);
      //setEditMode({ isEdit: false, idUserToEdit: null }) 
      console.log(formState)
      //await dispatch(postUserRequest(formState))
      // await dispatch(getUsersRequest())
    }}>
      <CardContent>


        <TextField
          id="name"
          name="name"
          label="Name"
          fullWidth
          margin='dense'
          variant="outlined"
          //size="small"
          helperText={touched.name ? errors.name : ""}
          error={touched.name && Boolean(errors.name)}
          //value={name}
          defaultValue={formState.name}
          onChange={change.bind(null, "name")}
        />

        <TextField
          id="surname"
          name="surname"
          label="Surname"
          fullWidth
          margin='dense'
          variant="outlined"
          size="small"
          helperText={touched.surename ? errors.surename : ""}
          error={touched.surename && Boolean(errors.surename)}
          //value={surename}
          defaultValue={formState.surname}
          onChange={change.bind(null, "surname")}
        />

        <TextField
          id="desc"
          name="desc"
          label="Desc"
          multiline //for textarea
          rowsMax={4}
          variant="outlined"
          size="small"
          fullWidth
          margin='dense'
          helperText={touched.desc ? errors.desc : ""}
          error={touched.desc && Boolean(errors.desc)}
          //value={desc}
          defaultValue={formState.desc}
          onChange={change.bind(null, "desc")}
        />
      </CardContent>
      <CardActions>
        <Button
          type="submit"
          disabled={!isValid}
          size="small"
          variant="contained"
          color="primary"
          margin='dense'
        >
          Save
      </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          margin='dense'
          
          onClick={() => editUser(user)}
        >
          Cancel
      </Button>
      </CardActions>
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


// <form onSubmit={(e) => {
//   e.preventDefault();
//   putUser(editedUser);
//   setEditMode({ isEdit: false, idUserToEdit: null })
//   console.log(editedUser)

// }} >
//   Edit Name: <input name="name" onChange={e => change(e)} defaultValue={user.name} type="text" />  <br />
//   Edit Surname:<input name="surname" onChange={e => change(e)} defaultValue={user.surname} type="text" />  <br />
//   Edit Description:<input name="desc" onChange={e => change(e)} defaultValue={user.desc} type="text" /> <br />
//   <button type="submit">Save</button>
//   <button onClick={() => editUser(user)}>Cancel</button>
// </form>