import { FiMail, FiLock } from "react-icons/fi";
import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    if (!email || !password) {
      alert("Preencha o usuário e senha para entrar!");
      return
    }

    signIn({ email, password });
  }

  function handleKeyPress(event) {
    // event.preventDefault();

    if (event.key == "Enter") {
      if (email, password) {
        handleSignIn();
      }
    }
  }

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
            onChange={e => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </section>

        <section>
          <Input
            type="password"
            placeholder="Senha"
            icon={FiLock}
            onChange={e => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </section>

        <Button
          title="Entrar"
          onClick={handleSignIn}
        />

        <Link to="/register">Criar conta</Link>

      </Form >

      <Background />
    </Container >
  );
}