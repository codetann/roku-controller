import { BrowserRouter } from "react-router-dom";
import { Pages } from "@/pages";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
};

export default App;
