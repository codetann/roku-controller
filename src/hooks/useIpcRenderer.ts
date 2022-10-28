import { ipcRenderer } from "electron";
import { useEffect } from "react";

// export function useIpcRenderer(channel: string) {
//   const listen = (
//     listener: (event: Electron.IpcRendererEvent, ...args: any[]) => void
//   ) => {
//     useEffect(() => {
//       ipcRenderer.on(channel, listener);
//       return () => {
//         ipcRenderer.removeListener(channel, listener);
//       };
//     }, []);
//   };

//   const send = (...args: any[]) => {
//     ipcRenderer.send(channel, ...args);
//   };

//   const sendOnMount = (...args: any[]) => {
//     useEffect(() => {
//       ipcRenderer.send(channel, ...args);
//     }, []);
//   };

//   return { listen, send, sendOnMount };
// }

function useIpcRenderer() {
  const on = (
    channel: string,
    listener: (event: Electron.IpcRendererEvent, ...args: any[]) => void
  ) => {
    useEffect(() => {
      ipcRenderer.on(channel, listener);
      return () => {
        ipcRenderer.removeListener(channel, listener);
      };
    }, []);
  };

  const send = (channel: string, ...args: any[]) => {
    ipcRenderer.send(channel, ...args);
  };

  return { on, send };
}

export { useIpcRenderer };
