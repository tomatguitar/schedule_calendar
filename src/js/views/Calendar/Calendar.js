import AbstractView from '../AbstractView/AbstractView';
import * as layout from '../../pageLayouts/calendarLayout';
import * as CONSTANTS from '../../constants/constants';
import state from '../../state/state';

class Calendar extends AbstractView {
  constructor(params) {
    super(params);
    this.app = document.querySelector('.app');
    this.body = document.querySelector('body');
    this.setTitle('Event Calendar');
  }

  // method that fills table headers with the values of DAY and TIME constants
  // and also fills table cells with events
  createTable() {
    const tableHead = document.querySelector('.calendar__head');
    const tableBody = document.querySelector('.calendar__body');
    // insert row for table headers
    const trHead = document.createElement('tr');
    trHead.classList.add('calendar__row');
    tableHead.appendChild(trHead);
    // fill main table headers
    this.insertMainHeaders(trHead);
    // fill verticall table headers and create table rows
    this.insertRows(tableBody);
  }

  insertMainHeaders(parent) {
    for (let i = 0; i < CONSTANTS.DAYS.length; i++) {
      const tHeaderDays = document.createElement('th');
      tHeaderDays.classList.add('calendar__heading');
      tHeaderDays.innerText = CONSTANTS.DAYS[i];
      parent.appendChild(tHeaderDays);
    }
  }

  insertRows(parent) {
    for (let j = 0; j < CONSTANTS.TIME.length; j++) {
      const trBody = document.createElement('tr');
      parent.appendChild(trBody);
      const tHeaderTime = document.createElement('th');
      tHeaderTime.classList.add('calendar__heading');
      tHeaderTime.innerText = CONSTANTS.TIME[j];
      trBody.appendChild(tHeaderTime);
      trBody.classList.add('calendar__row');
      // create empty cells
      this.insertCells(tHeaderTime);
    }
    this.insertEvents();
  }

  insertCells(parent) {
    for (let i = 1; i < CONSTANTS.DAYS.length; i++) {
      const tCell = document.createElement('td');
      parent.insertAdjacentElement('afterend', tCell);
    }
  }

  hideEventElements(elements) {
    const cells = document.querySelectorAll(`[data-stamp]`);
    cells.forEach((el) => {
      const elem = el;
      const evDiv = elem.querySelector('.eventSpan');
      if (evDiv.classList.contains('eventSpan--hidden')) {
        evDiv.classList.remove('eventSpan--hidden');
      }
    });

    if (elements.length === 0) {
      return;
    }

    Array.from(cells).forEach((el) => {
      const elem = el;
      const evDiv = elem.querySelector('.eventSpan');
      const dataStamp = elem.getAttribute('data-stamp');
      const dayIndex = dataStamp.charAt(0);
      const timeIndex = dataStamp.charAt(2);
      const day = CONSTANTS.DAYS[dayIndex];
      const time = CONSTANTS.TIME[timeIndex];
      const match = elements.find((o) => {
        const obj = o;
        return obj.day === day && obj.time === time;
      });
      if (!match) {
        evDiv.classList.add('eventSpan--hidden');
      }
    });
  }

  createEventElement(eventName) {
    let eventTitle = eventName;
    if (eventName.length >= 18) {
      eventTitle = `${eventName.slice(0, 18)}...`;
    }
    const evDiv = document.createElement('div');
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('delete-btn');
    closeBtn.setAttribute('data-key', 'delete');
    evDiv.classList.add('eventSpan');
    evDiv.innerText = `${eventTitle}`;
    evDiv.appendChild(closeBtn);
    return evDiv;
  }

  insertEvents() {
    state.events.forEach((o) => {
      const obj = o;
      const day = CONSTANTS.DAYS.indexOf(obj.day);
      const time = CONSTANTS.TIME.indexOf(obj.time);
      this.appendEventDiv(day, time, obj.name);
    });
  }

  removeEventElement(dateStamp) {
    const cells = document.querySelectorAll(`[data-stamp]`);
    const eventElementContainer = Array.from(cells).find((c) => {
      const cell = c;
      return cell.getAttribute('data-stamp') === dateStamp;
    });
    eventElementContainer.innerHTML = '';
  }

  appendEventDiv(dayIndex, timeIndex, eventName) {
    const eventDiv = this.createEventElement(eventName);
    const tBody = document.querySelector('.calendar__body');
    const timeRow = tBody.querySelectorAll('tr')[timeIndex];
    const cell = timeRow.querySelectorAll('td')[dayIndex - 1];
    cell.setAttribute('data-stamp', `${dayIndex}:${timeIndex}`);
    cell.insertAdjacentElement('afterbegin', eventDiv);
  }

  createOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    return overlay;
  }

  createModalBox(name) {
    const popUp = document.createElement('div');
    popUp.classList.add('modal');
    const text = document.createElement('p');
    text.classList.add('modal__message');
    text.innerText = `Are you sure you want to delete "${name}" event?`;
    popUp.appendChild(text);
    const btnWrapper = document.createElement('div');
    btnWrapper.classList.add('button-wrapper');
    popUp.appendChild(btnWrapper);
    const btnYes = document.createElement('button');
    btnYes.classList.add('button');
    btnYes.setAttribute('data-key', 'approve');
    btnYes.innerText = 'Yes';
    const btnNo = document.createElement('button');
    btnNo.classList.add('button');
    btnNo.setAttribute('data-key', 'not-approve');
    btnNo.innerText = 'No';
    btnWrapper.appendChild(btnNo);
    btnWrapper.appendChild(btnYes);
    return popUp;
  }

  showModalBox(name) {
    const overlay = this.createOverlay();
    const modal = this.createModalBox(name);
    this.app.insertAdjacentElement('afterbegin', overlay);
    this.app.insertAdjacentElement('beforeend', modal);
  }

  hideModalBox() {
    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector('.modal');
    overlay.remove();
    modal.remove();
  }

  render() {
    const app = document.querySelector('.app');
    app.innerHTML = layout.calendarHeader + layout.tableLayout;
    this.fillSelectWithOptions('filter-participants', state.participants);
    this.createTable();
  }
}

export default Calendar;
