console.log("DOM in JavaScript");

//....................................................................................

let titleElement = document.getElementById("title");
console.log(titleElement); // <h1 id="title">Hello World</h1>
// inner HTML
console.log(titleElement.innerHTML);
//change inner HTML
titleElement.innerHTML = "Hello World";
titleElement.style.fontWeight = "bold";
titleElement.style.color = "blue";
titleElement.style.fontSize = "50px";
titleElement.style.textAlign = "center";
console.log(titleElement.innerHTML); // Hello World

//.....................................................................................

let DIVElement = document.getElementsByClassName("DOM in Javascript");
console.log(DIVElement);

DIVElement[0].style.backgroundColor = "red";
DIVElement[0].style.color = "white";

let paragraphElement = document.getElementsByClassName("paragraph");
console.log(paragraphElement);
console.log(paragraphElement[0]); // <p class="paragraph">This is a paragraph1</p>
console.log(paragraphElement[1]); // <p class="paragraph">This is a paragraph2</p>

//.....................................................................................

let tagNameElement = document.getElementsByTagName("p");
console.log(tagNameElement);
console.log(tagNameElement[0]);
console.log(tagNameElement[1]);

tagNameElement[0].innerHTML = "This is a paragraph1_Changed";
console.log(tagNameElement[0].innerHTML); // This is a paragraph1_Changed
console.log(
  (document.getElementsByTagName("p")[0].innerHTML =
    "This is a paragraph1_Changed Without declaring a variable")
); // This is a paragraph1_Changed

tagNameElement[1].innerHTML = "This is a paragraph2_Changed";
console.log(tagNameElement[1].innerHTML); // This is a paragraph2_Changed

//.....................................................................................

//change attribute
console.log((document.getElementById("paragraph1").style.textAlign = "right"));
console.log(
  (document.getElementById("paragraph1").innerHTML =
    "This is a paragraph1_Changed using attribute")
);

console.log((document.getElementById("paragraph2").style.textAlign = "center"));
console.log(
  (document.getElementById("paragraph2").innerHTML =
    "This is a paragraph2_Changed using attribute")
);

//.....................................................................................
//change link

let linkElement = document.getElementById("link");
linkElement.href = "https://www.google.com";
linkElement.innerHTML = "Google";
linkElement.style.color = "black";
