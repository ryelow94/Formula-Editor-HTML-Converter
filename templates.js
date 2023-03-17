let templates = []
var place = document.getElementById("place");
var form = document.getElementById("form")
var locations = ["---- Click to Copy 1 ----", "---- Click to Copy 2 ----", "---- Click to Copy 3 ----", "---- Click to copy 4 ----", "---- Click to Copy 5 ----", "---- Click to Copy 6 ----", "---- Click to copy 7 ----", "---- Click to copy 8 ----"]
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
var dataTableTwo = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
.container {
    width: 80%;
    max-width: 1100px;
    margin: 0 auto;
  }
  
  /* RESPONSIVE TABLE STARTS HERE */
  table {
    margin: 0 auto 2rem;
  }
  
  .responsiveTbl {
    width: 80%;
    max-width: 1000px;
    text-align: center;
  }
  
  caption {
    padding-bottom: 0.5em;
    text-align: center;
    font-size: 1.25rem;
    font-weight: bold;
    white-space: nowrap;
  }
  
  // tr:nth-of-type(odd) {
  //   background: #FFFFFF;
  // }
  
  tr:nth-of-type(even) {
    background: #d1d5d9;
  }
  
  .tableHead th {
    background-color: #708090;
    color: white;
    font-weight: bold;
    padding: 0.5em 0.375em;
    text-align: center;
    border: 1px solid #aaa;
  }
  
  .responsiveTbl {
    border-collapse: collapse;
  }
  
  .responsiveTbl td {
    padding: 0.25em;
    border: 1px solid #aaa;
    text-align: center;
    white-space: nowrap;
  }
  
  // td:nth-last-child(1) {
  //   border-right: 1px solid black;
  // }
  
</style>
    <title>Document</title>
</head> 

<body>
<div class="container">
<h2>Important Notes</h2>
  <p>Back in 2018 I spent a few months searching for the CSS for a responsive table. I wish I could remember where I found this so that I could credit the person, but it's been too long. &quot;Thanks, whoever you are!&quot; Although, I have made a lot of changes to their CSS.</p>
  <p>The table below is an example of guitar chords from my website <a
    href="https://everyguitarchord.com/c-major-scale-chords-every-diatonic-chord/" target="_blank">Every Guitar Chord</a>.
  Here are the important notes:</p>
<ol>
  <li>The CSS is desktop-first, so you would have to switch everything around for mobile-first.</li>
  <li>I have some CSS commented out. I may or may not use it so I left it in.</li>
  <li>On mobile view the <code>tbody td</code> cells have a thicker bottom border. I have not tried to remove it yet.</li>
  <li>The properties and values for <code>td</code> and <code>td:before</code> in the media query are <em>odd</em>. I would like to change some of those properties and/or values because I would like the same styling for the column headers that I have on desktop-view but background-color does not work correctly.</li>
  <li>At the end of the media query you have to add your column heading names to the <code>content</code> value for each <code>nth-of-type(n):before</code> rule.</li>
</ol>
</div>

