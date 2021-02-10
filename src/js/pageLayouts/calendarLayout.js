const calendarHeader = `
<header>
      <label for="filter">
        <select name="filter" id="filter">
          <option value=""></option>
          <option value="">Maria</option>
          <option value="">Oleg</option>
          <option value="">Ivan</option>
          <option value="">Kate</option>
          <option value="">Andrey</option>
          <option value="">Dmitry</option>
        </select>
      </label>
      <a class="list__link" href="/create-event" data-link>New event +</a>
    </header>
`;

const tableLayout = `
<table class="calendar">
      <caption class="calendar__title">
        CALENDAR
      </caption>
      <thead class="calendar__head">
        <tr class="calendar__row">
          <th class="calendar__heading">Name</th>
          <th class="calendar__heading">Mon</th>
          <th class="calendar__heading">Tue</th>
          <th class="calendar__heading">Wed</th>
          <th class="calendar__heading">Thu</th>
          <th class="calendar__heading">Fri</th>
        </tr>
      </thead>
      <tbody class="calendar__body">
        <tr class="calendar__row">
          <th class="calendar__heading">10:00</th>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
        </tr>
        <tr class="calendar__row">
          <th class="calendar__heading">11:00</th>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
        </tr>
        <tr class="calendar__row">
          <th class="calendar__heading">12:00</th>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
        </tr>
        <tr class="calendar__row">
          <th class="calendar__heading">13:00</th>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
        </tr>
        <tr class="calendar__row">
          <th class="calendar__heading">14:00</th>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
        </tr>
        <tr class="calendar__row">
          <th class="calendar__heading">15:00</th>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
        </tr>
        <tr class="calendar__row">
          <th class="calendar__heading">16:00</th>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
        </tr>
        <tr class="calendar__row">
          <th class="calendar__heading">17:00</th>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
        </tr>
        <tr class="calendar__row">
          <th class="calendar__heading">18:00</th>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
        </tr>
      </tbody>
    </table>`;

export { tableLayout, calendarHeader };
