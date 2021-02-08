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
<table>
      <caption>
        CALENDAR
      </caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>10:00</th>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
        </tr>
        <tr>
          <th>11:00</th>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
        </tr>
        <tr>
          <th>12:00</th>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
        </tr>
        <tr>
          <th>13:00</th>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
        </tr>
        <tr>
          <th>14:00</th>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
        </tr>
        <tr>
          <th>15:00</th>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
        </tr>
        <tr>
          <th>16:00</th>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
        </tr>
        <tr>
          <th>17:00</th>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
        </tr>
        <tr>
          <th>18:00</th>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
          <td>---</td>
        </tr>
      </tbody>
    </table>`;

export { tableLayout, calendarHeader };
