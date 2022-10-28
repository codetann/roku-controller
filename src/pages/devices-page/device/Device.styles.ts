import styled from "styled-components";

export const DeviceContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  gap: 2rem;
  border-radius: 0.3rem;

  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.15s linear;
  border: 1px solid ${({ theme }) => theme.colors.purple[900]};

  &:hover {
    background: ${({ theme }) => theme.colors.purple[900]};
    transform: scale(1.02);
  }
`;

export const DeviceName = styled.h2`
  font-size: 1.5rem;
`;
export const DeviceIcon = styled.div`
  background: ${({ theme }) => theme.colors.purple[900]};
  color: ${({ theme }) => theme.colors.purple[200]};
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  border-radius: 0.5rem;
`;
