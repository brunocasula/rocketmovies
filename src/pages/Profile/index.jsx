import { Avatar, Container, Form } from "./styles";
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock, FiUnlock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }
    await updateProfile({ user, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];

    setAvatarFile(file);
    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

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
          <img
            // src="https://github.com/brunocasula.png"
            src={avatar}
            alt="Foto do perfil"
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input
              type="file"
              id="avatar"
              onChange={handleChangeAvatar}
            />
          </label>

        </Avatar>

        <Input
          type="text"
          placeholder="Nome"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          type="mail"
          placeholder="E-mail"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Senha atual"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Nova senha"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button
          title="Salvar"
          onClick={handleUpdate}
        />

      </Form>

    </Container>
  );
}