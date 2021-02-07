/* eslint-disable no-console */
/* eslint-disable no-alert */
import 'regenerator-runtime/runtime';
import 'core-js/stable';
import router, { navigateTo } from './router/router';

// Import of styles
import '../styles/index.scss';

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  navigateTo('calendar');
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
