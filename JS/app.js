const dropDownUstensiles = document.querySelector("#dropdown-ustensils");
const sectionRecipes = document.querySelector("#display-menu");
const dropDownAppareils = document.querySelector("#dropdown-appareils");
const dropDownIngredients = document.querySelector("#dropdown-ingredients");
const selectorContain = document.querySelector(".selector-contain");
const searchBar = document.querySelector("#searchbar");
const tagAdder = document.querySelectorAll(".add-selector");
const searchAppareilsSelecter = document.querySelector("#appareils-select");
const searchUstensilesSelecter = document.querySelector("#ustensiles-select");
const searchIngredientSelecter = document.querySelector("#ingredient-select");
// Variabales outside the scope
let arrRecipes = [];
let tagsDropDown = [];

let arrTagSortedList = [];

function allRecipes() {
  sectionRecipes.innerHTML = "";
  dropDownAppareils.innerHTML = "";
  dropDownIngredients.innerHTML = "";
  dropDownUstensiles.innerHTML = "";
  selectorContain.innerHTML = "";
  recipes.forEach((recipe) => {
    arrRecipes.push(recipe);
    getRecipes(recipe);
  });

  //console.log(arrRecipes);
}

//Function Search bar Part//

function searchBarValue(targetValue) {
  //For reseting the Dom droplist
  sectionRecipes.innerHTML = "";
  dropDownAppareils.innerHTML = "";
  dropDownIngredients.innerHTML = "";
  dropDownUstensiles.innerHTML = "";

  selectorContain.innerHTML = "";

  //reseting the main display array
  arrRecipes = [];
  //resetting the  old arrays
  ingredientArr = [];
  applianceArr = [];
  ustensilestArr = [];
  //resetting the New  arrays
  ingredientArrNew = [];
  applianceArrNew = [];
  ustensilesArrNew = [];
  tagsDropDown = [];

  tagAdder.forEach((chain) => {
    chain.remove();
  });

  // only executes when there is more than 3 characters in fromt the search bar
  if (targetValue.length >= 3) {
    //filter the first 3 characters

    recipes.filter((recipe) => {
      if (
        recipe.name.toLowerCase().includes(targetValue) ||
        recipe.description.toLowerCase().includes(targetValue) ||
        recipe.ingredients.some((n) =>
          n.ingredient.toLowerCase().includes(targetValue)
        ) ||
        recipe.ustensils.some((b) => b.toLowerCase().includes(targetValue)) ||
        recipe.appliance.toLowerCase().includes(targetValue)
      ) {
        //pushs new array and exacutes according to input result
        arrRecipes.push(recipe);
        getRecipes(recipe);
        firstArr(recipe);
      }
    });
  }

  //resetting if the search input is NUL//
  else if (targetValue.length <= 2) {
    arrRecipes = [];
    allRecipes();
    firstArr();
  }
  console.log(arrRecipes);
  newRecipesList();
  // console.log(ingredientArr);
  // console.log(ingredientArrNew);
  //console.log(applianceArr);
  // console.log(applianceArrNew);
  //console.log(ustensilestArr);
  // console.log(ustensilesArrNew);
  // });
}

//New function tag to sort//
function sortTagList(arr, tag) {
  sectionRecipes.innerHTML = "";
  arrTagSortedList = [];
  if (tagsDropDown.length >= 1) {
    arr.filter((recipe) => {
      if (
        recipe.name.toLowerCase().includes(tag) ||
        recipe.description.toLowerCase().includes(tag) ||
        recipe.ingredients.some((i) =>
          i.ingredient.toLowerCase().includes(tag)
        ) ||
        recipe.ustensils.some((u) => u.toLowerCase().includes(tag)) ||
        recipe.appliance.toLowerCase().includes(tag)
      ) {
        arrTagSortedList.push(recipe);
      }
    });

    arrTagSortedList = [...new Set(arrTagSortedList)];
    arrTagSortedList.forEach((recipe) => {
      getRecipes(recipe);
    });
  } else if (tagsDropDown.length === 0) {
    arrRecipes.forEach((recipe) => {
      getRecipes(recipe);
    });
  }
  return arrTagSortedList;
}

// console.log(arrTagSortedList);

// function to close recipes//

searchBar.addEventListener("keyup", () => {
  if (searchBar.value.length >= 1) {
    const targetValue = searchBar.value.toLowerCase();
    searchBarValue(targetValue);
  } else if (searchBar.value.length === 0) {
    allRecipes();
    firstArr();
    newRecipesList();
  }
});

searchIngredientSelecter.addEventListener("keyup", () => {
  if (searchIngredientSelecter.value.length > 0) {
    console.log(searchIngredientSelecter.value.toLowerCase());
  }
});
searchUstensilesSelecter.addEventListener("keyup", () => {
  if (searchUstensilesSelecter.value.length > 0) {
    console.log(searchUstensilesSelecter.value.toLowerCase());
  }
});
searchAppareilsSelecter.addEventListener("keyup", () => {
  if (AppareilsSelecter.value.length > 0) {
    console.log(AppareilsSelecter.value.toLowerCase());
  }
});

