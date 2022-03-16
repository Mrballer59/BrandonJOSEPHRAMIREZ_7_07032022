function recipe(articles, premier, template, parentNode, templateIng) {
	let first = true;
	let clone = template;
	let cloneIng = templateIng;

	if (!premier) {
		clone = template.cloneNode(true);
		parentNode.appendChild(clone);
	}

	Array.from(document.querySelectorAll(".title")).pop().textContent = articles.name;
	Array.from(document.querySelectorAll(".timer")).pop().textContent = articles.time;
	Array.from(document.querySelectorAll(".display-recipes_second_part_cooking")).pop().textContent = articles.description;

	let parentIng = Array.from(document.querySelectorAll(".display-recipes_second_part_ingredient")).pop();

	for (ing of articles.ingredients) {
		if (!first) {
			cloneIng = templateIng.cloneNode(true);
			parentIng.appendChild(cloneIng);
		}
		Array.from(document.querySelectorAll(".ingreed1")).pop().textContent = ing.ingredient;
		Array.from(document.querySelectorAll(".quantity")).pop().textContent = ing.quantity;
		Array.from(document.querySelectorAll(".unit")).pop().textContent = ing.unit;
		first = false;
	}
}

async function main() {
	let premier = true;
	let template = document.querySelector(".display-recipes_card1").cloneNode(true);
	let parentNode = document.querySelector(".display-recipes");
	let templateIng = document.querySelector(".ingList").cloneNode(true);
	for (article of recipes) {
		recipe(article, premier, template, parentNode, templateIng);
		premier = false;
	}
}

main();