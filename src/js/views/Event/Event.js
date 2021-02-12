import AbstractView from '../AbstractView/AbstractView';
import eventFormLayout from '../../pageLayouts/eventLayout';
import * as CONSTANTS from '../../constants/constants';
// import state from '../../state/state';
import Error from '../../Error/Error';
// import Check from '../../Check/Check';

class Event extends AbstractView {
  constructor(params) {
    super(params);
    this.error = new Error();
    this.setTitle('Create Event');
  }

  addParticipantToEvent(participant) {
    this.event.participants.push(participant);
  }

  removeParticipantFromEvent(participant) {
    this.event.participants = this.event.participants.filter(
      (el) => el !== participant
    );
  }

  showChosenParticipants(participants) {
    const sel = document.querySelector('#participants');
    sel.options[0].innerHTML = participants;
  }

  showError(message) {
    this.error.display(message);
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
  }
}

export default Event;
