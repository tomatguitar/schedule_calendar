const eventFormLayout = `
<a href="/calendar" data-link>Calendar</a>
<form action="">
      <label for="event-name"
        >Name of event
        <input type="text" name="event-name" id="event-name" />
      </label>
      <label for="participants">
        Participants
        <select name="participants" id="participants">
          <option value="">Maria</option>
          <option value="">Oleg</option>
          <option value="">Ivan</option>
          <option value="">Kate</option>
          <option value="">Andrey</option>
          <option value="">Dmitry</option>
        </select>
      </label>
      <label for="day">
        Day
        <select name="day" id="day">
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
        </select>
      </label>
      <label for="time">
        Time
        <select name="time" id="time">
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
          <option value="15:00">15:00</option>
          <option value="16:00">16:00</option>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
        </select>
      </label>
      <button id="cancel">Cancel</button>
      <button id="create">Create</button>
    </form>`;

export default eventFormLayout;
