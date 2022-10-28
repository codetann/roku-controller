import { useState } from "react";
import type { KeyCode } from "@/typings";

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

  return {
    getIpAddress,
    setIpAddress,
    sendKey,
  };
}

export { useRokuController };
