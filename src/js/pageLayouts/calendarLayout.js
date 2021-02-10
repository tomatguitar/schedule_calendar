const calendarHeader = `
<header class="header">
  <label for="select">Filter events by participant's name:</label>
  <div class="filter">
    <select name="filter" class="select" id="filter-participants">
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
      </thead>
      <tbody class="calendar__body">
      </tbody>
    </table>`;

export { tableLayout, calendarHeader };
