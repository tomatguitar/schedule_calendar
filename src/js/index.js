/* eslint-disable no-console */
/* eslint-disable no-alert */
import 'regenerator-runtime/runtime';
import 'core-js/stable';
import Calendar from './views/Calendar';
import Event from './views/Event';
// Import of styles
import '../styles/index.scss';

const router = async () => {
  const routes = [
    { path: '/calendar', view: Calendar },
    { path: '/create-event', view: Event },
  ];

  const pathToRegex = (path) =>
    new RegExp(`^${path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)')}$`);

  const getParams = (match) => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
      (result) => result[1]
    );

    return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
  };

  // Test each route for potential match
  const potentialMatches = routes.map((route) => {
    const obj = {
      route: route,
      result: window.location.pathname.match(pathToRegex(route.path)),
    };
    return obj;
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [window.location.pathname],
    };
  }
  /* eslint new-cap: ["error", { "properties": false }] */
  const view = new match.route.view(getParams(match));

  document.querySelector('#app').innerHTML = await view.render();
};

const navigateTo = (url) => {
  window.history.pushState(null, null, url);
  router();
};

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
