import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $('.portfolio-item__coming-soon');
    this.modal = $('.modal');
    this.closeModalButton = $('.modal__close');
    this.events();
  }

  events() {
    // open modal
    this.openModalButton.click(this.openModal.bind(this));
    // close modal
    this.closeModalButton.click(this.closeModal.bind(this));
    // escape key
    $(document).keyup(this.keyPress.bind(this));

  }

  keyPress(e) {
    if(e.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass('modal--is-visible');
  }

  closeModal() {
    this.modal.removeClass('modal--is-visible');
  }
}

export default Modal;
