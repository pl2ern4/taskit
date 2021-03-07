import styled from "styled-components";
import { Profile as profile, ImageContainer as ImgContainer } from '../../Style';

const Profile = styled(profile)``;
const toolTipColor = "#000000a1";
const DeleteButton = styled.span`
    background-color: black;
    opacity: 0.7;
    font-weight: 400;
    font-size: 2rem;
    color: white;
    position: fixed;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    z-index:5;
    display: block;
    text-align: center;
    margin-top: -26px;
    vertical-align: middle;
    justify-self: center;
    margin: -26px 0 0 -7px;
    visibility: hidden;
`;
const TeamContainer = styled.div`
    display: flex;
    height: 4rem;
    vertical-align: middle;
    justify-content: center;
    position: absolute;
    width: 100%;
    margin:2rem auto 0 auto;

`;
const FullName = styled.span`
    visibility: hidden;
    width: max-content;
    background-color: ${toolTipColor};
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    bottom:0;
    left:1px;
    z-index: 1;
    &:after{
        content: " ";
        position: absolute;
        top: 115%;
        left: 36%;
        margin-top: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: ${toolTipColor} transparent transparent transparent;
    }
`;

const ImageContainer = styled(ImgContainer)`
        margin: 1rem;
        padding:0.5rem;
        text-align: center;
        &:hover span {
            visibility: visible;
        }
        cursor:pointer;
        background-color:#888a8c;
        color:white;
        span:first-of-type{
            top: 0.5vw;
            position: relative;
            width: 100%;
            left: 0.1vw;
        }
`;

export { TeamContainer, Profile, FullName, ImageContainer, DeleteButton };