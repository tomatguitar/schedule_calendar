import AbstractView from '../AbstractView/AbstractView';

class Event extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Create Event');
  }

  async render() {
    return `
        <h1>Event!</h1>
        <p>
            <a href="/calendar" data-link>Calendar</a>.
        </p>
    `;
  }
}

export default Event;
