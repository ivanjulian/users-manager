import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import './UserCard.css'

export function UserCard(props) {
  const { user, deleteUser, editUser, loadUsers } = props;

  const handleDelete = async () => {
    await deleteUser(user.id);
    //loadUsers();
  }

  return (
    <Card className="user-card">
      <CardContent className="user-card-content">
        <Typography variant="body2" component="p">
          Name: {user.name}
        </Typography>

        <Typography variant="body2" component="p">
          Surname: {user.surname}
        </Typography>

        <Typography variant="body2" component="p">
          Description: {user.desc}
        </Typography>
      </CardContent>
      <CardActions className="user-card-actions">
        <Button
          size="small"
          variant="contained"
          color="primary"
          margin='dense'
          onClick={async () => {
            await handleDelete()
          }}
        >
          Delete
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          margin='dense'
          onClick={() => editUser(user)}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  )
}

// (<li key={user.id}>
//   Name: {user.name} <br />
// Surname: {user.surname} <br />
// Description: {user.desc} <br />
//   <button onClick={() => deleteUser(user.id)}>Delete</button>
//   <button onClick={() => editUser(user)}>Edit</button>
// </li>)