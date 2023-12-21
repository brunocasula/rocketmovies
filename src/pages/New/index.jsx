import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { MovieItem } from "../../components/MovieItem";
import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function New() {
  const { user_id } = useAuth().user;
  const [title, setTitle] = useState("");
  const [description, SetDescription] = useState("");
  const [rating, SetRating] = useState(0);

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  function handleNewNote() {
    if (!title) {
      return alert("Digite o título da nota!");
    }

    if (newTag) {
      return alert("Você deixou uma marcador no campo para adicionar, mas não clicou em adicionar! Clique para adicionar ou deixe o campo vázio!");
    }

    api.post("/movie.notes", {
      title,
      description,
      rating,
      user_id,
      tags
    })
      .then(() => {
        alert("Nota criada com sucesso!");
        navigate(-1);
      })
      .catch(error => {
        if (error.response) {
          return alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar!");
        }
      });
  }

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
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              // type="text"
              type="number"
              placeholder="Sua nota (de 0 a 5)"
              onChange={e => SetRating(Number(e.target.value))}
            />
          </section>

          <Textarea
            placeholder="Observações"
            onChange={e => SetDescription(e.target.value)}
          />

          <h2>
            Marcadores
          </h2>

          <div>
            {/* <MovieItem value="React"></MovieItem> */}
            {
              tags.map((tag, index) => (
                <MovieItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
            <MovieItem
              isNew
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </div>

          <footer>
            <Button title="Excluir filme" />
            <Button
              title="Salvar alterações"
              onClick={handleNewNote}
            />
          </footer>

        </Form>
      </main>
    </Container>
  );
}