<table class="responsiveTbl">
<caption>C Chords From The C Major Scale</caption>
<thead class="tableHead">
  <tr>
    <th>Chord Name</th>
    <th>1st Note</th>
    <th>2nd Note</th>
    <th>3rd Note</th>
    <th>4th Note</th>
    <th>5th Note</th>
    <th>6th Note</th>
    <th>Equal Chord1</th>
    <th>Equal Chord2</th>
    <th>Equal Chord3</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td data-title="Chord">C5<sup>*</sup></td>
    <td data-title="1st Note">C</td>
    <td data-title="2nd Note">G</td>
    <td data-title="3rd Note">C</td>
    <td data-title="4th Note">-</td>
    <td data-title="5th Note">-</td>
    <td data-title="6th Note">-</td>
    <td data-title="Equal Chord1">-</td>
    <td data-title="Equal Chord2">-</td>
    <td data-title="Equal Chord3">-</td>
  </tr>
  <tr>
    <td>C Maj</td>
    <td>C</td>
    <td>E</td>
    <td>G</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td data-title="Chord">C6</td>
    <td data-title="1st Note">C</td>
    <td data-title="2nd Note">E</td>
    <td data-title="3rd Note">G</td>
    <td data-title="4th Note">A</td>
    <td data-title="5th Note">-</td>
    <td data-title="6th Note">-</td>
    <td data-title="Equal Chord1">Am7</td>
    <td data-title="Equal Chord2">-</td>
    <td data-title="Equal Chord3">-</td>
  </tr>
  <tr>
    <td data-title="Chord">C add9</td>
    <td data-title="1st Note">C</td>
    <td data-title="2nd Note">E</td>
    <td data-title="3rd Note">G</td>
    <td data-title="4th Note">D</td>
    <td data-title="5th Note">-</td>
    <td data-title="6th Note">-</td>
    <td data-title="Equal Chord1">-</td>
    <td data-title="Equal Chord2">-</td>
    <td data-title="Equal Chord3">-</td>
  </tr>
  <tr>
    <td data-title="Chord">C6 add9</td>
    <td data-title="1st Note">C</td>
    <td data-title="2nd Note">E</td>
    <td data-title="3rd Note">G</td>
    <td data-title="4th Note">A</td>
    <td data-title="5th Note">D</td>
    <td data-title="6th Note">-</td>
    <td data-title="Equal Chord1">Am11</td>
    <td data-title="Equal Chord2">D9 sus</td>
    <td data-title="Equal Chord3">-</td>
  </tr>
  <tr>
    <td data-title="Chord">C add9/11</td>
    <td data-title="1st Note">C</td>
    <td data-title="2nd Note">E</td>
    <td data-title="3rd Note">G</td>
    <td data-title="4th Note">D</td>
    <td data-title="5th Note">F</td>
    <td data-title="6th Note">-</td>
    <td data-title="Equal Chord1">G13 sus</td>
    <td data-title="Equal Chord2">-</td>
    <td data-title="Equal Chord3">-</td>
  </tr>
  <tr>
    <td data-title="Chord">C6 add9/11</td>
    <td data-title="1st Note">C</td>
    <td data-title="2nd Note">E</td>
    <td data-title="3rd Note">G</td>
    <td data-title="4th Note">A</td>
    <td data-title="5th Note">D</td>
    <td data-title="6th Note">F</td>
    <td data-title="Equal Chord1">Fmaj9/13</td>
    <td data-title="Equal Chord2">-</td>
    <td data-title="Equal Chord3">-</td>
  </tr>
  <tr>
    <td data-title="Chord">Cmaj7</td>
    <td data-title="1st Note">C</td>
    <td data-title="2nd Note">E</td>
    <td data-title="3rd Note">G</td>
    <td data-title="4th Note">B</td>
    <td data-title="5th Note">-</td>
    <td data-title="6th Note">-</td>
    <td data-title="Equal Chord1">-</td>
    <td data-title="Equal Chord2">-</td>
    <td data-title="Equal Chord3">-</td>
  </tr>
  <tr>
    <td data-title="Chord">Cmaj9</td>
    <td data-title="1st Note">C</td>
    <td data-title="2nd Note">E</td>
    <td data-title="3rd Note">G</td>
    <td data-title="4th Note">B</td>
    <td data-title="5th Note">D</td>
    <td data-title="6th Note">-</td>
    <td data-title="Equal Chord1">-</td>
    <td data-title="Equal Chord2">-</td>
    <td data-title="Equal Chord3">-</td>
  </tr>
  <tr>
    <td data-title="Chord">Cmaj13</td>
    <td data-title="1st Note">C</td>
    <td data-title="2nd Note">E</td>
    <td data-title="3rd Note">G</td>
    <td data-title="4th Note">B</td>
    <td data-title="5th Note">A</td>
    <td data-title="6th Note">-</td>
    <td data-title="Equal Chord1">Am9</td>
    <td data-title="Equal Chord2">-</td>
    <td data-title="Equal Chord3">-</td>
  </tr>
  <tr>
    <td data-title="Chord">Cmaj9/13</td>
    <td data-title="1st Note">C</td>
    <td data-title="2nd Note">E</td>
    <td data-title="3rd Note">G</td>
    <td data-title="4th Note">B</td>
    <td data-title="5th Note">D</td>
    <td data-title="6th Note">A</td>
    <td data-title="Equal Chord1">G6 add9/11</td>
    <td data-title="Equal Chord2">-</td>
    <td data-title="Equal Chord3">-</td>
  </tr>
  <tr>
    <td data-title="Chord">Csus</td>
    <td data-title="1st Note">C</td>
    <td data-title="2nd Note">F</td>
    <td data-title="3rd Note">G</td>
    <td data-title="4th Note">-</td>
    <td data-title="5th Note">-</td>
    <td data-title="6th Note">-</td>
    <td data-title="Equal Chord1">-</td>
    <td data-title="Equal Chord2">-</td>
    <td data-title="Equal Chord3">-</td>
  </tr>
  <tr>
    <td data-title="Chord">Csus2</td>
    <td data-title="1st Note">C</td>
    <td data-title="2nd Note">D</td>
    <td data-title="3rd Note">G</td>
    <td data-title="4th Note">-</td>
    <td data-title="5th Note">-</td>
    <td data-title="6th Note">-</td>
    <td data-title="Equal Chord1">Gsus</td>
    <td data-title="Equal Chord2">-</td>
    <td data-title="Equal Chord3">-</td>
  </tr>
  <tr>
    <td data-title="Chord">Csus add9</td>
    <td data-title="1st Note">C</td>
    <td data-title="2nd Note">F</td>
    <td data-title="3rd Note">G</td>
    <td data-title="4th Note">D</td>
    <td data-title="5th Note">-</td>
    <td data-title="6th Note">-</td>
    <td data-title="Equal Chord1">G7sus</td>
    <td data-title="Equal Chord2">-</td>
    <td data-title="Equal Chord3">-</td>
  </tr>
