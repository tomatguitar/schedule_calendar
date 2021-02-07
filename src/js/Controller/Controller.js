import router from '../helpers/router/router';
import model from '../Model/Model';
import view from '../View/View';

/**
 * @class Model
 *
 * Links the user input and the view output
 */
class Controller {
  constructor(modelInstance, viewInstance) {
    this.model = modelInstance;
    this.view = viewInstance;
    this.init();
  }

  navigateTo(url) {
    window.history.pushState(null, null, url);
    router(this.view.routes);
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.navigateTo('calendar');
      document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
          e.preventDefault();
          this.navigateTo(e.target.href);
        }
      });

      router(this.view.routes);
      window.addEventListener('popstate', () => router(this.view.routes));
    });
  }
}

const controller = new Controller(model, view);

export default controller;
