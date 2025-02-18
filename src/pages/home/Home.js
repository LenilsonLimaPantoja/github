import axios from 'axios';
import React, { useState } from 'react';
import { AreaContainer, BodyProjects, BodyTitulo, Button, Container, Form, Input, Project, SubTitulo, Titulo } from './styles.js';
const Home = () => {
    const [repos, setRepos] = useState([]);
    const handleData = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let formValues = Object.fromEntries(formData);
        try {
            const response = await axios.get(`https://api.github.com/users/${formValues.username}/repos`)
            console.log(response.data);
            setRepos(response.data);
        } catch (error) {
            console.log(error.response.data);
            alert(error.response.data.message);
        }
    }

    return (
        <Container>
            <AreaContainer>
                <BodyTitulo>
                    <Titulo>Trabalhem juntos e alcancem mais</Titulo>
                    <SubTitulo>Colabore com suas equipes, use ferramentas de gerenciamento que sincronizam com seus projetos e codifique de qualquer lugar, tudo em uma plataforma única e integrada.</SubTitulo>
                </BodyTitulo>
                <Form onSubmit={handleData}>
                    <Input type='text' placeholder='Pesquisar' name='username' />
                    <Button>Buscar no GitHub</Button>
                </Form>
                <BodyProjects>
                    {repos?.map((item, index) => (
                        <Project key={index} href={item.html_url} target='_blank' >{item.name}</Project>
                    ))}
                </BodyProjects>
            </AreaContainer>
        </Container>
    )
}

export default Home;
