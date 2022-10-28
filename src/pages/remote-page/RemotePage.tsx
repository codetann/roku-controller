import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRokuController } from "@/hooks";

function RemotePage() {
  const roku = useRokuController();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Remote</h1>
      <button onClick={() => roku.sendKey("Up")}>UP</button>
      <button onClick={() => roku.sendKey("Down")}>DOWN</button>
      <button onClick={() => roku.sendKey("Left")}>LEFT</button>
      <button onClick={() => roku.sendKey("Right")}>RIGHT</button>
      <button onClick={() => roku.sendKey("Select")}>SELECT</button>
      <button onClick={() => roku.sendKey("Back")}>BACK</button>
      <button onClick={() => roku.getDeviceInfo()}>GET APPS</button>
    </div>
  );
}

export { RemotePage };
