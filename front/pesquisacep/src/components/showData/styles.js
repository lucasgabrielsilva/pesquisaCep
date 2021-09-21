import styled from 'styled-components';

const Container = styled.div`
    height: 75vh;
    width: 40vw;
    display: flex;
    border-left: 1px solid #81364b;
    border-radius: 10px;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;

    @media only screen and (max-width: 2560px) {
        height: 55vh;
        width: 35vw;
    }
    @media only screen and (max-width: 1920px) {
        height: 65vh;
        width: 40vw;
    }
    @media only screen and (max-width: 1200px) {
        height: 75vh;
        width: 40vw;
    }
    @media only screen and (max-width: 900px) {
        height: 65vh;
        width: 40vw;
    }
    @media only screen and (max-width: 600px) {
        height: 60vh;
        width: 90vw;
        border-left: none;
        border-top: 1px solid #81364b;
    }
`;

const DivMain = styled.div`
    height: 90%;
    width: 90%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: inherit;
    overflow: auto;
`;

export { Container, DivMain };
