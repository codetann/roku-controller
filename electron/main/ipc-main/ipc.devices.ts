import { ipcMain } from "electron";
import find from "local-devices";
import { isRokuMacAddress } from "../../data/roku.data";

ipcMain.on("devices", async (event, arg) => {
  const devices = await find();

  const rokuDevices = devices.filter((device) => isRokuMacAddress(device.mac));
  event.sender.send("devices", {
    devices: rokuDevices,
  });
});
