import styled from 'styled-components';
import { GrMapLocation } from "react-icons/gr";

const DivForm = styled.div`
    height: 90vh;
    width: 30vw;
    border-radius: 5px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;
`;

const DivImage = styled.div`
    height: 45%;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background-color: inherit;
`;

const DivField = styled.div`
    height: 45%;
    width: 80%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    background-color: inherit;
`;

const Icon = styled(GrMapLocation)`
    height: 100%;
    width: 100%;
    color: lightblue;
`;

const Input = styled.input`
    height: 50px;
    width: 100%;
    border: 2px solid lightblue;
    border-radius: 5px;
    &:hover{
        border: 1px solid blue;
    }
`;

const Button = styled.button`
    height: 50px;
    width: 25%;
    color: white;
    background-color: lightblue;
    border: 2px solid lightgray;
    border-radius: 5px;
    &:hover{
        border: 1px solid blue;
    }
`;


export { DivForm, DivImage, DivField, Icon, Button, Input};
