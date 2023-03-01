let menu = [
	{
		type: "drink",
		name: "Эспрессо",
		price: 9,
	},
	{
		type: "drink",
		name: "Американо",
		price: 11,
	},
	{
		type: "drink",
		name: "Латте",
		price: 14,
	},
	{
		type: "drink",
		name: "Капучино",
		price: 12,
	},
	{
		type: "drink",
		name: "Макьято",
		price: 13,
	},
	{
		type: "drink",
		name: "Мятный шоколад",
		price: 15,
	},
	{
		type: "drink",
		name: "Мокко",
		price: 12,
	},
	{
		type: "drink",
		name: "Белый мокко",
		price: 13,
	},
	{
		type: "food",
		name: "Шоколадный кекс",
		price: 8,
	},
	{
		type: "food",
		name: "Черничный кекс",
		price: 7,
	},
	{
		type: "food",
		name: "Яблочный тарт",
		price: 12,
	},
	{
		type: "food",
		name: "Лимонный тарт",
		price: 10,
	},
	{
		type: "breakfast",
		name: "Омлет",
		price: 9,
	},
	{
		type: "breakfast",
		name: "Сырники",
		price: 11,
	},
	{
		type: "breakfast",
		name: "Картофельная вафля с говядиной",
		price: 16,
	},
	{
		type: "breakfast",
		name: "Крок-Мадам",
		price: 13,
	},
	{
		type: "breakfast",
		name: "Бульон из птицы",
		price: 6,
	},
]

let choice = document.querySelector(".choice");
for (let m of menu) {
	let elem = document.createElement("input");
	elem.type = "checkbox";
	elem.value = m.price;
	elem.classList.add("checkbox");

	let text = document.createElement("label");
	text.textContent = `${m.name} ${m.price}р`;

	let count = document.createElement("input");
	count.type = "text";
	count.value = 0;
	count.classList.add("count");

	let container = document.createElement("div");
	container.append(elem);
	container.append(text);
	container.append(count);

	let section = "";
	if (m.type === "drink") {
		section = document.querySelector(".drink");
	} else if (m.type === "food") {
		section = document.querySelector(".food");
	} else {
		section = document.querySelector(".breakfast");
	}

	section.append(container);
	choice.append(section);
}

let totalPrice = document.querySelector(".totalPrice");
let countOfElem = document.querySelectorAll(".count");
countOfElem.forEach((count) => {
	count.addEventListener("focus", () => {
		count.setAttribute("data-previous", count.value);
	})
	count.addEventListener("change", () => {
		totalPrice.textContent = +totalPrice.textContent
			- count.dataset.previous * count.previousElementSibling.previousElementSibling.value
			+ count.value * count.previousElementSibling.previousElementSibling.value;

		count.previousElementSibling.previousElementSibling.checked = +count.value;
	})
})

let iterators = document.querySelectorAll("[type='checkbox']");
iterators.forEach((it) => {
	it.addEventListener("change", () => {
		if (it.checked) {
			totalPrice.textContent = +totalPrice.textContent + +it.value;

			it.nextElementSibling.nextElementSibling.value = 1;
		} else {
			totalPrice.textContent = +totalPrice.textContent
				- it.nextElementSibling.nextElementSibling.value * it.value;

			it.nextElementSibling.nextElementSibling.value = 0;
		}
	})
});

let userName = document.querySelector("[name='userName");
let userSurame = document.querySelector("[name='userSurname");
let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
	if (userName.value != "" && userSurame.value != "" && totalPrice.textContent != 0) {
		alert(`Заказчик: ${userName.value} ${userSurame.value}\nИтого: ${totalPrice.textContent}р`);
	} else {
		alert("Заказ не оформлен!");
	}
})