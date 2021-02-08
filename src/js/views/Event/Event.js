import AbstractView from '../AbstractView/AbstractView';
import eventFormLayout from '../../pageLayouts/eventLayout';

class Event extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Create Event');
  }

  render() {
    const app = document.querySelector('.app');
    app.innerHTML = eventFormLayout;
  }
}

export default Event;
