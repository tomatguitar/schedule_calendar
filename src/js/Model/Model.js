import Check from '../Check/Check';
import * as CONSTANTS from '../constants/constants';
import state from '../state/state';

class Model {
  constructor() {
    this.check = new Check();
    this.event = {
      name: '',
      participants: [],
      day: '',
      time: '',
    };
    this.checkIsOk = false;
    this.errorMessage = '';
  }

  resetEventValue() {
    this.event = {
      name: '',
      participants: [],
      day: '',
      time: '',
    };
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

  addParticipantToEvent(participant) {
    this.event.participants.push(participant);
  }

  removeParticipantFromEvent(participant) {
    this.event.participants = this.event.participants.filter(
      (el) => el !== participant
    );
  }

  setParticipantsValue(target, display) {
    // if checkbox is checked
    // and the name of the participant is not in the list already(works for unique names)
    if (
      target.checked &&
      !this.event.participants.some((el) => el === target.value)
    ) {
      // add participant to this.event.participants
      this.addParticipantToEvent(target.value);
      display(this.event.participants);
      // eslint-disable-next-line no-console
      console.log(target.value);
      // eslint-disable-next-line no-console
      console.log(this.event.participants);
    }
    // if checkbox is unchecked
    if (!target.checked) {
      // add participant from this.event.participants
      this.removeParticipantFromEvent(target.value);
      display(this.event.participants);
      // eslint-disable-next-line no-console
      console.log(this.event.participants);
    }
  }

  checkEvent() {
    // if one of fields is not filled
    if (!this.check.fieldIsFilled(this.event)) {
      this.errorMessage = CONSTANTS.ERROR.fieldIsEmpty;
      // if another event with same date and time already exists
    } else if (!this.check.slotIsEmpty(state.events, this.event)) {
      this.errorMessage = CONSTANTS.ERROR.slotIsBooked;
    } else {
      this.checkIsOk = true;
      // else add event object to state
    }
  }

  addEvent() {
    state.events.push(this.event);
    this.resetEventValue();
  }
}

export default Model;
