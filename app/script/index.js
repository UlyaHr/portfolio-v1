import { Header } from "/portfolio-v1/Header.js";
import { SectionObs } from "/portfolio-v1/SectionObs.js";
import { DarkMode } from "/portfolio-v1/DarkMode.js";
import { ContactForm } from "/portfolio-v1/ContactForm.js";
import { About } from "/portfolio-v1/About.js";

window.addEventListener("DOMContentLoaded", () => {
  Header();
  DarkMode();
  SectionObs();
  About();
  ContactForm();
});
