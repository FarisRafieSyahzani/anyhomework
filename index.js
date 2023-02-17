const add_button = document.getElementById('add-btn');
const add_box = document.getElementById('add-box');
const close_button = document.getElementById('close');
const make_button = document.getElementById('make-btn');
const input_name = document.getElementById('name');
const input_price = document.getElementById('price');
const list_item = document.querySelector('.list-item');


add_button.addEventListener('click', () => {
    add_box.style.display = 'block';
  })

close_button.addEventListener('click', function(){
  add_box.style.display = 'none';
})

make_button.addEventListener('click', ()=>{
  const course = document.createElement('div');
  course.classList.add('items');
  course.innerHTML = `<img src="img/download.png" alt="math">
  <div class="desc">
      <h3>${input_name.value}</h3>
      <p><b>Harga : Rp.${input_price.value}</b></p>
      <p>Rate : 4.7</p>
  </div>`;
  list_item.appendChild(course);
  add_box.style.display = 'none';
})

window.onclick = function(event) {
  if (event.target == add_box) {
    add_box.style.display = "none";
  }
};