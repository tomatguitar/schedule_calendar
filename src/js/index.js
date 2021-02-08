/* eslint-disable no-console */
/* eslint-disable no-alert */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import controller from './Controller/Controller';
import App from './App/App';

// Import of styles
import '../styles/index.scss';

// eslint-disable-next-line no-unused-vars
const app = new App(controller);
