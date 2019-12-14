const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

const navSlide=()=>
{
	burger.addEventListener('click',()=>
	{
		//toggle nav
		nav.classList.toggle('nav-active');

			//animate links
	/*navLinks.forEach((link,index)=>
	{
		if (link.style.animation)
			{
				link.style.animation='';
			}
		else
		{
		link.style.animation=`navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
		}
	});
	*/
		//burger animation
		burger.classList.toggle('toggle');
});

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