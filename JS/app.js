const sectionRecipes = document.querySelector("#display-menu");
const dropDownAppareils = document.querySelector("#dropdown-appareils");
const dropDownUstensiles = document.querySelector("#dropdown-ustensils");
const dropDownIngredients = document.querySelector("#dropdown-ingredients");
const searchBar = document.getElementById("searchbar");

let arrRecipes = [];

function allRecipes() {
  recipes.forEach((recipe) => {
    arrRecipes.push(recipe);
    getRecipes(recipe);
  });
  // console.log(arrRecipes);
}
allRecipes();

//declare Arrys

let ingredientArr = [];
let applianceArr = [];
let ustensilestArr = [];

let ingredientArrNew = [];
let applianceArrNew = [];
let ustensilesArrNew = [];

//// Putting the droplist

// dropdown for the appliance

function firstArr() {
  arrRecipes.forEach((recipe) => {
    {
      applianceArr.push(recipe.appliance);
    }

    recipe.ustensils.forEach((ustensil) => {
      ustensilestArr.push(ustensil);
    });

    recipe.ingredients.forEach((ingredient) => {
      ingredientArr.push(ingredient.ingredient);
    });
  });
}

function newRecipesList() {
  ingredientArrNew = [...new Set(ingredientArr)];
  applianceArrNew = [...new Set(applianceArr)];
  ustensilesArrNew = [...new Set(ustensilestArr)];

  console.log(ingredientArr);
  console.log(ingredientArrNew);
  // console.log(ingredientArr);

  applianceArrNew.forEach((ne) => {
    const chainA = document.createElement("a");
    chainA.innerHTML = `<a href='#'>${ne}</a>`;
    dropDownAppareils.append(chainA);
  });

  ustensilesArrNew.forEach((ne) => {
    const chainU = document.createElement("a");
    chainU.innerHTML = `<a href="#">${ne}</a>`;
    dropDownUstensiles.append(chainU);
  });

  ingredientArrNew.forEach((ne) => {
    const chainI = document.createElement("a");
    chainI.innerHTML = `<a href='#'>${ne}</a>`;
    dropDownIngredients.append(chainI);
  });
}
firstArr();
newRecipesList();
