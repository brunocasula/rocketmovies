import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { MovieItem } from "../../components/MovieItem";
import { Link } from "react-router-dom";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <header>
          <Link to="/" href=""><FiArrowLeft /> Voltar</Link>
          <h1>Novo filme</h1>
        </header>

        <Form>
          <section>
            <Input
              type="text"
              placeholder="Título"
            />
            <Input
              type="text"
              placeholder="Sua nota (de 0 a 5)"
            />
          </section>

          <Textarea placeholder="Observações" />

          <h2>
            Marcadores
          </h2>

          <div>
            <MovieItem value="React"></MovieItem>
            <MovieItem isNew  ></MovieItem>
          </div>

          <footer>
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" />
          </footer>

        </Form>
      </main>
    </Container>
  );
}