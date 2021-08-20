const btn = document.querySelector('#btn')
const imgviolet = document.getElementById('violet')

btn.addEventListener('click' , () => {
	violet.classList.toggle('show')
	console.log(window);
})

const mouseEvent = document.querySelector('.mouseEvent');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
mouseEvent.addEventListener('mousemove' , (event) => {
      horizontal.innerHTML = event.x;
      vertical.innerHTML = event.y;

      mouseEvent.style.left= event.x / window.innerWidth * 100 + "%";
       console.log(event);


     //  if(event.x > 500){
//     } else{
  //   	document.body.style.background ="url('https://www.guillenphoto.com/data/blog/2015/011-paysages-10-astuces/images/10-astuces-photo-paysages-amar-guillen-photographe-1.jpg')";
 //    }

})


const button = document.querySelector('#gravity')
const mem = document.querySelector('body')   

   button.addEventListener('click', () => {

   	     mem.classList.toggle ('venus')

   	 })