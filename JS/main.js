// menu bar
let meun = document.querySelector(".header i");
let nav = document.querySelector(".header .nav");
meun.addEventListener("click", _ => {
  (nav.style.display === "none") ? nav.style.display = "block" : nav.style.display = "none";
});


//Name
const words = ["Khaled Sherif", "Full Stack Developer"];
const h1 = document.querySelector('.home .container h1');
let index = 0; // Character index
let wordIndex = 0; // Word index
let typing = true; // Flag to indicate typing/deleting
function typeLetter() {
  const currentWord = words[wordIndex];
  if (typing) {
    if (index < currentWord.length) {
      h1.innerHTML += currentWord[index];
      index++;
      setTimeout(typeLetter, 100);
    } else {
      typing = false;
      setTimeout(typeLetter, 500); // Pause before deleting
    }
  } else {
    if (index > 0) {
      h1.innerHTML = currentWord.substring(0, index - 1);
      index--;
      setTimeout(typeLetter, 100);
    } else {
      typing = true;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeLetter, 1000); // Pause before typing next word
    }
  }
}
typeLetter();


//download CV
let dBtn = document.getElementById("dBtn");
dBtn.addEventListener("click", _ => {
  let fileD = document.getElementById("fileD");
  const fileUrl = './CV.pdf';
  const fileName = 'CV.pdf'; 

  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  fileD.innerHTML = parseInt(fileD.innerHTML) + 1;
});


//Stats
let projects = document.querySelectorAll("#card");
let proCom = document.getElementById("proCom");
proCom.innerHTML = projects.length


//Contact
let submit = document.querySelector("[type=submit]");
submit.addEventListener("click", _ => {

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

  let link = document.querySelector("[type=submit] > a")
  link.href = `mailto:khalid.sherif220@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  console.log(link.href);
});


//feedback
let icons = document.querySelectorAll(".icon");
let happyClient = document.getElementById("happyClient");

function click(event) {
  const clickedIndex = Array.from(icons).indexOf(event.target);
  icons.forEach((icon, index) => {
    if (index <= clickedIndex) {
      icon.classList.remove('far');
      icon.classList.add('filled');
      icon.classList.add('fas');
    } else {
      icon.classList.remove('filled');
      icon.classList.remove('fas');
      icon.classList.add('far');
    }
  });
  if (clickedIndex >= 2) {
    let happyClientNumber = parseInt(happyClient.innerHTML);
    happyClient.innerHTML = happyClientNumber + 1;
  }
  setTimeout(() => {
    icons.forEach(icon => {
      icon.classList.remove('filled');
      icon.classList.remove('fas');
      icon.classList.add('far');
    })
  }, 2000);
};
icons.forEach(icon => {
  icon.addEventListener('click', click);
});


// Get Year
let year = document.getElementById("year");
let date = new Date;
year.innerHTML = date.getFullYear();

