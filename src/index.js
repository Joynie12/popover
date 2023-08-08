import './styles/style.css';

const popoverButton = document.getElementById('popoverButton');
const popover = document.querySelector('.popover');

popoverButton.addEventListener('click', function() {
  popover.classList.toggle('show');
});

document.addEventListener('click', function(event) {
  if (!popover.contains(event.target) && event.target !== popoverButton) {
    popover.classList.remove('show');
  }
});
