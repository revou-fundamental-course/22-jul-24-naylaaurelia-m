var slideIndex = 1;
showDivs(slideIndex);

   function plusDivs(n) {
   showDivs((slideIndex += n));
 }

        function showDivs(n) {
          var i;
          var imgList = document.getElementsByClassName("slide");
          if (n > imgList.length) slideIndex = 1;
          else if (n < 1) slideIndex = imgList.length;

          for (i = 0; i < imgList.length; i++) {
            imgList[i].style.display = "none";
          }

          imgList[slideIndex - 1].style.display = "block";
        }

        setInterval(() => {
          plusDivs(1);
        }, 3000);

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interest = document.getElementById('interest').value;

    if (!name || !email || !interest) {
        alert('Please fill in all fields');
        return;
    }

    alert('Form submitted successfully!');
    // You can add more form handling logic here
});
