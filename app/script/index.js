import { Header } from "/portoflio-v1/app/script/Header.js";
import { SectionObs } from "/portfolio-v1/app/script/SectionObs.js";
import { DarkMode } from "/portoflio-v1/app/script/DarkMode.js";
import { ContactForm } from "/portfolio-v1/app/script/ContactForm.js";
import { About } from "/portfolio-v1/app/script/About.js";

window.addEventListener("DOMContentLoaded", () => {
  Header();
  DarkMode();
  SectionObs();
  About();
  ContactForm();
});
