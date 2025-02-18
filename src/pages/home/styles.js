import styled from "styled-components";
import fundo from '../../assets/fundo.png';
export const Container = styled.div`
    background-color: #0c0f41;
    background-image: url(${fundo});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    min-height: 100vh;
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 20px;
    padding: 20px;
`;
export const AreaContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 1000px;
    row-gap: 20px;
`;
export const BodyTitulo = styled.div`

`;
export const Titulo = styled.h1`
    color: #fff;
    font-size: 25px;
`;
export const SubTitulo = styled.h2`
    color: #fff;
    font-size: 15px;
`;
export const BodyProjects = styled.div`
    display: flex;
    max-width: 1000px;
    flex-wrap: wrap;
    row-gap: 10px;
    column-gap: 10px;
    justify-content: center;
    align-items: center;
    
`;
export const Project = styled.a`
    padding: 20px;
    flex-grow: 1;
    flex-basis: 0;
    max-width: 350px;
    min-width: 150px;
    color: #fff;
    background: rgba(2, 1, 1, 0.5);
    backdrop-filter: blur(15px);
    text-decoration: none;
    text-align: center;
    border: solid 1px green;
`;
export const Form = styled.form`
    padding: 5px;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    background-color: #e8f0fe;
    border: solid 1px green;
`;
export const Input = styled.input`
    padding: 10px;
    flex-grow: 1;
    outline: none;
    border: none;
    background-color: #e8f0fe;
`;
export const Button = styled.button`
    min-width: 200px;
    border: none;
    cursor: pointer;
    background-color: #1a7f37;
    color: #fff;
    padding: 15px;
    border-radius: 5px;
    font-weight: bold;
`;
