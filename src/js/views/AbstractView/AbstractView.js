export default class {
  constructor(params) {
    this.params = params;
  }

  setTitle(title) {
    document.title = title;
  }

  fillOptions(elem, constant) {
    const select = document.querySelector(`#${elem}`);
    const optionDefault = document.createElement('option');
    optionDefault.value = 'current';
    optionDefault.innerText = '';
    select.appendChild(optionDefault);

    for (let i = 0; i < constant.length; i++) {
      if (elem === 'day') {
        i += 1;
      }
      const option = document.createElement('option');
      option.value = constant[i];
      option.innerText = constant[i];
      select.append(option);
    }
  }

  async render() {
    return '';
  }
}
