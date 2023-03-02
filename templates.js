let templates = [] 
var place = document.getElementById("place");
var form = document.getElementById("form")
var locations = ["Click to Copy 1", "Click to Copy 2", "Click to Copy 3"]
let display = ''
var vendorAssessment = `<table role="presentation" id="emailNotification" style="margin: 0px auto;">
<tbody><tr>
  <td align="center" style="padding: 0">
    <table role="presentation" style="
        border-collapse: collapse;
        border: 1px solid #cccccc;
        border-spacing: 0;
        text-align: left;
      ">
      <tbody><tr>
        <td id="headerCopyColor" align="Center" style="background: rgb(0, 0, 0);">
          <img id="logo" src="https://images.g2crowd.com/uploads/optimized_product_banner/image/815/a94e25efd798e04b4bf6fed25cf304d1.png" width="100%">
        </td>
      </tr>
      <tr>
        <td style="padding: 36px 30px 42px 30px">
          <table role="presentation" style="
              width: 100%;
              border-collapse: collapse;
              border: 0;
              border-spacing: 0;
            ">
            <tbody><tr>
              <td style="color: #153643">
                <p id="emailHeader" style="font-size: 24px; color: rgb(0, 0, 0);">Hello [VendorContact],</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 0">
                <table role="presentation" style="
                    width: 100%;
                    border-collapse: collapse;
                    border: 0;
                    border-spacing: 0;
                  ">
                  <tbody><tr>
                    <td style="
                        width: 290px;
                        padding: 0;
                        vertical-align: top;
                        color: #153643;
                      ">
                      <p style="
                          margin: 0 0 25px 0;
                          font-size: 16px;
                          line-height: 24px;
                          font-family: Arial, sans-serif;
                        "></p>
                      <p id="mainText1" class="mainText2" style="color: rgb(0, 0, 0);">
                        We're excited to get started with
                        [VendorName]
                      </p>
                      &nbsp;
                      <p id="mainText2" class="mainText2" style="color: rgb(0, 0, 0);">
                        An Assessment has been issued to [VendorName]
                        with you as the contact. The assessment is
                        designed to hel us meet and maintain
                        compliance to industry regulations and
                        security expectations.
                      </p>
                      &nbsp;
                      <p id="mainText3" class="mainText2" style="color: rgb(0, 0, 0);">
                        We request that you complete the assessment to
                        ensure a timely onboarding of [ThirdPartyName]
                      </p>
                      &nbsp;
                      <p id="mainText4" class="mainText2" style="color: rgb(0, 0, 0);">
                        Thank you,
                      </p>
                      <p id="mainText5" class="mainText2" style="color: rgb(0, 0, 0);">
                        NAVEX Third Party Compliance Team
                      </p>
                      <p style="
                          margin: 0;
                          font-size: 16px;
                          line-height: 24px;
                          font-family: Arial, sans-serif;
                        "></p>
                    </td>
                    <td style="
                        width: 15px;
                        padding-right: 0px;
                        font-size: 0;
                        line-height: 0;
                      ">
                      &nbsp;
                    </td>
                  

                    <td style="
                       width: 150px; border: solid black 1px; background-color: #eeece9; filter: drop-shadow(16px -16px 0px rgba(52,89,93, 0.8)); padding-right: 15px; vertical-align: top; color: #153643;
                       
                      ">
                      <p style="
                          margin: 0 0 25px 0;
                          font-size: 16px;
                          line-height: 24px;
                          font-family: Arial, sans-serif;
                        "></p>

                      <p style="text-align: center; font-size: 20px; font-weight: 700">
                        Actions Required:
                      </p>
                      <ol id="textContentRight" class="mainText3" style="
                          margin: 0 0 12px 0;
                          font-size: 12px;
                          line-height: 24px;
                          word-break: break-word;
                          font-family: Arial, sans-serif;
                        ">
                       
                      <li class="actionItem" style="font-size: 16px; padding-bottom: 7.5px;">Log in [AssessmentUrl]</li><li class="actionItem" style="font-size: 16px; padding-bottom: 7.5px;">Enter credentials issued in another email</li><li class="actionItem" style="font-size: 16px; padding-bottom: 7.5px;">Please complete the assessment by [DueDate]</li></ol>
                    </td>                             
                  </tr>
                </tbody></table>
              </td>
            </tr>
          </tbody></table>
        </td>
      </tr>
      <tr>
        <td style="padding: 30px; background: #ef700c">
          <table role="presentation" style="
              width: 100%;
              border-collapse: collapse;
              border: 0;
              border-spacing: 0;
              font-size: 9px;
              font-family: Arial, sans-serif;
            ">
            <tbody><tr>
              <td style="padding: 0; width: 100%" align="center">
                <p id="footerText" style="margin: 0; font-size: 16px; line-height: 20px; font-family: Arial, sans-serif; color: #ffffff;"><strong>Vision:</strong> Deliver the world's smartest <strong>integrated</strong> platform that enables organizations to <strong>predict</strong> and <strong>mitigate</strong> risk.</p>
              </td>
              <td style="padding: 0; width: 50%" align="right">
                <table role="presentation" style="
                    border-collapse: collapse;
                    border: 0;
                    border-spacing: 0;
                  "></table>
              </td>
            </tr>
          </tbody></table>
        </td>
      </tr>
    </tbody></table>
  </td>
</tr>
</tbody></table>`
var cancelled = `<table role="presentation" id="emailNotification" style="margin: 0px auto;">
<tbody><tr>
  <td align="center" style="padding: 0">
    <table role="presentation" style="
        border-collapse: collapse;
        border: 1px solid #cccccc;
        border-spacing: 0;
        text-align: left;
      ">
      <tbody><tr>
        <td id="headerCopyColor" align="Center" style="background: rgb(0, 0, 0);">
          <img id="logo" src="https://images.g2crowd.com/uploads/optimized_product_banner/image/815/a94e25efd798e04b4bf6fed25cf304d1.png" width="100%">
        </td>
      </tr>
      <tr>
        <td style="padding: 36px 30px 42px 30px">
          <table role="presentation" style="
              width: 100%;
              border-collapse: collapse;
              border: 0;
              border-spacing: 0;
            ">
            <tbody><tr>
              <td style="color: #153643">
                <p id="emailHeader" style="color: rgb(0, 0, 0); font-size: 24px;">Hello ,</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 0">
                <table role="presentation" style="
                    width: 100%;
                    border-collapse: collapse;
                    border: 0;
                    border-spacing: 0;
                  ">
                  <tbody><tr>
                    <td style="
                        width: 290px;
                        padding: 0;
                        vertical-align: top;
                        color: #153643;
                      ">
                      <p style="
                          margin: 0 0 25px 0;
                          font-size: 24px;
                          line-height: 24px;
                          font-family: Arial, sans-serif;
                        "></p>
                      <p id="mainText1" class="mainText2" style="color: rgb(0, 0, 0); font-size: 20px;">
                      The assessment assigned to you (assessment name below), has been canceled. No further action is required.
                      </p>
                      &nbsp;
                      <!-- <p
                      id="mainText2"
                        class="mainText2"
                        style="
                          margin: 0 0 12px 0;
                          font-size: 16px;
                          line-height: 24px;
                          font-family: Arial, sans-serif;
                          word-break: break-word;
                        "
                      >
                        
                      </p> -->
                      <!-- &nbsp; -->
                      <p id="mainText3" class="mainText2" style="color: rgb(0, 0, 0); font-size: 20px;">
                      Lockpath Portal URL: [LockpathUrl] <br>                             
                      Assessment Name: [AssessmentUrl]
                      </p>
                      &nbsp;
                      <p id="mainText4" class="mainText2" style="color: rgb(0, 0, 0); font-size: 20px;">
                        Thank you,
                      </p>
                      <p id="mainText5" class="mainText2" style="color: rgb(0, 0, 0); font-size: 20px;">
                        NAVEX Third Party Compliance Team
                      </p>
                      <p style="
                          margin: 0;
                          font-size: 24px;
                          line-height: 24px;
                          font-family: Arial, sans-serif;
                        "></p>
                    </td>
                    <td style="
                        width: 15px;
                        padding-right: 0px;
                        font-size: 0;
                        line-height: 0;
                      ">
                      &nbsp;
                    </td>
                  

                    <td style="
                        display:none; width: 150px; border: solid black 1px; background-color: #eeece9; filter: drop-shadow(16px -16px 0px rgba(52,89,93, 0.8)); padding-right: 15px; vertical-align: top; color: #153643;
                       
                      ">
                      <p style="
                          margin: 0 0 25px 0;
                          font-size: 16px;
                          line-height: 24px;
                          font-family: Arial, sans-serif;
                        "></p>

                      <p style="text-align: center; font-size: 20px; font-weight: 700">
                        Actions Required:
                      </p>
                      <ol id="textContentRight" class="mainText3" style="
                          margin: 0 0 12px 0;
                          font-size: 12px;
                          line-height: 24px;
                          word-break: break-word;
                          font-family: Arial, sans-serif;
                        ">
                       
                      </ol>
                    </td>                             
                  </tr>
                </tbody></table>
              </td>
            </tr>
          </tbody></table>
        </td>
      </tr>
      <tr>
        <td style="padding: 30px; background: #ef700c">
          <table role="presentation" style="
              width: 100%;
              border-collapse: collapse;
              border: 0;
              border-spacing: 0;
              font-size: 9px;
              font-family: Arial, sans-serif;
            ">
            <tbody><tr>
              <td style="padding: 0; width: 100%" align="center">
                <p style="
                    margin: 0;
                    font-size: 14px;
                    line-height: 16px;
                    word-wrap: break-word;
                    word-break: break-all;
                    font-family: Arial, sans-serif;
                    color: #ffffff;
                  " id="footerText"></p>
              </td>
              <td style="padding: 0; width: 50%" align="right">
                <table role="presentation" style="
                    border-collapse: collapse;
                    border: 0;
                    border-spacing: 0;
                  "></table>
              </td>
            </tr>
          </tbody></table>
        </td>
      </tr>
    </tbody></table>
  </td>
</tr>
</tbody></table>`
var dataTable = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .l-inner {
	max-width: 1104px;
	padding-right: 40px;
	padding-left: 40px;
	margin-inline: auto;
}

