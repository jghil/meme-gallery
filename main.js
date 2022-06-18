var imageUrls = [];
var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', function () {
  var inputValue = $imageUrlInput.value;
  imageUrls.push($imageUrlInput.value);
  $imageUrlInput.value = '';
  console.log(inputValue);
});
