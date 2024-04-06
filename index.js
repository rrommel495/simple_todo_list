


let display = document.getElementById("display");
let todolist = document.getElementById("tdList");// variable that calls ul
let quantity = document.getElementById("quantity");
var thelbllist = []
var children = todolist.children.length-1




function addlist(){

    
//Variables in creating the elements
    var inpt = document.createElement("input");
    var lbl = document.createElement("label");
    var div = document.createElement("div");
    
    

//increases the quantity of the list
    children+=1;
     

//labeling the types and IDs
    div.setAttribute("id", "item" + children);
    //checkbox
    inpt.setAttribute("name", "input");
    inpt.setAttribute("type", "checkbox");
    inpt.setAttribute("id", "chkbx"+children);
    inpt.setAttribute("value", children);
    //label
    lbl.setAttribute('onclick', 'myFunction('+children+')')
    lbl.setAttribute("value", children);
    lbl.setAttribute("for", "chkbx"+children);
    
    

//puting the checkbox and label inside the div
    div.append(inpt, lbl);

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

function removelist(){
    
    
    
    todolist.removeChild(todolist.lastChild);
    thelbllist.pop();
    children -=1;
            
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




function showconsole(){
console.log(thelbllist);
alert(document.querySelectorAll('input[type="checkbox"]:checked').length);


}

function myFunction(x){
    document.querySelector("[id=chkbx"+x+"]").value(checked)

    }
