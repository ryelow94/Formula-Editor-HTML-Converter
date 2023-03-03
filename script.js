

var formDiv = document.getElementById("form-div")
var form = document.getElementById("form");
let contents = ""
const fileSelector = document.getElementById('file-selector');
var textArea = document.getElementById("textArea")
var pasteLabel = document.getElementById("pasteLabel")
// var copyCard = document.getElementById("copyCard")
// copyCard.addEventListener(click)

var index = 0; 
var locations = ["---- Click to Copy 1 ----", "---- Click to Copy 2 ----", "---- Click to Copy 3 ----", "---- Click to copy 4 ----", "---- Click to Copy 5 ----", "---- Click to Copy 6 ----", "---- Click to copy 7 ----"]

var slides = document.getElementsByClassName("slides"); 
var nextArrow = document.getElementById("next");

var previousArrow = document.getElementById("previous");

var place = document.getElementById("place");

var dotsContainer = document.getElementById("dotsContainer");

var dotArray = document.getElementsByClassName("dots"); 




createDots(); 
showSlides(index); 

function createDots() {
	for (i=0; i<slides.length; i++) {
	var dot = document.createElement("span");
	dot.className = "dots"; 
	dotsContainer.appendChild(dot); 
	}
}

function showSlides(x) {
	if (x > slides.length-1) {
		index = 0; 
	}
	if (x < 0) {
		index = slides.length-1; 
	}
	for (i=0; i < slides.length; i++) {
		slides[i].style.display = "none"; 
		dotArray[i].className = "dots";  
	}
	
	slides[index].style.display = "block";
	dotArray[index].className += " activeDot"; 
	place.innerHTML = locations[index]; 
}

nextArrow.onclick = function() {
	index += 1; 
	showSlides(index); 
} 

previousArrow.onclick = function() {
	index -= 1; 
	showSlides(index); 
} 

dotArray[0].onclick = showSlides(1); 
function readSingleFile(evt) {
    //Retrieve the first (and only!) File from the FileList object

    var f = evt.target.files[0];

    if (f) {
        var r = new FileReader();
        r.onload = function (e) {
             contents = e.target.result;
            // document.getElementById("ReadResult").innerHTML = contents;
            textArea.style="display:none"
            pasteLabel.style="display:none"
            navigator.clipboard.writeText(contents)
            
        }
        r.readAsText(f);
    } else {
        alert("Failed to load file");
    }
}

document.getElementById('file-selector').addEventListener('change', readSingleFile, false);

formDiv.addEventListener("submit", handleSubmit);


function handleSubmit(event){
event.preventDefault();
if(document.getElementById("copyCsharp")){
  document.getElementById("copyCsharp").style="display:none"
}
if(document.getElementById("cSharped")){
  document.getElementById("cSharped").remove()
}
if(document.getElementById("copy1")){
  document.getElementById("copy1").remove()
}
if(event.target[0].value===""){
    alert("Text area cannot be empty")
    return;
}

var copyToClipBoard = document.createElement("button");
var clearedForm = document.getElementById("clearForm")
clearedForm.style="display:visible"
clearedForm.addEventListener("click", clearForm)
function clearForm(){
    copyToClipBoard.remove()
    clearedForm.style="display:none"
    pasteLabel.style="display:visible"
    // textArea.style="display:visible"
    form.reset()
    
}
  form.after(copyToClipBoard);
  copyToClipBoard.textContent = "Show C# and Copy HTML to Clipboard";
  copyToClipBoard.setAttribute("id", "copy");
  console.log(contents)
  let string = (event.target[2].value.replace(/"/g, "'"))
  if(contents!=""){
    string = contents.replace(/"/g, "'")
  }
    var stringy = string.replace(/(\r\n|\n|\r)/gm, " ")
    var newString = Array.from(stringy)
    let stringArr = []
    for (let i = 0; i < newString.length; i++) {
      const element = newString[i];
      stringArr.push(element)
    }
    var cSharpArray = stringArr.join("").match(/.{0,10}/g) || []
    let cSharpString = ""
    for (let i = 0; i < cSharpArray.length; i++) {
      const element = cSharpArray[i];
      cSharpString += `self += ` + `"${element}` + `"; \n`
    }
  copyToClipBoard.onclick = async () => {
    await navigator.clipboard.writeText(cSharpString);
    
    var cSharped = document.createElement("div")
    cSharped.style=" display: flex;flex-direction: column; margin-top: 5%; margin-left: 5%;margin-right: 5%;justify-content: center;box-shadow: 0 0 20px 0  #3c3737; background-color: white;margin-bottom: 5%;border-radius: 6px;"
    var cSharpedP = document.createElement("p")
    cSharpedP.style="word-break: break-all; text-align: center; font-size: 18px; color:#356F6F; width:100%"
    formDiv.after(cSharped)
    cSharped.appendChild(cSharpedP)

    cSharpedP.innerText = `String self = record.GetValue<String>("${event.target[0].value}");` + `\n` + `self = "";`+ `\n`+ cSharpString + `\n` + `return self;`
    navigator.clipboard.writeText(cSharpedP.innerText);
    localStorage.setItem("savedItem", cSharpString.innerText);
    var removeClip= document.createElement("button");
   ;

    removeClip.setAttribute("id", "copy")
    removeClip.textContent="Clear C# String"
    form.after(removeClip)
    copyToClipBoard.remove()
    removeClip.onclick=()=>{
        cSharped.style="display:none"
        removeClip.remove()
        
    }
  };
}
var j=0;
//Function for live Rendering
// function update(i) {
//     if(i==0){
//     let htmlCode=document.getElementById("htmlCode").value;
//     let text=htmlCode;
//     let iframe=document.getElementById('viewer').contentWindow.document;
//     iframe.open();
//     iframe.write(text);
//     iframe.close();
//     }

//     else if(i==1){

//         let htmlCode=document.getElementById("htmlCode").value;
//         let html=htmlCode.slice(0,htmlCode.length);
//         document.getElementById("htmlCode").value=html;
//         j=1;

//     }}
