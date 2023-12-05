import { Container, Content, NewMovie } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Movie } from "../../components/Movie";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";


export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <main >
          <header>
            <h1>Meus filmes</h1>
            {/* <Button title="Adicionar filme" icon={FiPlus} /> */}
            <NewMovie to="/new"> <FiPlus /> Adicionar filme</NewMovie>
          </header>

          <Link to="/preview/1">
            <Movie data={{
              title: 'Interestellar',
              description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
              classification: 4,
              tags: [
                { id: '1', name: 'Ficção Científica' },
                { id: '2', name: 'Drama' },
                { id: '3', name: 'Família' }
              ]
            }}
            />
          </Link>

          <Link to="/preview/1">
            <Movie data={{
              title: 'Interestellar',
              description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
              classification: 4,
              tags: [
                { id: '1', name: 'Ficção Científica' },
                { id: '2', name: 'Drama' },
                { id: '3', name: 'Família' }
              ]
            }}
            />
          </Link>

          <Link to="/preview/1">
            <Movie data={{
              title: 'Interestellar',
              description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
              classification: 4,
              tags: [
                { id: '1', name: 'Ficção Científica' },
                { id: '2', name: 'Drama' },
                { id: '3', name: 'Família' }
              ]
            }}
            />
          </Link>

          <Link to="/preview/1">
            <Movie data={{
              title: 'Interestellar',
              description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
              classification: 4,
              tags: [
                { id: '1', name: 'Ficção Científica' },
                { id: '2', name: 'Drama' },
                { id: '3', name: 'Família' }
              ]
            }}
            />
          </Link>

        </main>
      </Content>
    </Container>
  );
}


