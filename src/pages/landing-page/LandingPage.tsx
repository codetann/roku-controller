import { FadeIn } from "@/animations";
import { LandingPageWrapper } from "./LandingPage.styles";
import { Button } from "@/components";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => navigate("/devices");

  return (
    <FadeIn>
      <LandingPageWrapper>
        <h1>Roku Remote</h1>
        <p>
          A Roku remote control app for your browser. Use your keyboard to
          control your Roku.
        </p>
        <Button onClick={handleButtonClick}>Find device</Button>
      </LandingPageWrapper>
    </FadeIn>
  );
}

export { LandingPage };