//Declaring Arrays

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
      applianceArr.push(recipe.appliance.toLowerCase());
    }

    recipe.ustensils.forEach((ustensil) => {
      ustensilestArr.push(ustensil.toLowerCase());
    });

    recipe.ingredients.forEach((ingredient) => {
      ingredientArr.push(ingredient.ingredient.toLowerCase());
    });
  });
  ingredientArrNew = [...new Set(ingredientArr)];
  applianceArrNew = [...new Set(applianceArr)];
  ustensilesArrNew = [...new Set(ustensilestArr)];
}

//function for the tags to hide//

function hideTag(hideTag, tag) {
  hideTag.addEventListener("click", (chain) => {
    const closeTag = chain.path[2].textContent.toLowerCase();
    const cathTag = chain.path[2].className.toLowerCase();
    tagsDropDown = tagsDropDown.filter((tag) => tag != closeTag);

    if (cathTag.includes("ingredient")) {
      ingredientArrNew.push(closeTag.toLowerCase());
    }

    if (cathTag.includes("appareils")) {
      applianceArrNew.push(closeTag.toLowerCase());
    }

    if (cathTag.includes("ustensiles")) {
      ustensilesArrNew.push(closeTag.toLowerCase());
    }
    tag.remove();
    dropDownAppareils.innerHTML = "";
    dropDownIngredients.innerHTML = "";
    dropDownUstensiles.innerHTML = "";
    newRecipesList();

    if (tagsDropDown.length >= 1) {
      let listedArr = arrRecipes;
      tagsDropDown.forEach((tag) => {
        listedArr = sortTagList(listedArr, tag);
      });
    } else if (tagsDropDown.length === 0) {
      arrRecipes.forEach((recipe) => {
        getRecipes(recipe);
      });
    }
  });
}
//Getting the duplicate
function newRecipesList() {
  //sorted by Alphabetical
  applianceArrNew = applianceArrNew.sort();
  ustensilesArrNew = ustensilesArrNew.sort();
  ingredientArrNew = ingredientArrNew.sort();

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
  const allChainNav = document.querySelectorAll("a.link-nav");
  const chainNavUstensiles = document.querySelectorAll("a.link-nav.ustensiles");
  const chainNavAppareils = document.querySelectorAll("a.link-nav.appareils");

  chainNavAppareils.forEach((chain) => {
    chain.addEventListener("click", () => {
      const tagApp = document.createElement("div");
      const exPart = document.createElement("div");
      const crossPart = document.createElement("i");

      tagApp.classList.add("add-selector");
      tagApp.classList.add("appareils");
      exPart.classList.add("close-selector");
      crossPart.classList.add("bi");
      crossPart.classList.add("bi-x-circle");

      tagApp.innerHTML = `${chain.innerHTML}`;

      tagApp.appendChild(exPart);
      exPart.appendChild(crossPart);
      selectorContain.appendChild(tagApp);

      tagsDropDown.push(chain.innerHTML.toLowerCase());
      applianceArrNew = applianceArrNew.filter(
        (tagApp) => tagApp != chain.innerHTML.toLowerCase()
      );

      chain.remove();
      hideTag(crossPart, tagApp);
    });
  });

  chainNavIngredient.forEach((chain) => {
    chain.addEventListener("click", () => {
      const tagIng = document.createElement("div");
      const exPart = document.createElement("div");
      const crossPart = document.createElement("i");

      tagIng.classList.add("add-selector");
      tagIng.classList.add("ingredient");
      exPart.classList.add("close-selector");
      crossPart.classList.add("bi");
      crossPart.classList.add("bi-x-circle");

      tagIng.innerHTML = `${chain.innerHTML}`;

      tagIng.appendChild(exPart);
      exPart.appendChild(crossPart);
      selectorContain.appendChild(tagIng);

      tagsDropDown.push(chain.innerHTML.toLowerCase());
      ingredientArrNew = ingredientArrNew.filter(
        (tagIng) => tagIng != chain.innerHTML.toLowerCase()
      );
      chain.remove();
      hideTag(crossPart, tagIng);
    });
  });

  chainNavUstensiles.forEach((chain) => {
    chain.addEventListener("click", () => {
      const tagUst = document.createElement("div");
      const exPart = document.createElement("div");
      const closeCross = document.createElement("i");

      tagUst.classList.add("add-selector");
      tagUst.classList.add("ustensiles");
      exPart.classList.add("close-selector");
      closeCross.classList.add("bi");
      closeCross.classList.add("bi-x-circle");

      tagUst.innerHTML = `${chain.innerHTML}`;
      tagUst.appendChild(exPart);
      exPart.appendChild(closeCross);
      selectorContain.appendChild(tagUst);

      tagsDropDown.push(chain.innerHTML.toLowerCase());
      ustensilesArrNew = ustensilesArrNew.filter(
        (tagUst) => tagUst != chain.innerHTML.toLowerCase()
      );
      chain.remove();
      hideTag(closeCross, tagUst);
    });
  });

  //to loop through the dropdown
  allChainNav.forEach((chain) => {
    chain.addEventListener("click", () => {
      let listedArr = arrRecipes;
      tagsDropDown.forEach((chain) => {
        listedArr = sortTagList(listedArr, chain);
      });
      console.log(tagsDropDown);
    });
  });
}
//the listerner for the searchbar //

searchBar.addEventListener("change", () => {
  const targetValue = searchBar.value.toLowerCase();
  searchBarValue(targetValue);
});

//All my function exacuting
allRecipes();
firstArr();
newRecipesList();
// Start the tag button filtering through and picking the selected value
