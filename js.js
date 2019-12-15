var slideIn = document.querySelector('.slideIn');
var nav = document.querySelector('.nav-links');
var navLinks = document.querySelectorAll('.nav-links li');

var navSlide=()=>
{
	slideIn.addEventListener('click',()=>
	{
		nav.classList.toggle('nav-active');
		slideIn.classList.toggle('toggle');
}	);
	
}

navSlide();


var ImageIndex = 0;

  function swipe(event, direction) {
    var midpoint = Math.floor(screen.width / 2);
    var px = event.pageX;
    var items = document.getElementsByClassName('bil-model-wrapper');
    var itemActive = items[ImageIndex];
    if (direction == 'left') {
      itemActive.style.marginLeft = '-100%';
      itemActive.style.transition = '0.5s ';
      ImageIndex = ImageIndex < items.length - 1 ? ImageIndex + 1 : ImageIndex;
    } else {
      itemActive.style.marginLeft = '0';
      itemActive.style.transition = '0.5s ';
      ImageIndex = ImageIndex >= 1 ? ImageIndex - 1 : 0;
    }
  }