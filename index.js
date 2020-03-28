function selectAllImages() {
  const images = document.querySelectorAll("img");
  return images;
}

function pickFavorite() {
  const imageList = selectAllImages();

  imageList.forEach(image => {
    image.addEventListener("click", e => {
      selectAllImages().forEach(i => {
        i.removeAttribute("favorite");
      });
      e.target.setAttribute("favorite", "");
    });
  });
  //   imageList.forEach(function(image) {
  //     console.log(image);
  //   });
  //   for (let i = 0; i < imageList.length; i++) {
  //     console.log(imageList[i]);
  //   }
}
pickFavorite();
