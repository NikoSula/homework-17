//დავალება #1


const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    button.remove();
})



//დავალება #2

const body = document.querySelector("body");
const img = document.createElement('img');
img.src = "https://fastly.picsum.photos/id/405/1400/800.jpg?hmac=4CRI7OpfDWtP4EydVd4Z-1NKSGhBmpZq8OaEXVu3be8";

body.appendChild(img);



//დავალება #4


const characters = [
	{
		first_name: "Harry",
		last_name: "Potter",
		house: "Gryffindor",
		image: "http://hp-api.herokuapp.com/images/harry.jpg",
		actor: "Daniel Radcliffe",
	},
	{
		first_name: "Hermione",
		last_name: "Granger",
		house: "Gryffindor",
		image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
		actor: "Emma Watson",
	},
	{
		first_name: "Ron",
		last_name: "Weasley",
		house: "Gryffindor",
		image: "http://hp-api.herokuapp.com/images/ron.jpg",
		actor: "Rupert Grint",
	},
	{
		first_name: "Draco",
		last_name: "Malfoy",
		house: "Slytherin",
		image: "http://hp-api.herokuapp.com/images/draco.jpg",
		actor: "Tom Felton",
	},
];


const charDiv = document.querySelector(".characters-list");

function charactersCards(){
    const info = characters.map((el) => {
        return `<div>
            <title>${el.first_name} ${el.last_name}</title>
            <span>house: ${el.house}</span>
            <img>${el.image}</img>
        </div>`
    });

    console.log(info.join(""));
    charDiv.innerHTML = info.join("");
}

charactersCards();

 //მიერორებს კონსოლში და ვერ გავიგე რატო არ მიჩვენებს Html-ში დაგენერირებულ ელემენტებს.