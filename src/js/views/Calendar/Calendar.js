import AbstractView from '../AbstractView/AbstractView';
import * as layout from '../../pageLayouts/calendarLayout';
import * as CONSTANTS from '../../constants/constants';

class Calendar extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Event Calendar');
  }

  // method that fills table headers with the values of DAY and TIME constatants
  // and also(in future) fills table cells with events
  fillCalendarHeaders() {
    const tableHead = document.querySelector('.calendar__head');
    const tableBody = document.querySelector('.calendar__body');
    const trHead = document.createElement('tr');
    trHead.classList.add('calendar__row');
    tableHead.appendChild(trHead);

    // fill horizontall table headers
    for (let i = 0; i < CONSTANTS.DAYS.length; i++) {
      const tHeaderDays = document.createElement('th');
      tHeaderDays.classList.add('calendar__heading');
      tHeaderDays.innerText = CONSTANTS.DAYS[i];
      trHead.appendChild(tHeaderDays);
    }

    // fill verticall table headers and create table rows
    for (let j = 0; j < CONSTANTS.TIME.length; j++) {
      const trBody = document.createElement('tr');
      tableBody.appendChild(trBody);
      const tHeaderTime = document.createElement('th');
      tHeaderTime.classList.add('calendar__heading');
      tHeaderTime.innerText = CONSTANTS.TIME[j];
      trBody.appendChild(tHeaderTime);
      trBody.classList.add('calendar__row');
      for (let i = 1; i < CONSTANTS.DAYS.length; i++) {
        const tCell = document.createElement('td');
        tHeaderTime.insertAdjacentElement('afterend', tCell);
      }
    }
  }

  render() {
    const app = document.querySelector('.app');
    app.innerHTML = layout.calendarHeader + layout.tableLayout;
    this.fillCalendarHeaders();
    // return `
    //     <h1>EVENT CALENDAR</h1>
    //     <p>
    //       <a class="list__link" href="/create-event" data-link>New event +</a>
    //     </p>
    // `;
  }
}

export default Calendar;