</tbody>
</table>
</body>
</html>`
var dataTableThree = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head> 
<style>
body {
    padding: 30px;
    font-family: "Arial", sans-serif;
  }
  
  table {
    border-collapse: collapse;
    border-radius: 30px;
    border-style: hidden;
    box-shadow: 0 0 0 1px black;
    overflow: hidden;
  
    max-width: 800px;
    margin: auto;
  }
  
  thead {
    background-color: lavender;
  }
  
  th,
  td {
    border: 1px solid black;
  
    max-width: 300px;
    padding: 15px;
    line-height: 20px;
  }
  
  td {
    font-size: 14px;
  }
  
</style>
<body>
<table>
<thead>
  <tr>
    <th>
      Lorem ipsum
    </th>
    <th>
      Dolor sit
    </th>
    <th>
      Amet
    </th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan='2'>
      Lorem ipsum dolor sit amet
    </td>
    <td rowspan='2'>
      Lorem ipsum dolor
    </td>
    <td>
      Etiam cursus quam ut eros feugiat commodo. Praesent mi justo, cursus at tempor non, malesuada elementum eros
    </td>
  </tr>
  <tr>
    <td>
      Nunc vulputate nec purus fringilla mollis. Fusce gravida tortor sed mi porttitor semper. Praesent finibus mauris et euismod sodales
    </td>
  </tr>
  <tr>
    <td rowspan='2'>
      Quisque mollis urna ligula
    </td>
    <td rowspan='2'>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
    </td>
    <td>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus quam ut eros feugiat commodo. Praesent mi justo, cursus at tempor non, malesuada elementum eros. Nunc vulputate nec purus fringilla mollis. Fusce gravida tortor sed mi porttitor semper. Praesent finibus mauris et euismod sodales. Quisque mollis urna ligula, facilisis tempor massa pellentesque eget. Phasellus porta, risus et tempus sagittis, elit nunc interdum elit, sed dictum mauris ligula sit amet diam.
    </td>
  <tr>
    <td>
      Nunc vulputate nec purus fringilla mollis. Fusce gravida tortor sed mi porttitor semper. Praesent finibus mauris et euismod sodales
    </td>
  </tr>
  </tr>
</tbody>
</table>
</body>
</html>`
var dataTableFour = `	
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Balance Sheet</title>
    <link rel="stylesheet" href="./styles.css">
  </head>
  <style>
  /* resetting the box model */
span[class~="sr-only"] {
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  clip-path: inset(50%) !important;
  -webkit-clip-path: inset(50%) !important;
  height: 1px !important;
  width: 1px !important;
  position: absolute !important;
  overflow: hidden !important;
  white-space: nowrap !important;
  padding: 0 !important;
  margin: -1px !important;
}

html {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  color: #0a0a23;
}

h1 {
  max-width: 37.25rem;
  margin: 0 auto;
  padding: 1.5rem 1.25rem;
}

h1 .flex {
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
}

h1 .flex span:first-of-type {
  font-size: 0.7em;
}

h1 .flex span:last-of-type {
  font-size: 1.2em;
}

section {
  max-width: 40rem;
  margin: 0 auto;
  border: 2px solid #d0d0d5;
}

#years {
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  background: #0a0a23;
  color: #fff;
  z-index: 999;
  margin: 0 -2px;
  padding: 0.5rem calc(1.25rem + 2px) 0.5rem 0
}

#years span[class] {
  font-weight: bold;
  width: 4.5rem;
  text-align: right;
}

.table-wrap {
  padding: 0 0.75rem 1.5rem 0.75rem;
}

table {
  border-collapse: collapse;
  border: 0;
  width: 100%;
  position: relative;
  margin-top: 3rem;
}

table caption {
  color: #356eaf;
  font-size: 1.3em;
  font-weight: normal;
  position: absolute;
  top: -2.25rem;
  left: 0.5rem;
}

tbody td {
  width: 100vw;
  min-width: 4rem;
  max-width: 4rem;
}

tbody th {
  width: calc(100% - 12rem);
}

tr[class="total"] {
  border-bottom: 4px double #0a0a23;
  font-weight: bold;
}

tr[class="total"] th {
  border-bottom: 4px double #0a0a23;
  text-align: left;
  padding: 0.5rem 0 0.25rem 0.5rem;
}

tr.total td {
  text-align: right;
  padding: 0 0.25rem;
}

tr.total td:nth-of-type(3) {
  padding-right: 0.5rem;
}

tr.total:hover {
  background-color: #99c9ff;
}

td.current {
  font-style: italic;
}

tr.data {
  background-image: linear-gradient(to bottom, #dfdfe2 1.845rem, white 1.845rem);
}

tr.data th {
  text-align: left;
  padding-top: 0.3rem;
  padding-left: 0.5rem;
}

tr.data th .description {
  display: block;
  font-style: italic;
  font-weight: normal;
  padding: 1rem 0 0.75rem;
  margin-right: -13.5rem;
}

tr.data td {
  vertical-align: top;
  text-align: right;
  padding: 0.3rem 0.25rem 0;
}

tr.data td:last-of-type {
  padding-right: 0.5rem;
}
  </style>
  <body>
    <main>
      <section>
        <h1>
          <span class="flex">
            <span>AcmeWidgetCorp</span>
            <span>Balance Sheet</span>
          </span>
        </h1>
        <div id="years" aria-hidden="true">
          <span class="year">2019</span>
          <span class="year">2020</span>
          <span class="year">2021</span>
        </div>
        <div class="table-wrap">
          <table>
            <caption>Assets</caption>
            <thead>
              <tr>
                <td></td>
                <th><span class="sr-only year">2019</span></th>
                <th><span class="sr-only year">2020</span></th>
                <th class="current"><span class="sr-only year">2021</span></th>
              </tr>
            </thead>
            <tbody>
              <tr class="data">
                <th>Cash <span class="description">This is the cash we currently have on hand.</span></th>
                <td>$25</td>
                <td>$30</td>
                <td class="current">$28</td>
              </tr>
              <tr class="data">
                <th>Checking <span class="description">Our primary transactional account.</span></th>
                <td>$54</td>
                <td>$56</td>
                <td class="current">$53</td>
              </tr>
              <tr class="data">
                <th>Savings <span class="description">Funds set aside for emergencies.</span></th>
                <td>$500</td>
                <td>$650</td>
                <td class="current">$728</td>
              </tr>
              <tr class="total">
                <th>Total <span class="sr-only">Assets</span></th>
                <td>$579</td>
                <td>$736</td>
                <td class="current">$809</td>
              </tr>
            </tbody>
          </table>
          <table>
            <caption>Liabilities</caption>
            <thead>
              <tr>
              <td></td>
              <th><span class="sr-only">2019</span></th>
              <th><span class="sr-only">2020</span></th>
              <th><span class="sr-only">2021</span></th>
              </tr>
            </thead>
            <tbody>
              <tr class="data">
                <th>Loans <span class="description">The outstanding balance on our startup loan.</span></th>
                <td>$500</td>
                <td>$250</td>
                <td class="current">$0</td>
              </tr>
              <tr class="data">
                <th>Expenses <span class="description">Annual anticipated expenses, such as payroll.</span></th>
                <td>$200</td>
                <td>$300</td>
                <td class="current">$400</td>
              </tr>
              <tr class="data">
                <th>Credit <span class="description">The outstanding balance on our credit card.</span></th>
                <td>$50</td>
                <td>$50</td>
                <td class="current">$75</td>
              </tr>
              <tr class="total">
                <th>Total <span class="sr-only">Liabilities</span></th>
                <td>$750</td>
                <td>$600</td>
                <td class="current">$475</td>
              </tr>
            </tbody>
          </table>
          <table>
            <caption>Net Worth</caption>
            <thead>
              <tr>
              <td></td>
              <th><span class="sr-only">2019</span></th>
              <th><span class="sr-only">2020</span></th>
              <th><span class="sr-only">2021</span></th>
              </tr>
            </thead>
            <tbody>
              <tr class="total">
                <th>Total <span class="sr-only">Net Worth</span></th>
                <td>$-171</td>
                <td>$136</td>
                <td class="current">$334</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </body>
</html>
`
var basicEmail = `
<body bgcolor="#f5f5f5" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" offset="0" style="padding:70px 0 70px 0;">
    <table width="600" height="auto" align="center" cellpadding="0" cellspacing="0" style="background-color:#fdfdfd; border:1px solid #dcdcdc; border-radius:3px !important;">
      <tr>
        <td width="600" height="auto" bgcolor="#000" border="0" style="padding:36px 48px; display:block; margin: 0px auto;">
          <h1 style="color:#ffffff; font-family:&quot; Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif; font-size:30px; line-height:150%; font-weight:300; margin:0; text-align:left;">Header of Notification</h1>
        </td>
      </tr>
      <tr>
        <td width="600" bgcolor="#fdfdfd" border="0" style="color:#737373; font-family:&quot;Helvetica Neue&quot;,Helvetica,Roboto,Arial,sans-serif; font-size:14px; line-height:150%; text-align:left; padding:48px;">
          <p style="margin:0 0 16px;">This is some text <b>burhan</b></p>
          <p style="margin:0 0 16px;"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet facilisis magna etiam tempor. Scelerisque eleifend donec pretium vulputate. Nunc eget lorem dolor sed viverra ipsum nunc. In nibh mauris cursus mattis. Viverra mauris in aliquam sem fringilla ut morbi. Sit amet cursus sit amet dictum sit amet justo. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Ultricies mi quis hendrerit dolor. Nisl pretium fusce id velit ut tortor pretium. In hac habitasse platea dictumst. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Facilisi etiam dignissim diam quis enim. Vel pretium lectus quam id. Tellus at urna condimentum mattis pellentesque id nibh. Urna condimentum mattis pellentesque id.

          Elementum tempus egestas sed sed risus pretium. Sed libero enim sed faucibus turpis in eu mi bibendum. Amet nisl suscipit adipiscing bibendum est ultricies. Amet cursus sit amet dictum sit amet justo donec. Nunc sed augue lacus viverra. Odio pellentesque diam volutpat commodo. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. At tellus at urna condimentum mattis pellentesque. Dictum varius duis at consectetur lorem. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Amet consectetur adipiscing elit ut aliquam purus. Dui faucibus in ornare quam viverra orci. Orci ac auctor augue mauris augue neque gravida in fermentum. Morbi tristique senectus et netus et malesuada fames ac. Condimentum lacinia quis vel eros. Tellus in hac habitasse platea dictumst vestibulum. Tristique senectus et netus et malesuada fames ac. Ornare lectus sit amet est.
          
          Ut aliquam purus sit amet luctus venenatis. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Sed augue lacus viverra vitae congue eu. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Arcu non odio euismod lacinia at quis risus. Sodales ut eu sem integer. Orci nulla pellentesque dignissim enim sit. Posuere sollicitudin aliquam ultrices sagittis orci a. Magna fermentum iaculis eu non diam. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. At consectetur lorem donec massa sapien. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Etiam sit amet nisl purus in mollis nunc sed. At ultrices mi tempus imperdiet. Maecenas sed enim ut sem. Urna duis convallis convallis tellus. Suspendisse ultrices gravida dictum fusce.
          
          Dui faucibus in ornare quam viverra. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Eget gravida cum sociis natoque penatibus et. Consectetur adipiscing elit duis tristique. Sit amet purus gravida quis blandit turpis cursus. Et ultrices neque ornare aenean euismod elementum nisi. Senectus et netus et malesuada fames ac turpis egestas integer. Pulvinar pellentesque habitant morbi tristique senectus et. Cursus metus aliquam eleifend mi. Fringilla est ullamcorper eget nulla. Justo donec enim diam vulputate ut pharetra sit amet. Bibendum ut tristique et egestas. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Ac felis donec et odio. Amet luctus venenatis lectus magna fringilla urna porttitor. Id neque aliquam vestibulum morbi blandit cursus. Sit amet venenatis urna cursus eget nunc. Tristique risus nec feugiat in fermentum posuere. Sed faucibus turpis in eu mi bibendum neque egestas. Auctor elit sed vulputate mi sit amet mauris.
          
          Leo urna molestie at elementum eu facilisis sed odio morbi. Eu ultrices vitae auctor eu augue ut. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Id faucibus nisl tincidunt eget. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Proin fermentum leo vel orci porta non. Ut placerat orci nulla pellentesque dignissim enim sit amet. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Auctor neque vitae tempus quam. Nunc mi ipsum faucibus vitae. Donec adipiscing tristique risus nec feugiat in. Enim diam vulputate ut pharetra sit amet. Hendrerit gravida rutrum quisque non tellus. Volutpat lacus laoreet non curabitur gravida arcu ac. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Dolor purus non enim praesent elementum facilisis. Eu lobortis elementum nibh tellus molestie nunc.</b></p>
          <p style="margin:0 0 16px;">LInk <a href="#" style="color:#111111; font-weight:normal; text-decoration:underline;" target="_blank">http://iulitiraf.com/giris</a> </p>
        </td>
      </tr>
      <tr>
        <td width="600" border="0" style="padding:0 48px 48px 48px; color:#707070; font-family:Arial; font-size:12px; line-height:125%; text-align:center;">
          <p>Footer text</p>
        </td>
      </tr>
    </table>
</body>
`
var niceTable = `
<html>
<head>
	<title></title>
</head>
<body style="cursor: auto;">
<table cellpadding="5" cellspacing="28" style="border-radius:1%;border:solid black 1px;margin-left:25%;padding-bottom:0%;width:50%;">
	<caption>
	<h1 style="text-align: left; margin-left: 40px;"><big><span style="font-size:26px;">Risk Assessment:</span></big></h1>
	</caption>
	<thead>
		<tr style="background-color:#D8D8D8;">
			<th style=" padding: 10px; width: 100%; text-align: left;"><span style="padding-left:10px">Safe Harbor</span></th>
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
			<div style="padding-left: 10px; font-weight: 700;"><span style="font-size:14px;">No</span></div>
			</td>
		</tr>
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
			<div style="padding-left: 10px; font-weight: 700;"><span style="font-size:14px;">No</span></div>
			</td>
		</tr>
	</tbody>
</table>

<table cellpadding="5" cellspacing="28" style="border:solid black 1px;border-radius:1%;margin-left:25%;padding-bottom:0%;width:50%;">
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
</table>
</body>
</html>
`
templates.push(vendorAssessment, cancelled, dataTable, dataTableTwo, dataTableThree, dataTableFour, basicEmail, niceTable)

