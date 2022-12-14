import styled from "styled-components";

const DevicesPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  gap: 2rem;
`;

const DevicesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 400px;
`;

export { DevicesPageWrapper, DevicesList };
