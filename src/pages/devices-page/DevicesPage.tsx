import { FadeIn } from "@/animations";
import { DevicesPageWrapper } from "./DevicesPage.styles";
import { Spinner } from "@/components";
import { useNavigate } from "react-router-dom";

function DevicesPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => navigate("/devices");

  return (
    <FadeIn>
      <DevicesPageWrapper>
        <Spinner />
        <h1>Devices</h1>
      </DevicesPageWrapper>
    </FadeIn>
  );
}

export { DevicesPage };
