import { useState } from "react";
import type { DeviceInfo, KeyCode } from "@/typings";
import axios from "axios";
import { ipcRenderer } from "electron";

const xmlToJson = (xml: string) => {
  let info = {};
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xml, "text/xml");

  function recursiveParse(node: Element) {
    if (node.children.length === 0) {
      info = {
        ...info,
        [node.tagName]: node.textContent,
      };
    } else {
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        recursiveParse(child);
      }
    }
  }

  recursiveParse(xmlDoc.documentElement);

  return info;
};

function useRokuController() {
  const [ip, setIp] = useState(localStorage.getItem("roku-ip") || "");

  const CONFIG = {
    baseUrl: `http://${ip}:8060`,
  };

  enum KEYS {
    ROKU_IP = "roku-ip",
  }

  const getIpAddress = () => {
    return localStorage.getItem(KEYS.ROKU_IP) || false;
  };

  const setIpAddress = (ipAddress: string) => {
    localStorage.setItem(KEYS.ROKU_IP, ipAddress);
    setIp(ipAddress);
  };

  const sendKey = (key: KeyCode) => {
    fetch(`${CONFIG.baseUrl}/keypress/${key}`, {
      method: "POST",
    });
  };

  const getChannels = async () => {
    const response = await fetch(`${CONFIG.baseUrl}/query/apps`);
    const data = await response.json();
    console.log(response);
    return data;
  };

  const getDeviceInfo = async () => {
    ipcRenderer.send("roku:device-info", ip);

    ipcRenderer.on("roku:device-info", (event, arg) => {
      // console.log(xmlToJson(arg.data));
      const data: DeviceInfo = xmlToJson(arg.data);
      console.log(data["has-play-on-roku"]);
    });
  };

  return {
    getIpAddress,
    setIpAddress,
    sendKey,
    getChannels,
    getDeviceInfo,
  };
}

export { useRokuController };
