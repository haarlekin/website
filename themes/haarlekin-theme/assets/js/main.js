document.addEventListener('click', function (e) {
  var toggle = e.target.closest('.menu-toggle');
  if (toggle) {
    var list = toggle.parentElement.querySelector('.nav-list');
    if (list) list.classList.toggle('active');
  }
});
