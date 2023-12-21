import { Container } from "./styles";
import starImg from "../../assets/star.svg";
import star2Img from "../../assets/star2.svg";

export function Star({ rating, ...rest }) {
  return (
    <Container {...rest}>

      <img src={rating >= 1 ? star2Img : starImg} alt="" />
      <img src={rating >= 2 ? star2Img : starImg} alt="" />
      <img src={rating >= 3 ? star2Img : starImg} alt="" />
      <img src={rating >= 4 ? star2Img : starImg} alt="" />
      <img src={rating >= 5 ? star2Img : starImg} alt="" />

    </Container>
  );
}