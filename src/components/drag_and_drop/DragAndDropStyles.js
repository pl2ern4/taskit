import styled from "styled-components";
import {Profile as profile} from '../../Style';

const DragAndDropStyles = styled.div`
    text-align: center;
    position: relative;
    top: 7rem;
`;

const TaskContainer = styled.div`
    width:100%; 
    height: 100vh;
    display: flex;
`;

const TaskCategory = styled.div`
    content: "";
    display: table;
    clear: both;
    height: 100vh;
    width: 33.33%;
    float:left;
`;

const TaskContent = styled.div`
    display: inline-block;
    margin: 0;
    padding: 0;
    background-color: #e0e0e0;
    width: 100%;
`;

const TaskDetail = styled.div`
    height: 80%;
    top: 0;
    position: relative;
    line-height: 1.1rem;
    text-align: justify;
    margin: 0.5rem;
    text-overflow: ellipsis;
`;

const Profile = styled(profile)`
    left: 3rem;
    bottom: 2rem;
`;

const Task = styled.div`
    width: 10rem;
    height: 10rem;
    background-color: yellow;
    margin: 5px auto;
    line-height: 5em;
    cursor: pointer;
    background-color:${props=>props.importance}
`;

export {DragAndDropStyles,  TaskContainer, TaskCategory, TaskContent, Task, Profile , TaskDetail};