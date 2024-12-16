import { useEffect, useState } from "react";
import api from "../../services/api";

import { Button } from "../../components/Button/styles"
import TopBackground from "../../components/TopBackground"
import { Container, Title, ContainerUsers, CardUsers, TrashIcon } from "./styles";



function ListUsers() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuarios')

            setUsers(data)
        }
        getUsers()
    }, [])


    return (
        <Container>
            <TopBackground />
            <Title>Lista de Usuários</Title>

            <ContainerUsers>
                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <div>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <p>{user.age}</p>
                        </div>
                        <TrashIcon />
                    </CardUsers>
                ))}

            </ContainerUsers >
            <Button type="button">Voltar</Button>
        </Container>
    )
}



export default ListUsers