import AbstractView from '../AbstractView/AbstractView';

class Calendar extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Event Calendar');
  }

  create() {}

  async render() {
    return `
        <h1>EVENT CALENDAR</h1>
        <p>
          <a class="list__link" href="/create-event" data-link>New event +</a>
        </p>
    `;
  }
}

export default Calendar;
