import { Container } from "./styles";
import starImg from "../../assets/star.svg";
import star2Img from "../../assets/star2.svg";

export function Star({ classification, ...rest }) {
  return (
    <Container {...rest}>
      <img src={star2Img} alt="" />
      <img src={star2Img} alt="" />
      <img src={star2Img} alt="" />
      <img src={star2Img} alt="" />
      <img src={starImg} alt="" />

    </Container>
  );
}