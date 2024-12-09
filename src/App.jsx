import { Button, Container, ContainerInputs, Form, Input, InputLabel, Title, TopBackground } from './styles'

import UsersImage from './assets/users.png'

function Home() {


  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} />
      </TopBackground>

      <Title>Cadastrar Usuários</Title>

      <Form>
        <ContainerInputs>

          <div>
            <InputLabel>
              Nome<span> *</span></InputLabel>
            <Input type='text' placeholder='Nome do usuário' />
          </div>
          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type='number' placeholder='Idade de usuário' />
          </div>

        </ContainerInputs>
        <div style={{ width: '100%' }}>
          <InputLabel>
            Email<span> *</span>
            <Input type='email' placeholder='E-mail do usuário' />
          </InputLabel>
        </div>


        <Button>Cadastrar Usuário</Button>
      </Form>
    </Container>


  )
}

export default Home
