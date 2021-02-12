import router from '../helpers/router/router';
import Calendar from '../views/Calendar/Calendar';
import Event from '../views/Event/Event';
import Model from '../Model/Model';

class Controller {
  constructor() {
    this.model = new Model();
    this.calendar = new Calendar();
    this.event = new Event();
    this.routes = [
      { path: '/calendar', view: this.calendar },
      { path: '/create-event', view: this.event },
    ];
  }

  onLinkButtonClick(e) {
    this.model.resetEventValue();
    e.preventDefault();
    this.navigateTo(e);
  }

  onCreateEvent(e) {
    this.model.checkEvent();
    if (!this.model.checkIsOk) {
      e.preventDefault();
      this.event.showError(this.model.errorMessage);
    } else {
      this.model.addEvent();
      e.preventDefault();
      this.navigateTo(e);
    }
  }

  onDateNameChange(target, val) {
    this.model.setDateValue(target, val);
  }

  onEventNameChange(target) {
    this.model.setEventNameValue(target);
  }

  onPatrticipantsValueChange(target) {
    this.model.setParticipantsValue(target, (participants) =>
      this.event.showChosenParticipants(participants)
    );
  }

  handleChange(e) {
    const { target } = e;
    const idAttr = target.getAttribute('id');
    switch (idAttr) {
      case 'day':
        this.onDateNameChange(target, 'day');
        break;

      case 'time':
        this.onDateNameChange(target, 'time');
        break;

      case 'event-name':
        this.onEventNameChange(target);
        break;

      default:
        e.preventDefault();
        break;
    }
  }

  handleClick(e) {
    let action = '';
    const { target } = e;
    const dataKey = target.getAttribute('data-key');
    if (dataKey !== null) {
      action = dataKey;
    } else {
      return;
    }
    switch (action) {
      case 'checkbox':
        this.event.showCheckBoxes();
        break;

      case 'participant':
        this.onPatrticipantsValueChange(target);
        break;

      case 'create':
        this.onCreateEvent(e);
        break;

      case 'new-event':
      case 'cancel':
        this.onLinkButtonClick(e);
        break;

      default:
        e.preventDefault();
        break;
    }
  }

  navigateTo(e) {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      window.history.pushState(e.target.href, null, e.target.href);
      router(this.routes);
    }
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      const app = document.querySelector('.app');

      app.addEventListener('click', (e) => {
        this.handleClick(e);
      });

      app.addEventListener('change', (e) => {
        this.handleChange(e);
      });

      router(this.routes);
      window.addEventListener('popstate', () => router(this.routes));
    });
  }
}

const app = new Controller();

export default app;
