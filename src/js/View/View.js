import Calendar from '../views/Calendar/Calendar';
import Event from '../views/Event/Event';

/**
 * @class View
 *
 * Visual representation of the model.
 */
class View {
  constructor() {
    this.routes = [
      { path: '/calendar', view: Calendar },
      { path: '/create-event', view: Event },
    ];
  }
}

const view = new View();

export default view;
