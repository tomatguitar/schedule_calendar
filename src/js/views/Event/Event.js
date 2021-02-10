import AbstractView from '../AbstractView/AbstractView';
import eventFormLayout from '../../pageLayouts/eventLayout';
import * as CONSTANTS from '../../constants/constants';

class Event extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Create Event');
  }

  render() {
    const app = document.querySelector('.app');
    app.innerHTML = eventFormLayout;
    this.fillOptions('participants', CONSTANTS.PARTICIPANTS);
    this.fillOptions('day', CONSTANTS.DAYS);
    this.fillOptions('time', CONSTANTS.TIME);
  }
}

export default Event;
