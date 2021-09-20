import styled, { css } from 'styled-components';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    background-color: #81364b;

    @media only screen and (max-width: 700px){
        flex-flow: column nowrap;
    }
`;

const DivColumn = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: inherit;
`;

const Button = styled.button`
    width: ${props => (props.width)};
    font-size: 1rem;
    color: white;
    background-color: #81364b;
    border: 2px solid #81364b;
    border-radius: 2px;
    cursor: pointer;
    &:hover{
        color: #81364b;
        background-color: white;
    }

    @media only screen and (max-width: 600px){
        height: 30%;
    }
`;

const Input = styled.input`
    width: 100%;
    font-size: 1rem;
    border: 1px solid #81364b;
    border-radius: 2px;
    cursor: text;
`;

const Label = styled.label`
    font-size: 1rem;

    ${props => props.title && css`
        color: #81364b;
        font-weight: bolder;
    `}

    ${props => props.response && css`
        width: 100%;
        border: 1px solid #81364b;
        border-radius: 2px;
    `}
`;

export {Container, DivColumn, Button, Input, Label};
