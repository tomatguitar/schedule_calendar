import AbstractView from '../AbstractView/AbstractView';
import * as layout from '../../pageLayouts/calendarLayout';

class Calendar extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Event Calendar');
  }

  render() {
    const app = document.querySelector('.app');
    app.innerHTML = layout.calendarHeader + layout.tableLayout;
    // return `
    //     <h1>EVENT CALENDAR</h1>
    //     <p>
    //       <a class="list__link" href="/create-event" data-link>New event +</a>
    //     </p>
    // `;
  }
}

export default Calendar;
