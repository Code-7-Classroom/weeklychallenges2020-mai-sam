// slideshow

var i = 0; //starting point of index
var images = []; //variable of images with an empty array
var time = 3000; //time in ms between each picture

//array list with image paths
images[0] =
  "https://pbs.twimg.com/media/EMa2hsCWoAAlSLx?format=jpg&name=4096x4096";
images[1] =
  "https://pbs.twimg.com/profile_banners/3188931447/1581280489/1500x500";
images[2] =
  "https://pbs.twimg.com/media/DeAH2vlVwAA_Cq4?format=jpg&name=large";
images[3] =
  "https://pbs.twimg.com/media/ECXR6bHVAAA7pr6?format=png&name=small";
images[4] =
  "https://pbs.twimg.com/media/DcBwB8WVMAA8eRu?format=jpg&name=medium";
images[5] = 
  "https://pbs.twimg.com/media/DY14dV_VQAA-hR1?format=jpg&name=medium";
images[6] =
  "https://pbs.twimg.com/media/DVlKwCTUMAAqjoT?format=jpg&name=medium";

//function to change the image
function changeImg() {
  if (i < images.length - 1) {
    i++; //incrementing by one
  } else {
    i = 0; //resetting to 0 when done with the array
  }
  document.slide.src = images[i]; //getting name attribute from html setting to first image
  setTimeout("changeImg()", time);
}

window.onload = changeImg;



