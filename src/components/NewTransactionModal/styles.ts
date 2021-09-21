import styled from "styled-components";

//lib de utils utilizados para cores principalmente
import { darken } from "polished"; // o darken em si escurece uma cor com base em um valor 0 - 1

export const Container = styled.div`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    
    border-radius: 0.25rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;

    &::placeholder {
      color: var(--text-body);
    }

    &+input {
      margin-top: 1rem
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    margin-top: 1.5rem;
    
    background: var(--green);
    
    color: #FFF;
    font-size: 1rem;
    font-weight: 600;

    border-radius: 0.25rem;
    border: 0;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9)
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  button {
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }

    img {
      width: 20px;
      height: 20px;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title);
    }

  }
`;