var copyHTML = document.getElementById("copyHTML")
var copyCsharp = document.getElementById("copyCsharp")
// var iframe = document.getElementById("iframe")
// var htmlCode = document.getElementById("htmlCode")



// function showCode() {
//   if (htmlCode != "" || null) {
//     iframe.style = "display:visible"
//   }
// }
// htmlCode.addEventListener("change", showCode)

function copyTemplate() {
  if (document.getElementById("copied")) {
    document.getElementById("copied").remove()
  }
  copyHTML.style = "display:visible"
  var copied = document.createElement("p")
  copied.setAttribute("id", "copied")
  copied.style = "color:green; font-size:40px; text-align:center"
  copied.textContent = "--- C# String copied ---"
  copyHTML.before(copied)
  if (document.getElementById("copied1")) {
    document.getElementById("copied1").remove()
  }
  if (place.innerHTML === locations[0]) {

    display = templates[0]
  }
  if (place.innerHTML === locations[1]) {

    display = templates[1]
  }
  if (place.innerHTML === locations[2]) {

    display = templates[2]
  }
  if (place.innerHTML === locations[3]) {

    display = templates[3]
  }
  if (place.innerHTML === locations[4]) {
    display = templates[4]

  }
  if (place.innerHTML === locations[5]) {
    display = templates[5]

  }
  if (place.innerHTML === locations[6]) {
    display = templates[6]

  }
  if (place.innerHTML === locations[7]) {
    display = templates[7]

  }

  handleSubmit2()

  form.style = "display:none"
}

