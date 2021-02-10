import AbstractView from '../AbstractView/AbstractView';
import eventFormLayout from '../../pageLayouts/eventLayout';
import * as CONSTANTS from '../../constants/constants';
import state from '../../state/state';

class Event extends AbstractView {
  constructor(params) {
    super(params);
    this.event = {
      name: '',
      participants: [],
      day: '',
      time: '',
    };
    this.setTitle('Create Event');
  }

  showError() {}

  addParticipantToEvent(participant) {
    this.event.participants.push(participant);
  }

  removeParticipantFromEvent(participant) {
    this.event.participants = this.event.participants.filter(
      (el) => el !== participant
    );
  }

  manageParticipantsList(target) {
    if (
      target.checked &&
      !this.event.participants.some((el) => el === target.value)
    ) {
      this.addParticipantToEvent(target.value);
      // eslint-disable-next-line no-console
      console.log(target.value);
      // eslint-disable-next-line no-console
      console.log(this.event.participants);
    }
    if (!target.checked) {
      this.removeParticipantFromEvent(target.value);
      // eslint-disable-next-line no-console
      console.log(this.event.participants);
    }
  }

  checkIsSlotEmpty() {}

  createEvent(event) {
    if (!this.checkIsSlotEmpty) {
      event.preventDefault();
      this.showError();
    } else {
      state.events.push(this.event);
    }
  }

  handleClick(event) {
    let action = '';
    const { target } = event;
    const dataKey = target.getAttribute('data-key');
    if (dataKey !== null) {
      action = dataKey;
    } else {
      return;
    }
    switch (action) {
      case 'checkbox':
        this.showCheckBoxes();
        break;

      case 'participant':
        this.manageParticipantsList(target);
        break;

      case 'create':
        this.createEvent(event);
        break;

      default:
        event.preventDefault();
        break;
    }
  }

  showCheckBoxes() {
    const checkboxes = document.querySelector('.checkboxes');
    if (checkboxes.style.display !== 'block') {
      checkboxes.style.display = 'block';
    } else if (checkboxes.style.display === 'block') {
      checkboxes.style.display = 'none';
    }
  }

  render() {
    const app = document.querySelector('.app');
    app.innerHTML = eventFormLayout;
    // this.fillSelectWithOptions('participants', CONSTANTS.PARTICIPANTS);
    this.fillSelectWithOptions('day', CONSTANTS.DAYS);
    this.fillSelectWithOptions('time', CONSTANTS.TIME);
    this.fillSelectWithCheckboxes('checkboxes', CONSTANTS.PARTICIPANTS);

    // eventListners
    const form = document.querySelector('.event');
    form.addEventListener('click', (event) => {
      this.handleClick(event);
    });
  }
}

export default Event;
