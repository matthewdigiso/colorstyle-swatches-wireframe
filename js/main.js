// Add event listeners for each swatch
document.querySelectorAll('.swatch').forEach(function(swatch) {
    // Set the background image for each swatch based on the color data
    const color = swatch.getAttribute('data-color');
    swatch.style.backgroundImage = `url('img/${color}_swatch.jpg')`;  // Make sure you have the correct images in the img folder for each swatch
  
    swatch.addEventListener('click', function() {
      // Get the color data from the swatch
      const color = this.getAttribute('data-color');
  
      // Find the product image within the card
      const productImage = this.closest('.card').querySelector('img');
  
      // Dynamically update the image source based on the selected color
      <img src="img/zip-up.jpeg" class="card-img-top" alt="Product"></img>
    });
});
