


let display = document.getElementById("display");
let todolist = document.getElementById("tdList");// variable that calls ul
let quantity = document.getElementById("quantity");






function addlist(){

    
//Variables in creating the elements
    var inpt = document.createElement("input");
    var lbl = document.createElement("label");
    var div = document.createElement("div");

//variable that displays and increases the quantity of the list
    var children = todolist.children.length+1;

//labeling the types and IDs
    div .setAttribute("type", "input " + children);
    inpt.setAttribute("type", "checkbox");
    inpt.setAttribute("id", "input");

//puting the checkbox and label inside the div
    div.append(inpt, lbl);

//displaying the div
    todolist.append(div);
    
//making the list from the text box
    lbl.innerHTML = display.value;
    
//empty the textbox
    display.value = "";

//display number of children
    quantity.innerHTML = children;
    
  
}

function removelist(){

    
    
    todolist.removeChild(todolist.firstElementChild);
            
          
        }

