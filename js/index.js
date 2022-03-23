const counters=document.querySelectorAll('.counter');
const speed = 20;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const inc = target / speed;
    if(count < target){
      counter.innerText = count + inc;
      setTimeout(updateCount , 25);
    } else {
      count.innerText = target ;
    }

  }

  updateCount();
});


ScrollReveal({
  reset: true,
  distance: '50px',
  duration: 1500,
  delay:400 
  
  });

  ScrollReveal().reveal('.tag , .tag1  , .tag3', { delay: 500, origin:'bottom' });
  ScrollReveal().reveal('.immg', { delay: 500, origin:'right' });
  ScrollReveal().reveal('.par', { delay: 600, origin:'bottom' });
  ScrollReveal().reveal('.bot', { delay: 700, origin:'bottom' });
  ScrollReveal().reveal('.icons img', { delay: 500, origin:'bottom' , interval:200 });
  ScrollReveal().reveal('.all1', { delay: 400, origin:'up' });

  ScrollReveal().reveal('.undertag1', { delay: 350, origin:'bottom' });
  ScrollReveal().reveal('.undertag11', { delay: 500, origin:'bottom' });

  ScrollReveal().reveal('.imgTag1', { delay: 500, origin:'left' });
  ScrollReveal().reveal('.div1Tag1 , .div2Tag1', { delay: 500, origin:'right' });

  ScrollReveal().reveal('.par10', { delay: 500, origin:'bottom' });

  ScrollReveal().reveal('.undertag2 div', { delay: 500, origin:'bottom' , interval:200 });

  ScrollReveal().reveal('.serve .one11', { delay: 400, origin:'bottom' , interval:200 });
  ScrollReveal().reveal('.serve2 .one1', { delay: 500, origin:'bottom' , interval:200 });

  document.querySelector(".btn").addEventListener("click" , ()=>
{
document.querySelector(".hiddenphones").classList.toggle("hidden")
})