import styled from "styled-components";

const LandingPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  gap: 2rem;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.whiteAlpha[700]};
  }
`;

export { LandingPageWrapper };
