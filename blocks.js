var form2 = document.getElementById("form2")
var select = document.getElementById("blocks");

var table = `<table cellpadding="5" cellspacing="28" style="border:solid black 1px;border-radius:1%;margin-left:25%;padding-bottom:0%;width:50%;">
<thead>
    <tr style="background-color:#D8D8D8;">
        <th style=" padding: 10px; width: 100%; text-align: left;"><span style="padding-left:10px">UnSafe Harbor</span></th>
    </tr>
</thead>
<tbody>
    <tr style="background-color:#D8D8D8;">
        <td style=" text-align: left; padding-left: 20px; background-color: rgb(255, 255, 255);">
        <p style="margin-top:3%; margin-bottom:0px;font-weight: 700;">Does the incident fall under the Safe Harbor?*</p>

        <p style=" margin-top:0%; margin-bottom: 3%; line-height:100%; padding-left:10px; padding-top: 0px; font-size: small;">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
        </td>
    </tr>
</tbody>
<tbody>
    <tr>
        <td style=" text-align: left; padding-left: 20px;  background-color: #D8d8d8;">
        <div style="padding-left: 10px; font-weight: 700;"><small><span style="font-size:14px;">No</span></small></div>
        </td>
    </tr>
</tbody>
</table>`
var header = `<html>
<head>
	<title></title>
</head>
<body bgcolor="#f5f5f5" leftmargin="0" marginheight="0" marginwidth="0" offset="0" style="padding:70px 0 70px 0;" topmargin="0">
<table align="center" cellpadding="0" cellspacing="0" height="auto" style="background-color:#fdfdfd; border:1px solid #dcdcdc; border-radius:3px !important;" width="600">
	<tbody>
		<tr>
			<td bgcolor="#000" border="0" height="auto" style="padding:36px 48px; display:block; margin: 0px auto;" width="600">
			<h1 style="color:#ffffff; font-family:&quot; Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif; font-size:30px; line-height:150%; font-weight:300; margin:0; text-align:left;">Header</h1>
			</td>
		</tr>
	</tbody>
</table>
</body>
</html>`
var titleAndText = `<div class="container">
<h4>Taking Responsibility</h4>
<p>"Taking responsibility - practicing 100 percent responsibility every day - is about seeing ourselves not as right or wrong, but as an agent, chooser, problem solver, and learner in the complex interrelationships of our lives so that we can better integrate with the people and world around us. When we do this, we enjoy a better and more productive way to live and lead." Christopher Avery, The Responsibility Process</p>
</div>


<div class="container-sm">
<h4>Taking Responsibility</h4>
<p>"Taking responsibility - practicing 100 percent responsibility every day - is about seeing ourselves not as right or wrong, but as an agent, chooser, problem solver, and learner in the complex interrelationships of our lives so that we can better integrate with the people and world around us. When we do this, we enjoy a better and more productive way to live and lead." Christopher Avery, The Responsibility Process</p>
</div>

<div class="container-md">
<h4>Taking Responsibility</h4>
<p>"Taking responsibility - practicing 100 percent responsibility every day - is about seeing ourselves not as right or wrong, but as an agent, chooser, problem solver, and learner in the complex interrelationships of our lives so that we can better integrate with the people and world around us. When we do this, we enjoy a better and more productive way to live and lead." Christopher Avery, The Responsibility Process</p>
</div>

<div class="container-lg">
<h4>Taking Responsibility</h4>
<p>"Taking responsibility - practicing 100 percent responsibility every day - is about seeing ourselves not as right or wrong, but as an agent, chooser, problem solver, and learner in the complex interrelationships of our lives so that we can better integrate with the people and world around us. When we do this, we enjoy a better and more productive way to live and lead." Christopher Avery, The Responsibility Process</p>
</div>

<div class="container-xl">
<h4>Taking Responsibility</h4>
<p>"Taking responsibility - practicing 100 percent responsibility every day - is about seeing ourselves not as right or wrong, but as an agent, chooser, problem solver, and learner in the complex interrelationships of our lives so that we can better integrate with the people and world around us. When we do this, we enjoy a better and more productive way to live and lead." Christopher Avery, The Responsibility Process</p>
</div>

<div class="container-xxl">
<h4>Taking Responsibility</h4>
<p>"Taking responsibility - practicing 100 percent responsibility every day - is about seeing ourselves not as right or wrong, but as an agent, chooser, problem solver, and learner in the complex interrelationships of our lives so that we can better integrate with the people and world around us. When we do this, we enjoy a better and more productive way to live and lead." Christopher Avery, The Responsibility Process</p>
</div>

<div class="container-fluid">
<h4>Taking Responsibility</h4>
<p>"Taking responsibility - practicing 100 percent responsibility every day - is about seeing ourselves not as right or wrong, but as an agent, chooser, problem solver, and learner in the complex interrelationships of our lives so that we can better integrate with the people and world around us. When we do this, we enjoy a better and more productive way to live and lead." Christopher Avery, The Responsibility Process</p>
</div>`
var buttonWithLink = `<html>
<head>
<style>
.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
</head>
<body>
<a href="#" class="button">Link Button</a>
</body>
</html>`
async function copyBlock () {
    console.log(select.value)
    // console.log(buttonWithLink)
    switch(select.value) {
        case "Header":
       await navigator.clipboard.writeText(header); 
       var copiedBlock = document.createElement("p")
       copiedBlock.style = "text-align:center; color:green"
       copiedBlock.textContent = "---Copied Header Block---"
       form2.after(copiedBlock)
       setTimeout(() => {
        copiedBlock.remove()
      }, "5000");
          break;
        case "Table":
       await navigator.clipboard.writeText(table); 
       var copiedBlock = document.createElement("p")
       copiedBlock.style = "text-align:center; color:green"  
       copiedBlock.textContent = "---Copied Table Block---"
       form2.after(copiedBlock)
       setTimeout(() => {
        copiedBlock.remove()
      }, "5000");
          break; 
          case "Text with Title":
       await navigator.clipboard.writeText(titleAndText); 
       var copiedBlock = document.createElement("p")
       copiedBlock.style = "text-align:center; color:green"  
       copiedBlock.textContent = "---Copied Container Block---"
       form2.after(copiedBlock)
       setTimeout(() => {
        copiedBlock.remove()
      }, "5000");
      break; 
      case "Button":
   await navigator.clipboard.writeText(buttonWithLink); 
   var copiedBlock = document.createElement("p")
   copiedBlock.style = "text-align:center; color:green"  
   copiedBlock.textContent = "---Copied Button Block---"
   form2.after(copiedBlock)
   setTimeout(() => {
    copiedBlock.remove()
  }, "5000");
        default:
          
      }
}