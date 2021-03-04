import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import {validateNewUserForm} from '../../utility';
import StyledModalComponent from '../../template/style_modal/StyledModal';
import { Error, Button, Input } from './AddNewMemberStyle';

const AddNewMember = ({ isDuplicate, openForm, setOpenForm, isAccessUser, handleSubmit }) => {

    const formik = useFormik({
        initialValues: {
            name: '',
        },
        validate: params=>validateNewUserForm({isDuplicate, isAccessUser, ...params}),
        onSubmit: handleSubmit,
    });

    useEffect(()=>{
        if(formik.isSubmitting){
            formik.resetForm();
            setOpenForm(false);
        }
        return ()=>formik.resetForm();
    },[formik.isSubmitting])

    return (
        <StyledModalComponent
            isOpen={openForm}
            onRequestClose={() => setOpenForm(!openForm)}
            contentLabel="Add New USer"
        >
            <h1>Create User</h1>
            <form onSubmit={formik.handleSubmit}>
                <p>
                    <label htmlFor="name">Name: </label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="off"
                        onChange={formik.handleChange}
                        value={formik.values.name} />
                    <Error className={`${formik.errors.name && `show` || ``}`}>{formik.errors.name}</Error>
                </p>
                <p>
                    <Button type="submit">Save</Button>
                </p>
            </form>

        </StyledModalComponent>)

}

export default AddNewMember;