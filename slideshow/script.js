var allImages = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Pied-winged_swallow_%28Hirundo_leucosoma%29.jpg/1280px-Pied-winged_swallow_%28Hirundo_leucosoma%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Rufous-tailed_flycatcher_%28Myiarchus_validus%29.JPG/1024px-Rufous-tailed_flycatcher_%28Myiarchus_validus%29.JPG',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Bare-faced_curassow_%28Crax_fasciolata%29_female_head.JPG/1024px-Bare-faced_curassow_%28Crax_fasciolata%29_female_head.JPG',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Savanna_hawk_%28Buteogallus_meridionalis%29.JPG/800px-Savanna_hawk_%28Buteogallus_meridionalis%29.JPG',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Malachite_kingfisher_%28Corythornis_cristatus%29.jpg/1024px-Malachite_kingfisher_%28Corythornis_cristatus%29.jpg'
];

var currentSlide = 1;

var start = function()
{
  var markup = "";
  for(var i = 0; i < allImages.length; i++){
    var imgURL = allImages[i];
    markup = markup + "<img src='" + imgURL + "'>";
  }
  $("#ssContainer").html(markup);
  goToSlide(1, 0);
}


var goToSlide = function(n, d)
{
  d = d || 0;
  $("#ssContainer img").fadeOut(d);
  $("#ssContainer img:nth-of-type(" + n + ")").stop().fadeIn(d);
  currentSlide = n;
}


var goNext = function()
{
  var n = currentSlide + 1;
  if (n > allImages.length){
    n = 1;
  } 
  goToSlide(n, 1000);
}
