let colors = [
	"#E0AE7F",
	"#19C1E5",
	"#3ACB92",
	"#C98EA2",
	"#BA75CD",
	"#19C1E5",
	"#3ACB92",
	"#C98EA2",
	"#BA75CD",
	"#E0AE7F",
];

let techs = document.querySelectorAll(".page1 .wrapper .tech");
let i = 0;
techs.forEach((ele) => {
	ele.style.backgroundColor = `${colors[i]}`;
	i++;
});

// let ContentBoxes = document.querySelectorAll(".box");

// ContentBoxes.forEach((box) => {
// 	box.addEventListener("mouseenter", (e) => {
// 		e.target.querySelector(".content").innerHTML += `<div class="icons">
//                 <i class="fa-regular fa-heart"></i>
//                 <i class="fa-solid fa-arrow-up-from-bracket"></i>
//             </div>`;
// 		box.style.transform = scale(1.05);
// 		let heart = e.target.querySelector(".content .fa-heart");
// 		heart.addEventListener("onclick", () => {
// 			console.log(heart);
// 		});
// 	});
// });

// ContentBoxes.forEach((box) => {
// 	box.addEventListener("mouseleave", (e) => {
// 		e.target.querySelector(".content").innerHTML = (
// 			<div class="text">Lorem ipsum dolor sit amet consectetur.</div>
// 		);
// 		box.style.transform = scale(1);
// 	});
// });

// customize starts here

// let customize = document.querySelector(".customize");
// let customizeBar = document.querySelector(".customize-bar");
// customize.addEventListener("click", () => {
// 	customize.classList.toggle("customize-bar-on");
// });

// // customize ends here

// // navigation through pages

// let body = document.querySelector("body");
// let main = document.querySelector(".main");
// let explorePage = document.querySelector(".explore-page");
// let exploreMore = document.querySelector(".explore-more");
// let logo = document.querySelector(".logo-text .logo");
// let exploreBtn = document.querySelector(".explore");

// logo.addEventListener("click", () => {
// 	body.classList.remove("explore-page-on");
// 	body.classList.toggle("main-on");
// });

// exploreMore.addEventListener("click", () => {
// 	body.classList.toggle("main-close");
// 	body.classList.toggle("explore-page-on");
// });

// exploreBtn.addEventListener("click", () => {
// 	body.classList.toggle("main-close");
// 	body.classList.toggle("explore-page-on");
// });

// // navigation through pages