copyHTML.onclick = async () => {
  await navigator.clipboard.writeText(display)
  document.getElementById("copied").style = "display:none"
  var copied1 = document.createElement("p")
  copied1.setAttribute("id", "copied1")
  copied1.innerText = "--- HTML copied ---\nYou can make changes to the HTML in the editor below and submit it to reconvert it to a C# string"
  copied1.style = "color:green; text-align:center; font-size:25px"
  form.before(copied1)
  copyHTML.style = "display:none"
  copyCsharp.style = "display:visible"
  form.style = "display:visible"
  form.before(copyCsharp)
  // document.getElementById("editor").style = "display:visible; height:450px"
  // document.getElementById("iframe").style = " height: 450px"
  // form.before(document.getElementById("editor"))
  // form.before(document.getElementById("iframe"))
  if (document.getElementById("copy1")) {
    document.getElementById("copy1").remove();
  }
  if (document.getElementById("cSharped")) {
    document.getElementById("cSharped").style = "display:none"
  }
}
copyCsharp.onclick = () => {
  if (document.getElementById("copied")) {
    document.getElementById("copied").style = "display:visible; color:green; font-size:40px; text-align:center;"
  }
  if (document.getElementById("copy1")) {
    document.getElementById("copy1").remove()
    form.style = "display:none"
  }
  if (document.getElementById("copied1")) {
    document.getElementById("copied1").remove()
  }
  form.style = "display:none"
  handleSubmit2()
  copyHTML.style = "display:visible"
  copyCsharp.style = "display:none"
}

