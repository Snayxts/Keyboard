import { displayAndRemoveText } from "./DisplayAndRemoveText/display.js";
import { closeMsg } from "./closeMsg/close.js";

closeMsg();
window.addEventListener("keydown", displayAndRemoveText);
