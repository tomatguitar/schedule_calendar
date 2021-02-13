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

  remove() {
    const errorBlock = document.querySelector('.error');
    errorBlock.remove();
  }

  hide() {
    const errorBlock = document.querySelector('.error');
    errorBlock.style.display = 'none';
  }

  show() {
    const errorBlock = document.querySelector('.error');
    errorBlock.style.display = 'block';
    errorBlock.style.display = 'visible';
    errorBlock.style.animationPlayState = 'running';
  }

  display(message) {
    this.create(message);
    this.show();
    setTimeout(() => this.remove(), 2500);
  }
}

export default Error;
