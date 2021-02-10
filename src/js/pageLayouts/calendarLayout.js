const calendarHeader = `
<header class="header">
  <label for="select">Filter events by participant's name:</label>
  <div class="filter">
    <select name="filter" class="select">
      <option value=""></option>
      <option value="Maria">Maria</option>
      <option value="Oleg">Oleg</option>
      <option value="Ivan">Ivan</option>
      <option value="Kate">Kate</option>
      <option value="Andrey">Andrey</option>
      <option value="Dmitry">Dmitry</option>
    </select>
    <div class="select-icon">
      <svg focusable="false" viewBox="0 0 104 128" width="25" height="35" class="icon">
        <path d="m2e1 95a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm14 55h68v1e1h-68zm0-3e1h68v1e1h-68zm0-3e1h68v1e1h-68z"></path>
      </svg>
    </div>
  </div>

  <a class="button" href="/create-event" data-link>New event +</a>
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
