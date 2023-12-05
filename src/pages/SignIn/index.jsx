import { FiMail, FiLock } from "react-icons/fi";
import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <Container>

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <section>
          <Input
            type="email"
            placeholder="E-mail"
            icon={FiMail}
          />
        </section>

        <section>
          <Input
            type="password"
            placeholder="Senha"
            icon={FiLock}
          />
        </section>

        <Button title="Entrar" />

        <Link to="/register">Criar conta</Link>

      </Form >

      <Background />
    </Container >
  );
}