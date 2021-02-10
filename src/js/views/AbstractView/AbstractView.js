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
    let i = 0;
    if (elem === 'day') {
      i = 1;
    }
    for (i; i < constant.length; i++) {
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
