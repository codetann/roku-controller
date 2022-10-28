export type KeyCode =
  | "Home"
  | "Rev"
  | "Fwd"
  | "Play"
  | "Select"
  | "Left"
  | "Right"
  | "Down"
  | "Up"
  | "Back"
  | "InstantReplay"
  | "Info"
  | "Backspace"
  | "Search"
  | "Enter";

export type RokuDevice = {
  name: string;
  mac: string;
  ip: string;
};
