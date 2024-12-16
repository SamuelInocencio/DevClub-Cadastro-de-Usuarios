import { useEffect, useState } from "react";
import api from "../../services/api";

import { Button } from "../../components/Button/styles"
import TopBackground from "../../components/TopBackground"
import { Container, Title, ContainerUsers, CardUsers, TrashIcon, AvatarUser } from "./styles";
import Trash from '../../assets/trash.svg'



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
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon src={Trash} />
                    </CardUsers>
                ))}

            </ContainerUsers >
            <Button type="button" alt='icone-lixeira'>Voltar</Button>
        </Container>
    )
}



export default ListUsers