import React, { useState } from 'react'
//import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux'; // useDispatch() and useSelector() are functions that return functions that dispatch actions to the store
import {postAdded} from '../posts/postSlice';
import { selectAllUsers } from '../users/userSlice';    // selectAllUsers is a function that takes state as an argument and returns the state.users array


const AddFormPosts = () => {
    const dispatch = useDispatch(); // useDispatch() returns a function that dispatches actions to the store
    const [title, setTitle] = useState(''); 
    const [content, setContent] = useState('');   
    const [userId, setUserId] = useState('');
    //console.log(userId);
    const users = useSelector(selectAllUsers); // useSelector() returns a function that takes state as an argument and returns the state.users array
    

    const ontTitleChanged = (e) => {    // ontTitleChanged is a function that takes an event as an argument 
        setTitle(e.target.value);
    }

    const onContentChanged = (e) => {   
        setContent(e.target.value); // setContent is a function that takes a string as an argument and sets the content state to that string
    }
    //console.log(title, content);

    const onUserIdChanged = (e) => {
        setUserId(e.target.value);
    }

    const onSavePostClicked = () => {       // onSavePostClicked is a function that takes no arguments
       if( title.length > 0 && content.length > 0 ){ 
    /*
            const post = {
                id: nanoid(),   // nanoid() is a function that generates a random string of length 20
                title,
                content
            }
            dispatch(postAdded(post));  // dispatch() is a function that takes an action object as an argument and dispatches it to the store
            setTitle('');         // setTitle() is a function that sets the title state to an empty string
            setContent('');         // setContent() is a function that sets the content state to an empty string
    */
            dispatch(postAdded(title, content, userId));  // dispatch() is a function that takes an action object as an argument and dispatches it to the store
            setTitle('');         // setTitle() is a function that sets the title state to an empty string
            setContent('');         // setContent() is a function that sets the content state to an empty string
       }
    }

    const userOptions =  users.map(user =>( 
        <option key={user.id} value={user.id}>{user.name}</option>  
    ))

    const canSave = Boolean(title.length > 0 && content.length > 0 && userId.length > 0);   // canSave is a boolean that is true if title, content, and userId are all non-empty strings

  return (
    <section>
    <h2>Add a New Book</h2>
    <form>
        <label htmlFor="postTitle">Book Name :</label>
        <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={ontTitleChanged}
        />
        
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" className='postAuthor' name="postAuthor" value={userId} onChange={onUserIdChanged}>
            <option value="">Select Author</option>
            {userOptions}
        </select>

        <label htmlFor="postContent">Content:</label>
        <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
        />

        <button
            type="button"
            onClick={onSavePostClicked}
            disabled={!canSave}
        >Save Post</button>

    </form>
</section>
  )
}

export default AddFormPosts