

 let dropIngrBtn = document.getElementById("ingredients-down");
 let dropAppBtn = document.getElementById("appareil-down");
 let dropUstBtn = document.getElementById("ustensiles-down");
 
 let dropIngrBtnClos = document.getElementById("ingredients-up");
 let dropAppBtnClos = document.getElementById("appareil-up");
 let dropUstBtnClos = document.getElementById("ustensiles-up");
 
 
 let searchEvery = document.querySelector(".section");
 let main1 = document.querySelector(".recipes");
 
 /** Opens dropDown list 
  */
 dropIngrBtn.addEventListener("click", openDropIngr);
 dropAppBtn.addEventListener("click", openDropApp)
 dropUstBtn.addEventListener("click", openDropUst);
 
 /** closes the dropDown
  */
 dropIngrBtnClos.addEventListener("click", closeAll); 
 dropAppBtnClos.addEventListener("click", closeAll);
 dropUstBtnClos.addEventListener("click", closeAll);
 
 main1.addEventListener("click", closeAll); 
 searchEvery.addEventListener("click", closeAll); 
 
 
 /** Function part 
  */
 
 //Function to close all 
 function closeAll() {
   document.getElementById("drop-ing_open").style.display = "none";
   document.getElementById("drop-app_open").style.display = "none";
   document.getElementById("drop-ust_open").style.display = "none";
 }
 
 //Function to select all 
 function openDropIngr() {
   document.getElementById("drop-ing_open").style.display = "flex";
   document.getElementById("drop-app_open").style.display = "none";
   document.getElementById("drop-ust_open").style.display = "none";
 }
 
 function openDropApp() {
   document.getElementById("drop-app_open").style.display = "flex";
   document.getElementById("drop-ing_open").style.display = "none";
   document.getElementById("drop-ust_open").style.display = "none";
 }
 
 function openDropUst() {
   document.getElementById("drop-ust_open").style.display = "flex";
   document.getElementById("drop-ing_open").style.display = "none";
   document.getElementById("drop-app_open").style.display = "none";
 }
 













































// function myfunction(){
//   document.querySelector(".box-ingredient").classList.toggle("show"); 
// }
// function filterFunction() {
//   var input, filter, ul, li, a, i;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   div = document.getElementById("myDropdown");
//   a = div.getElementsByTagName("a");
//   for (i = 0; i < a.length; i++) {
//     txtValue = a[i].textContent || a[i].innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       a[i].style.display = "";
//     } else {
//       a[i].style.display = "none";
//     }
//   }
// }







// const show = (type) => {
//   const box = document.querySelector(`.box-${type}`);
//   const boxTextP = document.querySelector(`.box-${type}text`);
//   //  const searchBar = document.getElementById(`${type}`);
//   const searchBarLabel = document.querySelector(`.box-${type}-searchtext_label`);
//   const arrow = document.querySelector(`.box-${type}-ingredient_searchtext_arrowdown`);
//   const list = document.querySelector(`.box-${type}-text_list`);

//   box.style.width = "667px";
//   box.style.height = "397px";
//   box.style.alignItems = "start";
//    boxTextP.style.marginTop = "23px";
//    searchBar.style.display = "block";
//    list.style.display = "flex";
//   searchBarLabel.style.display = "none";
//    arrow.style.transform = "rotate(180deg)";
// };

// const hide = (type) => {
//   const box = document.querySelector(`.box-${type}`);
//   const boxTextP = document.querySelector(`.box-${type}text`);
//   //  const searchBar = document.getElementById(`${type}`);
//   const searchBarLabel = document.querySelector(`.box-${type}-searchtext_label`);
//   const arrow = document.querySelector(`.box-${type}-ingredient_searchtext_arrowdown`);
//   const list = document.querySelector(`.box-${type}-text_list`);
  
//   box.style.width = "170px";
//   box.style.height = "69px";
//   box.style.alignItems = "center";
//   boxTextP.style.marginTop = "0px";
//   searchBar.style.display = "none";
//   list.style.display = "none";
//   searchBarLabel.style.display = "block";
//   arrow.style.transform = "rotate(360deg)";
// };

