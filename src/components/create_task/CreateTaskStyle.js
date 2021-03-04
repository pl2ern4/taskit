import styled from 'styled-components';
import { Error, Input, Button } from '../../Style';

const TextInput = styled.textarea`
    width: 452px; 
    height: 192px;
    resize: none;
    border: 0.1rem solid black;
    border-radius: 1rem;
    &:focus{
        outline:unset;
    }
`;
const SelectInput = styled.select`
    width:calc(100% - 10rem);
    border: 0.1rem solid black;
    border-radius: 1rem;
    height:2.5rem;
    &:focus{
        outline:unset;
    }
`;

const NewTask = styled.div`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background-color:black;
    border-radius:50%;
    opacity:0.5;
    color: white;
    & span{
        top: 2.1rem;
        position: absolute;
        right: 1.1rem;
        background-color: inherit;
        font-size: 11px;
        font-weight: 700;
    }
`;

const Icon = styled.i`
    cursor:pointer;
    font-size: 30px;
    text-align: center;
    position: absolute;
    top: 1rem;
    
    right: 1.2rem;
`;
export { Error, Input, Button, TextInput, SelectInput, NewTask, Icon };