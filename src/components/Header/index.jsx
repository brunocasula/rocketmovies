import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Button } from "../Button";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";

export function Header({ onChange, ...rest }) {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <h1><Link to="/">RocketMovies</Link></h1>

      <Input {...rest}
        type="Text"
        placeholder="Pesquise pelo título"
        onChange={onChange}
      />

      <Profile>

        <div>
          <strong>{user.name}</strong>
          <button onClick={handleSignOut}>
            Sair
          </button>
          {/* <a>Sair</a> */}
        </div>

        <Link to="/profile">
          <img src={avatarUrl} alt={user.name} />
        </Link>
      </Profile>

    </Container>
  );
}