//  const box = [
//    document.querySelector(".box-ingredient"),
//    document.querySelector(".box-appareil"),
//    document.querySelector(".box-ustensils"),
//  ];

//  box.forEach((boxes) => {
//    boxes.addEventListener("click", (e) => {
//       e.stopPropagation();
//      if (boxes.className === "box-ingredient") {
//        show("ingredient");
//      }
//      if (boxes.className === "box-appareil") {
//        show("appareil");
//      }
//      if (boxes.className === "box-ustensils") {
//        show("ustensils");
//      }
//      const handleClosure = (e) => {
//        if (!boxes.contains(e.target)) {
//          hide("ingredient");
//          hide("appareil");
//          hide("ustensils");
//        }
//      };
//      window.addEventListener("click", (e) => {
//        handleClosure(e);
//      });
//    });
//  });




















// const show = (type) => {
//   const box = document.querySelector(".box-appareil");
//   const boxTextP = document.querySelector(".box-appareil-text");
//   const searchBarLabel = document.querySelector(".box-appareil_searchtext");
//   // const searchBar = document.getElementById(`${type}`);
//   const arrow = document.querySelector(".box-appareil_searchtext_arrowdown");
//   const list = document.querySelector(".box-appareil_list");

//   box.style.width = "667px";
//   box.style.height = "397px";
//   box.style.alignItems = "start";
//   boxTextP.style.marginTop = "23px";
//   // searchBar.style.display = "block";
//   list.style.display = "flex";
//   searchBarLabel.style.display = "none";
//   arrow.style.transform = "rotate(180deg)";
// };

// const hide = (type) => {
//   const box = document.querySelector(".box-appareil");
//   const boxTextP = document.querySelector(".box-appareil-text");
//   const searchBarLabel = document.querySelector(".box-appareil_searchtext");
//   // const searchBar = document.getElementById(`${type}`);
//   const arrow = document.querySelector(".box-appareil_searchtext_arrowdown");
//   const list = document.querySelector(".box-appareil_list");
  
//   box.style.width = "170px";
//   box.style.height = "69px";
//   box.style.alignItems = "center";
//   boxTextP.style.marginTop = "0px";
//   // searchBar.style.display = "none";
//   list.style.display = "none";
//   searchBarLabel.style.display = "block";
//   arrow.style.transform = "rotate(360deg)";
// };

// const box = [
//   document.querySelector(".box-ingredient"),
//   document.querySelector(".box-appareil"),
//   document.querySelector(".box-ustensils"),
// ];

//  box.forEach((boxes) => {
//    boxes.addEventListener("click", (e) => {
//      e.stopPropagation();
//      if (boxes.className === "box-ingredient") {
//        show("ingredient");
//      }
//      if (boxes.className === "box-appareil") {

//       show("appareil");
//      }
// if (boxes.className === "box-ustensils") {
//        show("ustensils");
//      }
//      const handleClosure = (event) => {
//        if (!boxes.contains(event.target)) {
//          hide("ingredient");
//          hide("appareil");
//          hide("ustensils");
//        }
//      };
//      window.addEventListener("click", (event) => {

//       handleClosure(event);
//      });
//    });
//    });































// const ingredientBox = document.querySelector(".box-ingredient");
// const ingredientboxTextP = document.querySelector(
//   ".box-ingredient-text"
// );
// const ingredientSearchBar = document.getElementById("ingredient");
// const ingredientSearchBarLabel = document.querySelector(
//   ".box-ingredient_searchtext"
// );
// const ingredientArrow = document.querySelector(
//   ".box-ingredient_searchtext_arrowdown"
// );

// const ingredientList = document.querySelector(
//   ".box-ingredient-text_list"
// );

// ingredientSearchBarLabel.addEventListener("click", () => {
//   ingredientBox.style.width = "667px";
//   ingredientBox.style.height = "397px";
//   ingredientBox.style.alignItems = "start";
//   ingredientComboBox.style.marginTop = "23px";
//   ingredientSearchBar.style.display = "block";
//   ingredientList.style.display = "flex";
//   ingredientSearchBarLabel.style.display = "none";
//   ingredientArrow.style.transform = "rotate(180deg)";
// });
