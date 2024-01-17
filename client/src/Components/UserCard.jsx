import React from 'react'
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';
import { useDispatch } from 'react-redux';
import { getUsers, handleDelete } from '../redux/action';

const UserCard = ({user}) => {
    const dispatch=useDispatch();
    
  return (
    <div>
         <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user.fullName}</Card.Title>
        <Card.Text>
         {user.phone}
        </Card.Text>
        <Card.Link href="#">{user.email}</Card.Link>
        {/* <Card.Link href="#">Another Link</Card.Link> */}
        <CloseButton onClick={()=>{dispatch(handleDelete(user._id));dispatch(getUsers())}} />
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard