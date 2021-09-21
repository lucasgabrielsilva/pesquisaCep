import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: Roboto, Arial, Helvetica, sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5;
        letter-spacing: 0.00938em;
        background-color: #fafafa;
    };
    button {
        border: none;
    }
`;

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    background: rgb(238, 238, 233);
    background: linear-gradient(
        0deg,
        rgba(238, 238, 233, 1) 0%,
        rgba(129, 54, 75, 1) 40%
    );

    @media only screen and (max-width: 600px) {
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

const DivRow = styled.div`
    width: ${(props) => props.width};
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background-color: inherit;

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;

const Button = styled.button`
    width: ${(props) => props.width};
    font-size: 1rem;
    color: white;
    background-color: #81364b;
    border: 2px solid #81364b;
    border-radius: 2px;
    cursor: pointer;
    &:hover {
        color: #81364b;
        background-color: white;
    }
`;

const Input = styled.input`
    width: ${(props) => props.width || '100%'};
    font-size: 1rem;
    border: 1px solid ${(props) => props.borderColor || 'gray'};
    border-radius: 2px;
    cursor: text;
`;

const Label = styled.label`
    width: ${(props) => props.width};
    font-size: 1rem;

    ${(props) =>
        props.type === 'title' &&
        css`
            color: #81364b;
            font-weight: bolder;
        `}
    ${(props) =>
        props.type === 'response' &&
        css`
            border: 1px solid #81364b;
            border-radius: 2px;
            padding-left: 3px;
        `}
`;

export { GlobalStyle, Container, DivColumn, DivRow, Button, Input, Label };
