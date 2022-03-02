import styled from "styled-components";

const Card = styled.div`
  &.clickable-card {
    cursor: pointer;
  }
  .img-wrapper {
    width: 100%;
    height: 176px;
    margin-bottom: 20px;
    background-color: #e7e7e7;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default Card;
