import styled from 'styled-components';

const Container = styled.div`
    border-top: 1px solid #81364b;
    border-radius: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;

    @media only screen and (max-width: 2560px) {
        height: 25vh;
        width: 20vw;
    }
    @media only screen and (max-width: 1920px) {
        height: 35vh;
        width: 25vw;
    }
    @media only screen and (max-width: 1200px) {
        height: 35vh;
        width: 30vw;
    }
    @media only screen and (max-width: 900px) {
        height: 30vh;
        width: 30vw;
    }
`;

const DivMain = styled.div`
    height: 70%;
    width: 90%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-start;
    background-color: inherit;
    overflow: hidden;
`;

const Ul = styled.ul`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-decoration: underline;
    list-style: none;
`;

const Li = styled.li`
    margin: 5px;
    cursor: pointer;
`;

export { Container, DivMain, Ul, Li };
