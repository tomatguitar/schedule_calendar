class Error {
  constructor() {
    this.page = document.querySelector('body');
  }

  create(message) {
    const errorBlock = document.createElement('div');
    errorBlock.classList.add('error');
    errorBlock.innerText = message;
    this.page.prepend(errorBlock);
  }

  show(message) {
    this.create(message);
  }
}

export default Error;
