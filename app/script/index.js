import { Header } from "./Header.js";
import { Main } from "./Main.js";
import { DarkMode } from "./DarkMode.js";
import { ContactForm } from "./ContactForm.js";
import { About } from "./About.js";

window.addEventListener("DOMContentLoaded", () => {
  Header();
  DarkMode();
  Main();
  About();
  ContactForm();
});
