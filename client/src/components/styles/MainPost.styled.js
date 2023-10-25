import styled from "styled-components";

export const StyledMainPost = styled.div`
  display: flex;
  flex-direction: column;

  .post-display {
    position: relative;
    order: 1;
    margin-bottom: 0.7em;
    height: 70%;

    & img {
      order: 1;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    & h4 {
      position: absolute;
      bottom: -2%;
      left: 50%;
      transform: translateX(-50%);
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #000;
      font-size: 0.6rem;
      font-weight: normal;
      border: 3px solid;
      padding: 0.5em 1em;
      box-shadow: -4px 3px 0 0 #000;
      background-color: white;
      opacity: 0.9;
    }
  }
  .post-info {
    order: 2;

    & h2 {
      font-size: 1rem;
      padding: 0.5em 0.2em 0;
      text-align: center;
    }

    & h3 {
      font-size: 0.7rem;
      font-weight: normal;
      opacity: 0.8;
      letter-spacing: 0.5px;
      padding: 0.3em 0.2em 0.5em;
      text-align: center;
      word-wrap: break-word;
      line-height: 0.8rem;
    }
  }
`;
