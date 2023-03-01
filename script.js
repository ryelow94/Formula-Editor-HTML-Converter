

var formDiv = document.getElementById("form-div")
var form = document.getElementById("form");
formDiv.addEventListener("submit", handleSubmit);
var clearedForm = document.getElementById("clearForm")
function clearForm(){
    clearedForm.style="display:none"
    form.reset()
}
clearedForm.addEventListener("click", clearForm)
function handleSubmit(event){
event.preventDefault();
if(event.target[0].value===""){
    alert("Text area cannot be empty")
    return;
}
clearedForm.style="display:visible"
var copyToClipBoard = document.createElement("button");
  form.after(copyToClipBoard);
  copyToClipBoard.textContent = "Show C# and Copy HTML to Clipboard";
  copyToClipBoard.setAttribute("id", "copy");
  var string = (event.target[1].value.replace(/"/g, "'"))
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
    var removeClip= document.createElement("button");

    removeClip.setAttribute("id", "copy")
    removeClip.textContent="Clear"
    form.after(removeClip)
    copyToClipBoard.remove()
    removeClip.onclick=()=>{
        cSharped.style="display:none"
        removeClip.remove()
    }
  };
}
