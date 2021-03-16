import { Header } from "/portofolio-v1/app/script/Header.js";
import { SectionObs } from "/portofolio-v1/app/script/SectionObs.js";
import { DarkMode } from "/portofolio-v1/app/script/DarkMode.js";
import { ContactForm } from "/portofolio-v1/app/script/ContactForm.js";
import { About } from "/portofolio-v1/app/script/About.js";

window.addEventListener("DOMContentLoaded", () => {
  Header();
  DarkMode();
  SectionObs();
  About();
  ContactForm();
});
