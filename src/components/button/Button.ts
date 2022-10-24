import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => props.theme.colors.purple[500]};
  border: 1px solid ${(props) => props.theme.colors.purple[500]};
  border-radius: 0.25rem;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: all 0.1s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.colors.purple[600]};
    border: 1px solid ${(props) => props.theme.colors.purple[600]};
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.99);
  }
`;

export { Button };
