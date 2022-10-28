import { RokuDevice } from "@/typings";
import { TbCast } from "react-icons/tb";
import { DeviceContainer, DeviceIcon, DeviceName } from "./Device.styles";

type DeviceProps = {
  device: RokuDevice;
  onSelect: (device: RokuDevice) => void;
};

export function Device({ device, onSelect }: DeviceProps) {
  return (
    <DeviceContainer onClick={() => onSelect(device)}>
      <DeviceIcon>
        <TbCast />
      </DeviceIcon>
      <DeviceName>{device.name.replace(".lan", "")}</DeviceName>
    </DeviceContainer>
  );
}
