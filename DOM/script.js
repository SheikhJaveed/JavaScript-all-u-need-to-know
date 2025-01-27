console.log("Hello")
console.log(window)
console.log(document);
console.log(document.head);

/** example 2 */
//check output in console
document.getElementById("changeTextButton").addEventListener("click", function(){
    console.log(this); //when we use function keyword, this refers to the element that triggered the event
    let paragraph = document.getElementById("para");
    console.log(paragraph);
    paragraph.textContent="Text is changed";
    
})

/**run any one at a time */

// document.getElementById("changeTextButton").addEventListener("click", ()=>{
//     console.log(this); //when we use arrow function, this refers to the window object
// })

/** example 2 */
document.getElementById("highlightFirstCity").addEventListener("click",function(){
    let cityList=document.getElementById("citiesList");
    console.log(cityList.firstElementChild.classList.add("highlight"));
})

/** example 3 */
document.getElementById("changeOrder").addEventListener("click",function(){
    let coffeeType=document.getElementById("coffeeType");
    coffeeType.textContent="Espresso";
    coffeeType.style.backgroundColor="green";
    
})

/** example 4 */
document.getElementById("addnewItem").addEventListener("click",function(){
    let newItem=document.createElement("li");
    newItem.textContent="Eggs";
    let shoppingList = document.getElementById("shoppingList");
    shoppingList.appendChild(newItem); // Append the new item to the list
})

/** example 5 */
document.getElementById("removeItem").addEventListener("click",function(){
    let shoppingList = document.getElementById("shoppingList2");
    shoppingList.removeChild(shoppingList.lastElementChild); // Remove the last item from the list
    //or use: shoppingList.lastElementChild.remove();
})

/** example 6 */
document.getElementById("clickmeButton").addEventListener("mouseover",function(){
    alert("Button is clicked");
})

/** example 7 */
document.getElementById("teaList").addEventListener("click",function(event){
    if(event.target && event.target.matches(".teaItem")){
        alert("You selected: "+event.target.textContent);
        
    }
})

/** example 8 */
document.getElementById("feedbackForm").addEventListener("submit",function(event){
    event.preventDefault(); //always use this to prevent the default behaviour of the form
    let feedback=document.getElementById("feedbackInput");
    console.log(feedback);
    let label=document.querySelector("label[for='feedbackInput']"); //select the label element with the for attribute value of feedbackInput
    console.log(label);
    document.getElementById("feedbackDisplay").textContent="Your feedback is "+feedback.value;
    
})

/** example 9 */
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("domStatus").textContent="DOM is fully loaded";

})

/** example 10 */
document.getElementById("toggleButton").addEventListener("click",function(){
    let toggleText=document.getElementById("cssClass");
    toggleText.classList.toggle("highlight"); //toggle -> add class if not present, remove class if present
})