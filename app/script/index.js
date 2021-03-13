import { Header } from './Header.js';
import { Main } from './Main.js';
import { DarkMode } from './DarkMode.js'
import { ContactForm } from './ContactForm.js'

window.addEventListener('DOMContentLoaded', (event) => {
  Header();
  DarkMode();
  Main();
  ContactForm();
});

