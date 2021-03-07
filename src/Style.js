import styled from "styled-components";

const Profile = styled.div`
    height: 20%;
    bottom: 0.5rem;
    position: relative;
    left: 0.5rem;
`;

const ImageContainer = styled.div`
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    background-color: blue;
`;

const Error = styled.div`
    color:red;
    font-size:12px;
    visibility: hidden;
    margin: 1rem 0;
    &.show{
        visibility: visible!important;
        margin: 0 0 0.5rem;
    }
`;

const Input = styled.input`
    margin:1rem 0.5rem;
    width:65%;
    border-radius: 1rem;
    height: 2rem;
    &:focus{
        outline:unset;
    }
`;

const DeleteButton = styled.span`
    background-color: black;
    opacity: 0.7;
    font-weight: 400;
    font-size: 2rem;
    color: white;
    position: absolute;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    z-index:5;
    display: block;
    text-align: center;
    vertical-align: middle;
    justify-self: center;    
`;


const Button = styled.button`
    width:100%;
    background-color: grey;
    border: 0.1rem solid black;
    text-align:center;
    color:white;
    cursor:pointer;
    &:focus{
        outline:unset;
    }
`;

export { Profile,ImageContainer,Button, Input, Error, DeleteButton };