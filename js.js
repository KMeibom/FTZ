/*const navSlie = () => {
  const burger = document.querySelector('.burger');
  const nav = document.document.querySelector('.nav-links');

  burger.addEventListener('click, () => {
    nav.classisList.toggle('nav-active');
  });
}

navSlider();

burger.classisList.toogle('toggle')*/

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
	navLinks.forEach((link,index)=>
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
		//burger animation
		burger.classList.toggle('toggle');
});

}

navSlide();
