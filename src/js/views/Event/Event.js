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

  checkIsFormFilled() {}

  checkIsSlotEmpty() {}

  addParticipantToEvent(participant) {
    this.event.participants.push(participant);
  }

  removeParticipantFromEvent(participant) {
    this.event.participants = this.event.participants.filter(
      (el) => el !== participant
    );
  }

  setEventNameValue(target) {
    this.event.name = target.value;
    // eslint-disable-next-line no-console
    console.log(this.event.name);
    // eslint-disable-next-line no-console
    console.log(this.event);
  }

  setDateValue(target, val) {
    this.event[val] = target.options[target.selectedIndex].value;
    // eslint-disable-next-line no-console
    console.log(this.event[val]);
    // eslint-disable-next-line no-console
    console.log(this.event);
  }

  showChosenParticipants() {
    const sel = document.querySelector('#participants');
    sel.options[0].innerHTML = this.event.participants;
  }

  setParticipantsValue(target) {
    // if checkbox is checked
    // and the name of the participant is not in the list already
    if (
      target.checked &&
      !this.event.participants.some((el) => el === target.value)
    ) {
      // add participant to this.event.participants
      this.addParticipantToEvent(target.value);
      this.showChosenParticipants();
      // eslint-disable-next-line no-console
      console.log(target.value);
      // eslint-disable-next-line no-console
      console.log(this.event.participants);
    }
    // if checkbox is unchecked
    if (!target.checked) {
      // add participant from this.event.participants
      this.removeParticipantFromEvent(target.value);
      this.showChosenParticipants();
      // eslint-disable-next-line no-console
      console.log(this.event.participants);
    }
  }

  createEvent(event) {
    // if another event already exists at the current date and time
    if (!this.checkIsSlotEmpty) {
      // do not go to calendar page
      event.preventDefault();
      // show error notification
      this.showError();
    } else {
      // else add event object to state
      state.events.push(this.event);
    }
  }

  handleChange(event) {
    const { target } = event;
    const idAttr = target.getAttribute('id');
    switch (idAttr) {
      case 'day':
        this.setDateValue(target, 'day');
        break;

      case 'time':
        this.setDateValue(target, 'time');
        break;

      case 'event-name':
        this.setEventNameValue(target);
        break;

      default:
        event.preventDefault();
        break;
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
        this.setParticipantsValue(target);
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
    this.fillSelectWithOptions('day', CONSTANTS.DAYS);
    this.fillSelectWithOptions('time', CONSTANTS.TIME);
    this.fillSelectWithCheckboxes('checkboxes', CONSTANTS.PARTICIPANTS);

    // eventListners
    const form = document.querySelector('.event');
    form.addEventListener('click', (event) => {
      this.handleClick(event);
    });

    form.addEventListener('change', (event) => {
      this.handleChange(event);
    });
  }
}

export default Event;
