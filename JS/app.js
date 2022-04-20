const dropDownUstensiles = document.querySelector("#dropdown-ustensils");
const sectionRecipes = document.querySelector("#display-menu");
const dropDownAppareils = document.querySelector("#dropdown-appareils");
const dropDownIngredients = document.querySelector("#dropdown-ingredients");
const selectorContain = document.querySelector(".selector-contain");
const searchBar = document.querySelector("#searchbar");

let arrRecipes = [];

function allRecipes() {
  recipes.forEach((recipe) => {
    arrRecipes.push(recipe);
    getRecipes(recipe);
  });

  //console.log(arrRecipes);
}

//Search bar Part
searchBar.addEventListener("change", () => {
  const targetValue = searchBar.value.toLowerCase();
  console.log(targetValue);
  console.log(targetValue.length);

  // only executes when there is more than 3 characters in fromt the search bar
  if (targetValue.length >= 3) {
    //Get the display main content

    sectionRecipes.innerHTML = "";

    //filter the first 3 characters

    recipes.filter((recipe) => {
      if (
        recipe.name.includes(targetValue) ||
        recipe.description.includes(targetValue) ||
        recipe.ingredients.some((n) => n.ingredient.includes(targetValue)) ||
        recipe.ustensils.some((b) => b.includes(targetValue)) ||
        recipe.appliance.includes(targetValue)
      ) {
        getRecipes(recipe);
      }
    });
  }
});

//declaring Arrays

let ingredientArr = [];
let applianceArr = [];
let ustensilestArr = [];
//declaring New Arrays
let ingredientArrNew = [];
let applianceArrNew = [];
let ustensilesArrNew = [];

//// Putting the droplist

// Dropdown for the appliance

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
//function for the tags to hide
function hideTag() {
  const hideSelector = document.querySelectorAll(".close-selector");
  hideSelector.forEach((chain) => {
    chain.addEventListener("click", () => {
      chain.parentElement.remove();
    });
  });
}
//Getting the duplicate
function newRecipesList() {
  ingredientArrNew = [...new Set(ingredientArr)];
  applianceArrNew = [...new Set(applianceArr)];
  ustensilesArrNew = [...new Set(ustensilestArr)];

  // console.log(ingredientArr);
  // console.log(ingredientArrNew);
  // console.log(ingredientArr);

  applianceArrNew.forEach((ne) => {
    const chainA = document.createElement("a");
    chainA.classList.add("link-nav", "appareils");
    let string = ne[0].toUpperCase() + ne.slice(1);
    chainA.innerHTML = `${string}`;
    dropDownAppareils.append(chainA);
  });

  ustensilesArrNew.forEach((ne) => {
    const chainU = document.createElement("a");
    chainU.classList.add("link-nav", "ustensiles");
    let string = ne[0].toUpperCase() + ne.slice(1);
    chainU.innerHTML = `${string}`;
    dropDownUstensiles.append(chainU);
  });

  ingredientArrNew.forEach((ne) => {
    const chainI = document.createElement("a");
    chainI.classList.add("link-nav", "ingredients");
    let string = ne[0].toUpperCase() + ne.slice(1);
    chainI.innerHTML = `${string}`;
    dropDownIngredients.append(chainI);
  });

  //Declaring the Selector for Dom
  const chainNavIngredient = document.querySelectorAll(
    "a.link-nav.ingredients"
  );
  const chainNavUstensiles = document.querySelectorAll("a.link-nav.ustensiles");
  const chainNavAppareils = document.querySelectorAll("a.link-nav.appareils");

  chainNavAppareils.forEach((chain) => {
    chain.addEventListener("click", () => {
      const tagApp = document.createElement("div");
      tagApp.classList.add("add-selector");
      tagApp.classList.add("appareils");
      tagApp.innerHTML = `${chain.innerHTML}<svg class="close-selector width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
      fill="white" />
    </svg>`;
      selectorContain.appendChild(tagApp);
      hideTag();
    });
  });

  chainNavIngredient.forEach((chain) => {
    chain.addEventListener("click", () => {
      const tagIng = document.createElement("div");
      tagIng.classList.add("add-selector");
      tagIng.classList.add("ingredient");
      tagIng.innerHTML = `${chain.innerHTML}<svg class="close-selector width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
      fill="white" />
    </svg>`;
      selectorContain.appendChild(tagIng);
      hideTag();
    });
  });
  chainNavUstensiles.forEach((chain) => {
    chain.addEventListener("click", () => {
      const tagUst = document.createElement("div");
      tagUst.classList.add("add-selector");
      tagUst.classList.add("ustensiles");
      tagUst.innerHTML = `${chain.innerHTML}<svg class="close-selector width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
      fill="white" />
    </svg>`;
      selectorContain.appendChild(tagUst);
      hideTag();
    });
  });
}

//All my function exacuting
allRecipes();
firstArr();
newRecipesList();
hideTag();
