import React, { useState } from 'react'
import './UserProfile.css'
import {useDispatch} from 'react-redux'
import { updateProfile } from '../../actions/users.js'
import { useNavigate } from 'react-router-dom'
const EditProfileForm = ({currentUser, setSwitch}) => {

    const [name, setName] = useState(currentUser?.result?.name)
    const [about, setAbout] = useState(currentUser?.result?.about)
    const [tags, setTags] = useState('')
    const dispatch= useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(tags.length === 0){
            dispatch(updateProfile(currentUser?.result?._id, {name, about, tags:currentUser?.result?.tags}))
        } else{
            dispatch(updateProfile(currentUser?.result?._id, {name, about, tags}))
        }
        navigate(`/Users/${currentUser?.result?._id}`)
        setSwitch(false)
        // window.location.reload()
    }

  return (
    <div>
        <h1 className="edit-profile-title">
            Edit Your Profile
        </h1>
        <h2 className="edit-profile-title-2">
            Public Information
        </h2>
        <form  className="edit-profile-form" onSubmit={handleSubmit}>
            <label htmlFor="name">
                <h3>Display Name</h3>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label htmlFor="about">
                <h3>About me</h3>
                <textarea id="about" cols="30" rows="10" value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
            </label>
            <label htmlFor="tags">
                <h3>Watched tags</h3>
                <p>Add tags seperated by 1 space</p>
                <input type="text" id="tags" onChange={(e) => setTags(e.target.value.split(' '))} />
            </label><br/>
            <input type="submit" value='Save Profile' className='user-submit-btn' />
            <button type='button' className='user-cancel-btn' onClick={()=> setSwitch(false)}>Cancel</button>
        </form>
    </div>
  )
}

export default EditProfileForm