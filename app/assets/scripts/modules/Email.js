class Email {
  constructor() {
    this.emailButton();
  }

  // Email button
  emailButton () {
    var butEmail = document.querySelector('.emailme');
    var emailLink = document.querySelector('.about__emailcopy');

    butEmail.addEventListener('click', function(e) {
      e.preventDefault();
      butEmail.parentElement.removeChild(butEmail);
      emailLink.style.display = 'inline-block';
    });
  }
}

export default Email;
