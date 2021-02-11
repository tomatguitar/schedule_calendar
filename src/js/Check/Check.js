class Check {
  fieldIsFilled(formFields) {
    const isEmpty = (val) => {
      const fieldIsEmpty =
        val === '' ||
        val === 'empty' ||
        (Array.isArray(val) && val.length === 0);

      return fieldIsEmpty ? true : 0;
    };
    return Object.values(formFields).some(isEmpty) ? 0 : true;
  }

  slotIsEmpty(eventsList, event) {
    const { day } = event;
    const { time } = event;
    const isBooked = (obj) => {
      const dateExists = obj.day === day && obj.time === time;
      return dateExists ? true : 0;
    };
    const isEmpty = eventsList.some(isBooked) ? 0 : true;
    return eventsList === 0 ? 0 : isEmpty;
  }
}

export default Check;