place.addEventListener("click", copyTemplate)
function handleSubmit2() {
  if (document.getElementById("cSharped")) {
    document.getElementById("cSharped").remove()
  }
  if (document.getElementById("copy1")) {
    document.getElementById("copy1").remove()
  }
  place.removeEventListener("click", copyTemplate)
  place.style = "display:none"
  var clearedForm = document.getElementById("clearForm")
  clearedForm.style = "display:visible"
  clearedForm.addEventListener("click", clearForm)
  function clearForm() {
    // copyToClipBoard.remove()
    clearedForm.style = "display:none"
    pasteLabel.style = "display:visible"
    place.style="display:visible"
    if(document.getElementById("copied1").style="display:none"){
    document.getElementById("copied1").style="display:none"
    }
    
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
  cSharped.setAttribute("id", "cSharped")
  cSharped.style = " display: flex;flex-direction: column; margin-top: 5%; margin-left: 5%;margin-right: 5%;justify-content: center;box-shadow: 0 0 20px 0  #3c3737; background-color: white;margin-bottom: 5%;border-radius: 6px;"
  var cSharpedP = document.createElement("p")
  cSharpedP.style = "word-break: break-all; text-align: center; font-size: 18px; color:#356F6F; width:100%"
  cSharpedP.innerText = `String self = record.GetValue<String>("_alias");` + `\n` + `self = "";` + `\n` + cSharpString + `\n` + `return self;`
  formDiv.after(cSharped)
  cSharped.appendChild(cSharpedP)
  navigator.clipboard.writeText(cSharpedP.innerText);

  console.log(display)
  var removeClip = document.createElement("button");


  removeClip.setAttribute("id", "copy1")
  removeClip.textContent = "Clear C# String"
  copyHTML.after(removeClip)
  removeClip.onclick = () => {
    if (document.getElementById("copied")) {
      document.getElementById("copied").remove()
    }
    cSharped.style = "display:none"
    removeClip.remove()
    form.style = "display:visible"
    place.addEventListener("click", copyTemplate)
    place.style = "display:visible"
    copyCsharp.style = "display:none"
    copyHTML.style = "display:none"

  }
}




