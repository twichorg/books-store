import React from 'react'
import { useSelector } from 'react-redux'
import {selectAllUsers} from '../../features/users/userSlice'

const PostAuthor = ({userId}) => {
   const users = useSelector(selectAllUsers)    // get all users from the store

    const author = users.find(user => user.id === userId);  // find the user with the id
    
    return <span>by {author ? author.name : 'Unknown Author'}</span>
   
}

export default PostAuthor