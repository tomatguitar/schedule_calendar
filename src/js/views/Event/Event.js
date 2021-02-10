import AbstractView from '../AbstractView/AbstractView';
import eventFormLayout from '../../pageLayouts/eventLayout';
import * as CONSTANTS from '../../constants/constants';

class Event extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Create Event');
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
