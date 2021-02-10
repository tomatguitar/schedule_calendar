export default class {
  constructor(params) {
    this.params = params;
  }

  setTitle(title) {
    document.title = title;
  }

  fillSelectWithOptions(elem, constant) {
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

  fillSelectWithCheckboxes(elem, constant) {
    const checkboxContainer = document.querySelector(`.${elem}`);

    for (let i = 1; i < constant.length; i++) {
      const label = document.createElement('label');
      const input = document.createElement('input');
      label.classList.add('checkbox-label');
      label.htmlFor = `option${i}`;
      label.innerText = constant[i];
      input.type = 'checkbox';
      input.name = `option${i}`;
      input.value = constant[i];
      input.setAttribute('data-key', 'participant');
      checkboxContainer.appendChild(label);
      label.insertAdjacentElement('afterbegin', input);
    }
  }

  async render() {
    return '';
  }
}
