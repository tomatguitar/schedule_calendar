const eventFormLayout = `
<h2 class="title">Create New Event</h2>
<form  class="event" onSubmit="return false">
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
        <select class="select" name="day"  id="day" data-key ="day">
        </select>
        <div class="select-icon">
          <svg focusable="false" viewBox="0 0 104 128" width="25" height="35" class="icon">
            <path d="m2e1 95a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm14 55h68v1e1h-68zm0-3e1h68v1e1h-68zm0-3e1h68v1e1h-68z"></path>
          </svg>
        </div>
      </div>
      <label class="event-label" for="time">Time: </label>
      <div class="filter">
        <select class="select" name="time"  id="time" data-key ="time">
        </select>
        <div  class="select-icon">
          <svg focusable="false" viewBox="0 0 104 128" width="25" height="35" class="icon">
            <path d="m2e1 95a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm14 55h68v1e1h-68zm0-3e1h68v1e1h-68zm0-3e1h68v1e1h-68z"></path>
          </svg>
        </div>
      </div>
      <div class="button-wrapper">
        <a href="/calendar" class="button" data-key='cancel' data-link>Cancel</a>
        <a href="/calendar" class="button" data-key='create' data-link>Create</a>
      </div>
    </form>`;

export default eventFormLayout;
