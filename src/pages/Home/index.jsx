import { Container, Content, NewMovie } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Movie } from "../../components/Movie";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Home() {
  const [search, setSearch] = useState("")
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/preview/${id}`);
  }

  useEffect(() => {

    async function fetchNotes() {
      const response = await api.get("/movie.notes");
      setNotes(response.data);
    }

    fetchNotes();

  }, []);

  useEffect(() => {

    async function fetchNotes() {
      const response = await api.get(`movie.notes?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes();

  }, [search])

  return (
    <Container>
      <Header onChange={e => setSearch(e.target.value)} />
      <Content>
        <main >
          <header>
            <h1>Meus filmes</h1>
            {/* <Button title="Adicionar filme" icon={FiPlus} /> */}
            <NewMovie to="/new"> <FiPlus /> Adicionar filme</NewMovie>
          </header>

          {
            notes && notes.map(note => (

              // < Link to={`preview/${note.id}`} >
              <Movie
                key={String(note.id)}
                data={note}
                onClick={() => { handleDetails(note.id) }}
              />
              // </Link>

            ))
          }

        </main>
      </Content>
    </Container >
  );
}


