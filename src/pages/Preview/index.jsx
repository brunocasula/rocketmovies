import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Star } from "../../components/Star";
import { Tag } from "../../components/Tag";
import time from "../../assets/time.svg";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Preview() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const params = useParams();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/movie.notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, [])

  return (
    <Container>
      <Header />
      {
        data &&
        <main>
          <header>
            <Link to="/"><FiArrowLeft />Voltar</Link>

            <section>
              <h1>{data.title} </h1>
              <Star rating={data.rating} />
            </section>

            <section>
              <img src={avatarUrl} alt={user.name} />
              <span>{`Por ${data.user_name}`}</span>
              <img src={time} alt="Data e hora" />
              {/* <span>23/05/22 às 08:00</span> */}
              <span>
                {`${String(data.created_at).substring(8, 10)}/${String(data.created_at).substring(5, 7)}/${String(data.created_at).substring(2, 4)} às ${String(data.created_at).substring(11, 16)}`}
              </span>

            </section>

            {
              data.tags &&
              <div>
                {
                  data.tags.map(tag => <Tag key={tag.id} title={tag.name} />
                  )
                }
              </div>
            }

          </header>

          <p>
            {data.description}
          </p>
        </main>
      }
    </Container >
  );
}