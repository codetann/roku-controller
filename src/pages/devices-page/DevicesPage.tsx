import { FadeIn } from "@/animations";
import { DevicesList, DevicesPageWrapper } from "./DevicesPage.styles";
import { Spinner } from "@/components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useIpcRenderer, useRokuController } from "@/hooks";
import { Device } from "./device/Device";
import type { RokuDevice } from "@/typings";

function DevicesPage() {
  const navigate = useNavigate();
  const [devices, setDevices] = useState<RokuDevice[]>([]);
  const rokuController = useRokuController();
  const ipcDevices = useIpcRenderer();

  ipcDevices.on("devices", (_, payload) => {
    setDevices(payload.devices);
  });

  useEffect(() => {
    ipcDevices.send("devices");
  }, []);

  function handleSelectDevice(device: RokuDevice) {
    rokuController.setIpAddress(device.ip);
    navigate("/remote");
  }

  if (!devices.length) {
    return (
      <DevicesPageWrapper>
        <Spinner />
      </DevicesPageWrapper>
    );
  }

  return (
    <FadeIn>
      <DevicesPageWrapper>
        <DevicesList>
          {devices.map((device) => (
            <Device
              key={device.ip}
              device={device}
              onSelect={handleSelectDevice}
            />
          ))}
        </DevicesList>
      </DevicesPageWrapper>
    </FadeIn>
  );
}

export { DevicesPage };
