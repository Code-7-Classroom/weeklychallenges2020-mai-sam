const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})


// slideshow
var i = 0;
var images = [];
var time = 3000;

//img list 
images[0] = "https://pbs.twimg.com/profile_banners/3188931447/1581280489/1500x500";
images[1] = "https://pbs.twimg.com/media/EUF6IvJUUAY2MFY?format=jpg&name=large";
images[2] = "https://pbs.twimg.com/media/ETXbv6cX0AAb6JP?format=jpg&name=large";
images[3] = "https://pbs.twimg.com/media/EMa2hr_WkAIRP3g?format=jpg&name=4096x4096";
images[4] = "https://pbs.twimg.com/media/EG8_OAjU4AAnRrG?format=jpg&name=large";


function changeImg() {
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}


window.onload = changeImg;