import Check from '../Check/Check';
import * as CONSTANTS from '../constants/constants';
import state from '../state/state';
import * as storage from '../helpers/storage/storage';

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
    this.currentEventStamp = ''; // string "dayIndex:timeIndex"
    this.filteredByParticipant = [];
    this.loadEventsfromStorage('events');
    this.updateArrayOfParticipants();
  }

  save(name, val) {
    storage.set(name, val);
  }

  load(name) {
    return storage.get(name);
  }

  loadEventsfromStorage(name) {
    state.events = this.load(name) ? this.load(name) : [];
  }

  resetEventValues() {
    this.event = {
      name: '',
      participants: [],
      day: '',
      time: '',
    };
    this.checkIsOk = false;
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

  // filter existing events by participant
  filterByParticipant(target) {
    const option = target.options[target.selectedIndex].value;
    const filtered = state.events.filter((o) => {
      const obj = o;
      return obj.participants.includes(option);
    });
    this.filteredByParticipant = filtered;
  }

  // this method is needed to make an array of participants that
  // will take part in created events and insert this array as a
  // list of options in the select field on the calendar page
  updateArrayOfParticipants() {
    const arr = [];
    if (state.events.length === 0) {
      return;
    }
    state.events.forEach((o) => {
      const obj = o;
      arr.push(obj.participants);
    });
    state.participants = [...new Set(arr.flat())].sort();
    // eslint-disable-next-line no-console
    console.log(state.participants);
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
    }
  }

  addEvent() {
    // add event to state
    state.events.push(this.event);
    // save list of events when new event is created
    this.save('events', state.events);
    this.updateArrayOfParticipants();
  }

  getEventDate(e) {
    // get data-stamp attribute from current td element
    // tranform it to array [dayIndex, timeIndex]
    this.currentEventStamp = e.path[2].getAttribute('data-stamp');
  }

  removeEvent(dateStamp) {
    const dayIndex = dateStamp.charAt(0);
    const timeIndex = dateStamp.charAt(2);
    const day = CONSTANTS.DAYS[dayIndex];
    const time = CONSTANTS.TIME[timeIndex];
    const currentEvent = state.events.find((o) => {
      const obj = o;
      return obj.day === day && obj.time === time;
    });
    const eventList = state.events.filter((o) => {
      const obj = o;
      return obj !== currentEvent;
    });
    state.events = eventList;
    // save list of events when event is removed
    this.save('events', state.events);
  }
}

export default Model;
