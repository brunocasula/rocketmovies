import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <h1><Link to="/">RocketMovies</Link></h1>

      <Input
        type="Text"
        placeholder="Pesquise pelo título"
      />

      <Profile>

        <div>
          <strong>Bruno Casula</strong>
          <a>Sair</a>
        </div>

        <Link to="/profile">
          <img src="https://github.com/brunocasula.png" alt="Foto do usuário" />
        </Link>
      </Profile>

    </Container>
  );
}