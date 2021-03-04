import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Input, TextInput, SelectInput, Button, Error, NewTask, Icon } from './CreateTaskStyle';
import StyledModalComponent from '../../template/style_modal/StyledModal';
import { validateCreateTaskForm } from '../../utility';

const CreateTask = ({ team, initalValuesOfForm, handleSubmit }) => {

    const [openForm, setOpenForm] = useState(false);
    const initialValuesConstant = {
        description: '',
        subject: '',
        assignee: 'assignee',
        category: 'todo',
        importance: 0
    }
    const category = [
        {Name:'To Do', type:"todo"},
        {Name:'Working...', type:"working"},
        {Name:'Done', type:"done"}];
    
    const priorty = [{text:'High', color:'red'}, 
    {text:'Medium', color:'pink'},
    {text:'Low', color:'yellow'}];

    const formik = useFormik({
        initialValues: {...initialValuesConstant},
        validate: validateCreateTaskForm,
        onSubmit: params=>{
            debugger;
            handleSubmit(params);
        },
    });

    useEffect(() => {
        if (formik.isSubmitting) {
            formik.resetForm();
            setOpenForm(false);
        }
        return () => formik.resetForm();
    }, [formik.isSubmitting])

    return (
        <>
            <NewTask onClick={()=>setOpenForm(true)}><Icon className="far fa-clipboard"></Icon><span>+</span></NewTask>
            <StyledModalComponent
                isOpen={openForm}
                onRequestClose={() => setOpenForm(!openForm)}
                contentLabel="Create Task"
            >
                <h1>Create Task</h1>
                <form onSubmit={formik.handleSubmit}>
                    <p>
                        <label htmlFor="description">Description: </label>
                        <TextInput
                            id="description"
                            name="description"
                            type="text"
                            required
                            autoComplete="off"
                            maxLength={50}
                            onChange={formik.handleChange}
                            value={formik.values.description} />
                        <Error className={`${formik.errors.description && `show` || ``}`}>{formik.errors.description}</Error>
                    </p>
                    <p>
                        <label htmlFor="subject">subject: </label>
                        <Input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            autoComplete="off"
                            maxLength={20}
                            onChange={formik.handleChange}
                            value={formik.values.subject} />
                        <Error className={`${formik.errors.subject && `show` || ``}`}>{formik.errors.subject}</Error>
                    </p>
                    <p>
                        <label htmlFor="assignee">Assignee: </label>
                        <SelectInput
                            id="assignee"
                            name="assignee"
                            type="text"
                            required
                            autoComplete="off"
                            onChange={formik.handleChange}
                            value={formik.values.assignee}>
                                <option value="assignee" disabled>Select Assignee</option>
                                {team.map((obj,key)=>
                                            (<option value={obj} key={`assignee_${key}`}>
                                                {obj}
                                            </option>))
}                            </SelectInput>
                        <Error className={`${formik.errors.assignee && `show` || ``}`}>{formik.errors.assignee}</Error>
                    </p>
                    <p>
                        <label htmlFor="category">Category: </label>
                        <SelectInput
                            id="category"
                            name="category"
                            type="text"
                            required
                            autoComplete="off"
                            onChange={formik.handleChange}
                            value={formik.values.category}>
                                {category.map((obj,key)=>
                                    <option key={`cat_${key}`}value={obj.type}>
                                        {obj.Name}
                                    </option>)}
                        </SelectInput>
                        <Error className={`${formik.errors.category && `show` || ``}`}>{formik.errors.category}</Error>
                    </p>
                    <p>
                        <label htmlFor="category">Priorty: </label>
                        <SelectInput
                            id="importance"
                            name="importance"
                            type="text"
                            required
                            autoComplete="off"
                            onChange={formik.handleChange}
                            value={formik.values.importance}>
                                {priorty.map((obj,key)=><option value={obj.color} key={`priorty_${key}`}>{obj.text}</option>)}
                        </SelectInput>
                        <Error className={`${formik.errors.importance && `show` || ``}`}>{formik.errors.importance}</Error>
                    </p>
                    <p>
                        <Button type="submit">Save</Button>
                    </p>
                </form>

            </StyledModalComponent>
        </>)
}

export default CreateTask;