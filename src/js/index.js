/* eslint-disable no-console */
/* eslint-disable no-alert */
import 'regenerator-runtime/runtime';
import 'core-js/stable';
import controller from './Controller/Controller';
import App from './App/App';

// Import of styles
import '../styles/index.scss';

const app = new App(controller);
