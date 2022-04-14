function getRecipes(recipe) {
  //   recipes.forEach((recipe) => {
  const sectionPartRecipes = document.querySelector("#display-menu");
  const div = document.createElement("div");

  const ulIngredientlist = document.createElement("ul");
  ulIngredientlist.classList.add("list_ingredient");

  const ingredients = recipe.ingredients;

  ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="ingredient-menu">${
      ingredient.ingredient
    }</span>: ${ingredient.quantity || ""} ${ingredient.unit || ""}`;
    ulIngredientlist.appendChild(li);
  });

  div.setAttribute("class", "card");

  div.innerHTML = `<div class="img-carte"></div>
            <div class="script-carte">
            <div class="header-carte">
            <h2>${recipe.name}</h2>
            <p class="time-recette"><svg id="ustensiles-up" id="ustensiles-down"  width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
                d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z"
                fill="black" />
        </svg> ${recipe.time} min</p>
            </div>
            <div class="body-carte">
            ${ulIngredientlist.outerHTML}
            <p class="etape-recette">
            ${recipe.description}
      </div>
        </div>`;
  sectionPartRecipes.appendChild(div);
  //   });
}
// getRecipes();
