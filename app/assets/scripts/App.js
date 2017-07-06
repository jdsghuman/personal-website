// Email button
(function() {
  var butEmail = document.querySelector('.emailme');
  var emailLink = document.querySelector('.about__emailcopy');

  butEmail.addEventListener('click', function(e) {
    e.preventDefault();
    butEmail.parentElement.removeChild(butEmail);
    emailLink.style.display = 'inline-block';
  });
})();

// Dynamic Copyright Year in Footer
(function(){
  var dt = new Date().getFullYear();
  document.querySelector('#copyyear').innerHTML = dt;
})();
