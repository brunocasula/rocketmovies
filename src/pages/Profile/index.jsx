import { Avatar, Container, Form } from "./styles";
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock, FiUnlock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function Profile() {
  return (
    <Container>

      <header>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/brunocasula.png" alt="Foto do perfil" />

          <label htmlFor="avatar">
            <FiCamera />

            <input
              type="file"
              id="avatar"
            />
          </label>

        </Avatar>

        <Input
          type="text"
          placeholder="Nome"
          icon={FiUser}
        />

        <Input
          type="mail"
          placeholder="E-mail"
          icon={FiMail}
        />

        <Input
          type="password"
          placeholder="Senha atual"
          icon={FiLock}
        />

        <Input
          type="password"
          placeholder="Nova senha"
          icon={FiLock}
        />

        <Button title="Salvar" />

      </Form>


    </Container>
  );
}