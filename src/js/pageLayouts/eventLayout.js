/* <option value="current"></option>
          <option value="Maria">Maria</option>
          <option value="Oleg">Oleg</option>
          <option value="Ivan">Ivan</option>
          <option value="Kate">Kate</option>
          <option value="Andrey">Andrey</option>
          <option value="Dmitry">Dmitry</option> */

/* <option value="current"></option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option> */

/* <option value="0"></option>
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
          <option value="15:00">15:00</option>
          <option value="16:00">16:00</option>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option> */

const eventFormLayout = `
<a href="/calendar" data-link>Calendar</a>
<h2 class="title">Create New Event</h2>
<form  class="event">
      <label class="event-label" for="event-name">Name of event: </label>
      <div class="input">
        <input type="text" name="event-name" id="event-name"/>
      </div>
      <label class="event-label" for="participants">Participants: </label>
      <div class="filter filter--multiselect">
        <div class="select-box">
          <select class="select" name="participants" id="participants">
            <option value="current"></option>
          </select>
          <div class="over-select" data-key='checkbox'></div>
          <div class="select-icon">
            <svg focusable="false" viewBox="0 0 104 128" width="25" height="35" class="icon">
              <path d="m2e1 95a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm14 55h68v1e1h-68zm0-3e1h68v1e1h-68zm0-3e1h68v1e1h-68z"></path>
            </svg>
          </div>
        </div>
        <div class="checkboxes" >
        </div>
      </div>
      <label class="event-label" for="day">Day: </label>
      <div class="filter">
        <select class="select" name="day"  id="day">
        </select>
        <div class="select-icon">
          <svg focusable="false" viewBox="0 0 104 128" width="25" height="35" class="icon">
            <path d="m2e1 95a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm14 55h68v1e1h-68zm0-3e1h68v1e1h-68zm0-3e1h68v1e1h-68z"></path>
          </svg>
        </div>
      </div>
      <label class="event-label" for="time">Time: </label>
      <div class="filter">
        <select class="select" name="time"  id="time">
        </select>
        <div  class="select-icon">
          <svg focusable="false" viewBox="0 0 104 128" width="25" height="35" class="icon">
            <path d="m2e1 95a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm14 55h68v1e1h-68zm0-3e1h68v1e1h-68zm0-3e1h68v1e1h-68z"></path>
          </svg>
        </div>
      </div>
      <div class="button-wrapper">
        <button class="button" data-key='cancel'>Cancel</button>
        <button class="button" data-key='create'>Create</button>
      </div>
    </form>`;

export default eventFormLayout;
