


let display = document.getElementById("display");
let todolist = document.getElementById("tdList");// variable that calls form
let quantity = document.getElementById("quantity");
var thelbllist = []
var children = todolist.children.length-1







function addlist(){

var inpt = document.createElement("input");
    var lbl = document.createElement("label");
    var div = document.createElement("div");
    var spn = document.createElement("span");
    
//Variables in creating the elements
    
    if(display.value === ''){
        alert("You need to put something");
    }

//increases the quantity of the list
    children+=1;
     

//labeling the types and IDs
    todolist.setAttribute("class", "list-group list-group-flush")


    div.setAttribute("id", "item" + children);
    div.setAttribute("class", "list-group-item list-group-item-action active");
    //checkbox
    inpt.setAttribute("name", "input");
    inpt.setAttribute("type", "checkbox");
    inpt.setAttribute("id", "chkbx"+children);
    inpt.setAttribute("value", children);
    inpt.setAttribute("class", "form-check-input");
    //label
    lbl.setAttribute("value", children);
    lbl.setAttribute("for", "chkbx"+children);


    spn.innerHTML = "\u00d7";
    spn.setAttribute("OnClick", "clickme(this)")
    spn.setAttribute("class","btn btn-danger")
    
    

//puting the checkbox and label inside the div
    div.append(inpt, lbl, spn);

//displaying the div
    todolist.appendChild(div);
    
//making the list from the text box
    lbl.innerHTML = display.value;
    thelbllist.push(display.value);
    
//empty the textbox
    display.value = "";

//display number of children
    quantity.innerHTML = children;
    



   
    
  
}







//records all checked items
document.querySelector("[name=thelist]").addEventListener("click", 
          e => {
            let tgt = e.target;
            if (tgt.name==="input") {
              let checked = [...e.currentTarget.querySelectorAll(`[name=${tgt.name}]:checked`)];
              //display all checked items
                document.getElementById("text1").innerHTML = checked.map(tgt => thelbllist[tgt.value]).join("<br> ");
                document.getElementById("text2").innerHTML = "Done Tasks:" + document.querySelectorAll('input[type="checkbox"]:checked').length;
            } 
              
        }
        
)



//Secret button that shows the quantity of checked items and the array
function showconsole(){
console.log(thelbllist);
alert(document.querySelectorAll('input[type="checkbox"]:checked').length);


}


//Remove Button
function clickme(x){
     inputElement = x.parentNode;
     var thatIndex = inputElement.id.substr(4,6) //getting the id of the specific div
    inputElement.remove() //removing the entire div
    delete thelbllist[thatIndex]; //removing the label from the array list
    console.log(thelbllist) //displaying the array in console, for checking
    children -=1;

}