table {
	max-width: 900px;
	width: 100%;
/* 	線の重なりを指定する：collapse	各セルの線を重ねて表示 */
	border-collapse: collapse;
	border: 1px solid #DAE3F2;
	margin-top: 30px;
}

th {
	display: block;
	background-color: #DAE3F2;
	padding: 17px 20px;
	font-size: 14px;
	font-weight: 500;
	color: #000;
	text-align: left;
	vertical-align: top;
	border-bottom: 1px solid #FFF;
}
@media screen and (min-width: 768px) {
	th,td {
		display: table-cell
	}
	th {
		width: 230px;
	}
}

td {
	display: block;
	background-color: #FFF;
	padding: 17px 20px;
	font-size: 14px;
	font-weight: 500;
	color: #000;
	text-align: left;
	vertical-align: top;
	border-bottom: 1px solid #DAE3F2;
}

td iframe {
	max-width: 400px;
	width: 100%;
	height: auto;
	aspect-ratio: 400/300;
}

/* 最後のth,tdの下線不要 */
tr:last-of-type th {
	border-bottom: none;
}

tr:last-of-type td {
	border-bottom: none;
}
</style>
</html>

<body>
	<div class="l-inner">
		<table>
			<tr>
				<th>Header</th>
				<td>Value</td>
			</tr>
			<tr>
				<th>Header2</th>
				<td>Value</td>
			</tr>
			<tr>
				<th>Header3</th>
				<td class="p-table__access-data">
					<p>Value</p>
					<p>Value</p>
				</td>
			</tr>
			<tr>
				<th>Header4</th>
				<td>Value</td>
			</tr>
			
		</table>
	</div>
