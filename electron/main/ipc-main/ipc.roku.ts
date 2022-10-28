import { ipcMain } from "electron";
import axios from "axios";

ipcMain.on("roku:device-info", async (event, arg) => {
  console.log(arg);
  const res = await axios.get(`http://${arg}:8060/query/device-info`, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
  console.log(res.data);
  event.sender.send("roku:device-info", {
    data: res.data,
  });
});
