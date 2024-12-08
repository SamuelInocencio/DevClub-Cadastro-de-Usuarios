import { Button, Container, ContainerInputs, Form, Input, InputLabel, TopBackground } from './styles'


function App() {


  return (
    <Container>
      <TopBackground>
        <img />
      </TopBackground>
      <Form>
        <ContainerInputs>
          <div>
            <div>
              <InputLabel>
                Nome<span>*</span></InputLabel>
              <Input type='text' placeholder='Nome do usuário' />
            </div>
            <div>
              <InputLabel>
                Idade<span>*</span>
              </InputLabel>
              <Input type='number' placeholder='Idade de usuário' />
            </div>
          </div>
          <div>
            <InputLabel>
              Email<span>*</span>
              <Input type='email' placeholder='E-mail do usuário' />
            </InputLabel>
          </div>

        </ContainerInputs>
        <Button>Cadastrar Usuário</Button>
      </Form>
    </Container>


  )
}

export default App
