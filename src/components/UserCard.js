import React, { useMemo, useCallback } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './UserCard.css';

function UserCard(props) {
  const { user, deleteUser, editUser } = useMemo(() => props, [props]);

  const handleDelete = useCallback(() => {
    deleteUser(user.id);
  }, [deleteUser]);

  console.log('user card re-rended');

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
          margin="dense"
          onClick={handleDelete}
        >
          Delete
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          margin="dense"
          onClick={() => editUser(user)}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}

export default React.memo(UserCard);
