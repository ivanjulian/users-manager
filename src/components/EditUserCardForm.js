import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import './EditUserCard.css'

export const EditUserCardForm = (props) => {
  const {
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched,
    putUser,
    editUser,
    user
  } = props;

  const [formState, setFormState] = useState({
    id: user.id,
    name: user.name,
    surname: user.surname,
    desc: user.desc
  });

  const change = (name, event) => {
    event.persist();
    handleChange(event);
    setFieldTouched(name, true, false);
    setFormState({ ...formState, [event.target.name]: event.target.value })
    console.log(formState);
  };

  const handleSubmit = () => {
    editUser(user);
    putUser(formState);
  }
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      handleSubmit()
    }}>
      <CardContent>
        <TextField
          id="name"
          name="name"
          label="Name"
          fullWidth
          margin='dense'
          variant="outlined"
          size="small"
          helperText={touched.name ? errors.name : ""}
          error={touched.name && Boolean(errors.name)}
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
          defaultValue={formState.desc}
          onChange={change.bind(null, "desc")}
        />
      </CardContent>
      <CardActions className="edit-card-actions">
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
