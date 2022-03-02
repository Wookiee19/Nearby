import styled from "styled-components";

const CardSection = styled.div`
  display: table;
  width: 100%;
  p {
    font-size: 12px;
    color: #969696;
    line-height: 10px;
    margin-top: ${20 * 0.4}px;
    &.description {
      line-height: 1.33;
      margin-top: ${20 * 0.6}px;
    }
  }
  .link p {
    margin-top: ${20 * 0.3}px;
  }
  .left-infos,
  .right-infos {
    display: block;
    text-align: left;
  }
  .right-infos {
    margin-top: 20px;
    div,
    p {
      width: 100%;
      text-align: right;
    }
    .rating,
    label {
      height: 22px;
      line-height: 23px;
    }
  }
  .description {
    text-transform: capitalize;
  }
`;

export default CardSection;