</body> 
</html>`

templates.push(vendorAssessment, cancelled, dataTable)

function copyTemplate (){
    if(place.innerHTML === locations[0]){
      
      display=templates[0]
    }
    if(place.innerHTML === locations[1]){
     
      display=templates[1]
    }
    if(place.innerHTML === locations[2]){
      
      display = templates[2]
      console.log("2")
    }
    
    handleSubmit2()
    
    form.style="display:none"
}

place.addEventListener("click", copyTemplate) 
function handleSubmit2(){
    place.removeEventListener("click", copyTemplate)
    place.style="display:none"
    var clearedForm = document.getElementById("clearForm")
    clearedForm.style="display:visible"
    clearedForm.addEventListener("click", clearForm)
    function clearForm(){
        copyToClipBoard.remove()
        clearedForm.style="display:none"
        pasteLabel.style="display:visible"
        textArea.style="display:visible"
        
        form.reset()
    } 
    let string = (display.replace(/"/g, "'"))
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
     
        var cSharped = document.createElement("div")
        cSharped.style=" display: flex;flex-direction: column; margin-top: 5%; margin-left: 5%;margin-right: 5%;justify-content: center;box-shadow: 0 0 20px 0  #3c3737; background-color: white;margin-bottom: 5%;border-radius: 6px;"
        var cSharpedP = document.createElement("p")
        cSharpedP.style="word-break: break-all; text-align: center; font-size: 18px; color:#356F6F; width:100%"
        cSharpedP.innerText = `String self = record.GetValue<String>("_alias");` + `\n` + `self = "";`+ `\n`+ cSharpString + `\n` + `return self;`
        formDiv.after(cSharped)
        cSharped.appendChild(cSharpedP)
        navigator.clipboard.writeText(cSharpedP.innerText);
    
        console.log(display)
        var removeClip= document.createElement("button");
       
    
        removeClip.setAttribute("id", "copy")
        removeClip.textContent="Clear C# String"
        form.after(removeClip)
        removeClip.onclick=()=>{
            cSharped.style="display:none"
            removeClip.remove()
            form.style="display:visible"
            place.addEventListener("click", copyTemplate)
            place.style="display:visible"
            
        }
    }




