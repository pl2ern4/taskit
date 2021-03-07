import React, { useState } from 'react';
import { Profile, ImageContainer, FullName, TeamContainer, DeleteButton } from './ProfilesStyle';
import { getName } from '../../utility';
import AddNewMember from '../addnewmember/AddNewMember';

const Profiles = ({ team = [], handleSubmit, deleteUser }) => {
    const [openForm, setOpenForm] = useState();

    const isDuplicate = params => team.includes(params);
    return (<TeamContainer>
        {team.map((obj, key) => {
            return (<Profile key={`profile-${key}`}>
                <ImageContainer>
                    <span>{getName(obj)}</span>
                    <DeleteButton onClick={() => deleteUser(obj)}>x</DeleteButton>
                    <FullName>{obj}</FullName>
                </ImageContainer>
            </Profile>)
        })}
        <Profile key={`profile-new-member`}>
            <ImageContainer onClick={() => setOpenForm(!openForm)}>
                <span>+</span>
                <FullName>Add new member</FullName>
            </ImageContainer>
        </Profile>
        {(openForm &&
            <AddNewMember
                isAccessUser={(team.length >= 10)}
                isDuplicate={isDuplicate}
                handleSubmit={handleSubmit}
                setOpenForm={setOpenForm}
                openForm={openForm} />) || null}
    </TeamContainer>)

}

export default Profiles;