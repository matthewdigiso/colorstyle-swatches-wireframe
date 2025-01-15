
document.querySelectorAll('.swatch').forEach(function(swatch) {
    
    const color = swatch.getAttribute('data-color');
    swatch.style.backgroundImage = `url('img/${color}_swatch.jpg')`;  // Make sure you have the correct images in the img folder for each swatch
  
    swatch.addEventListener('click', function() {
      
      const color = this.getAttribute('data-color');
  
     
      const productImage = this.closest('.card').querySelector('img');
  
      
      <img src="img/zip-up.jpeg" class="card-img-top" alt="Product"></img>
    });
});
