import '@/styles/tw.css';
import '@/styles/main.scss';

import { initThemeToggle } from './common/theme.js';
import { initAbout } from './app/aboutPage.js';

initThemeToggle();

if (document.querySelector('.team__list')) {
    initAbout();
}