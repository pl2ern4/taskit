import styled from "styled-components";
import { Profile as profile, ImageContainer as ImgContainer, DeleteButton } from '../../Style';

const Profile = styled(profile)``;
const toolTipColor = "#000000a1";
const DeleteProfile = styled(DeleteButton)`
    visibility: hidden;
    margin: -26px 0 0 -7px;
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

export { TeamContainer, Profile, FullName, ImageContainer, DeleteProfile };