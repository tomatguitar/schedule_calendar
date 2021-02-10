import router, { navigateTo } from '../helpers/router/router';

class App {
  init() {
    document.addEventListener('DOMContentLoaded', () => {
      // this.navigateTo('calendar');
      document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
          e.preventDefault();
          navigateTo(e.target.href);
        }
      });

      router();
      window.addEventListener('popstate', () => router(this.view.routes));
    });
  }
}

const app = new App();

export default app;
