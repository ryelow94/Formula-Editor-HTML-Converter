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
var dataTable = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
<head>
<meta name="viewport" content="width=device-width" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Title</title>


<style type="text/css">
img {
max-width: 100%;
}
body {
-webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em;
}
body {
background-color: #f6f6f6;
}
@media only screen and (max-width: 640px) {
  body {
    padding: 0 !important;
  }
  h1 {
    font-weight: 800 !important; margin: 20px 0 5px !important;
  }
  h2 {
    font-weight: 800 !important; margin: 20px 0 5px !important;
  }
  h3 {
    font-weight: 800 !important; margin: 20px 0 5px !important;
  }
  h4 {
    font-weight: 800 !important; margin: 20px 0 5px !important;
  }
  h1 {
    font-size: 22px !important;
  }
  h2 {
    font-size: 18px !important;
  }
  h3 {
    font-size: 16px !important;
  }
  .container {
    padding: 0 !important; width: 100% !important;
  }
  .content {
    padding: 0 !important;
  }
  .content-wrap {
    padding: 10px !important;
  }
  .invoice {
    width: 100% !important;
  }
}
</style>
</head>

<body itemscope itemtype="http://schema.org/EmailMessage" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6">

<table class="body-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
		<td class="container" width="600" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;" valign="top">
			<div class="content" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;">
				<table class="main" width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; border: 1px solid #e9e9e9;" bgcolor="#fff"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="alert alert-warning" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 16px; vertical-align: top; color: #fff; font-weight: 500; text-align: center; border-radius: 3px 3px 0 0; background-color: #FF9F00; margin: 0; padding: 20px;" align="center" bgcolor="#FF9F00" valign="top">
							Header Text
						</td>
					</tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 20px;" valign="top">
							<table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
										Lorem <strong style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">Ipsum</strong> Dolor.
									</td>
								</tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
										Body Text for the email template
									</td>
								</tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
										<a href="http://www.mailgun.com" class="btn-primary" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize; background-color: #348eda; margin: 0; border-color: #348eda; border-style: solid; border-width: 10px 20px;">Button Link</a>
									</td>
								</tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
										Closing Text
									</td>
								</tr></table></td>
					</tr></table><div class="footer" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; clear: both; color: #999; margin: 0; padding: 20px;">
					<table width="100%" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="aligncenter content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; vertical-align: top; color: #999; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top"></td>
						</tr></table></div></div>
		</td>
		<td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
	</tr></table></body>
</html>`
var dataTableTwo = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>New Assignment</title>
  <style type="text/css">
    /* reset */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    nav,
    section,
    summary {
      display: block
    }

    audio,
    canvas,
    video {
      display: inline-block;
      *display: inline;
      *zoom: 1
    }

    audio:not([controls]) {
      display: none;
      height: 0
    }

    [hidden] {
      display: none
    }

    html {
      font-size: 100%;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%
    }

    html,
    button,
    input,
    select,
    textarea {
      font-family: sans-serif
    }

    body {
      margin: 0
    }

    a:focus {
      outline: thin dotted
    }

    a:active,
    a:hover {
      outline: 0
    }

    h1 {
      font-size: 2em;
      margin: 0 0.67em 0
    }

    h2 {
      font-size: 1.5em;
      margin: 0 0 .83em 0
    }

    h3 {
      font-size: 1.17em;
      margin: 1em 0
    }

    h4 {
      font-size: 1em;
      margin: 1.33em 0
    }

    h5 {
      font-size: .83em;
      margin: 1.67em 0
    }

    h6 {
      font-size: .75em;
      margin: 2.33em 0
    }

    abbr[title] {
      border-bottom: 1px dotted
    }

    b,
    strong {
      font-weight: bold
    }

    blockquote {
      margin: 1em 40px
    }

    dfn {
      font-style: italic
    }

    mark {
      background: #ff0;
      color: #000
    }

    p,
    pre {
      margin: 1em 0
    }

    code,
    kbd,
    pre,
    samp {
      font-family: monospace, serif;
      _font-family: 'courier new', monospace;
      font-size: 1em
    }

    pre {
      white-space: pre;
      white-space: pre-wrap;
      word-wrap: break-word
    }

    q {
      quotes: none
    }

    q:before,
    q:after {
      content: '';
      content: none
    }

    small {
      font-size: 75%
    }

    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline
    }

    sup {
      top: -0.5em
    }

    sub {
      bottom: -0.25em
    }

    dl,
    menu,
    ol,
    ul {
      margin: 1em 0
    }

    dd {
      margin: 0 0 0 40px
    }

    menu,
    ol,
    ul {
      padding: 0 0 0 40px
    }

    nav ul,
    nav ol {
      list-style: none;
      list-style-image: none
    }

    img {
      border: 0;
      -ms-interpolation-mode: bicubic
    }

    svg:not(:root) {
      overflow: hidden
    }

    figure {
      margin: 0
    }

    form {
      margin: 0
    }

    fieldset {
      border: 1px solid #c0c0c0;
      margin: 0 2px;
      padding: .35em .625em .75em
    }

    legend {
      border: 0;
      padding: 0;
      white-space: normal;
      *margin-left: -7px
    }

    button,
    input,
    select,
    textarea {
      font-size: 100%;
      margin: 0;
      vertical-align: baseline;
      *vertical-align: middle
    }

    button,
    input {
      line-height: normal
    }

    button,
    html input[type="button"],
    input[type="reset"],
    input[type="submit"] {
      -webkit-appearance: button;
      cursor: pointer;
      *overflow: visible
    }

    button[disabled],
    input[disabled] {
      cursor: default
    }

    input[type="checkbox"],
    input[type="radio"] {
      box-sizing: border-box;
      padding: 0;
      *height: 13px;
      *width: 13px
    }

    input[type="search"] {
      -webkit-appearance: textfield;
      -moz-box-sizing: content-box;
      -webkit-box-sizing: content-box;
      box-sizing: content-box
    }

    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-decoration {
      -webkit-appearance: none
    }

    button::-moz-focus-inner,
    input::-moz-focus-inner {
      border: 0;
      padding: 0
    }

    textarea {
      overflow: auto;
      vertical-align: top
    }

    table {
      border-collapse: collapse;
      border-spacing: 0
    }

    /* custom client-specific styles including styles for different online clients */
    .ReadMsgBody {
      width: 100%;
    }

    .ExternalClass {
      width: 100%;
    }

    /* hotmail / outlook.com */
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
      line-height: 100%;
    }

    /* hotmail / outlook.com */
    table,
    td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    /* Outlook */
    #outlook a {
      padding: 0;
    }

    /* Outlook */
    img {
      -ms-interpolation-mode: bicubic;
      display: block;
      outline: none;
      text-decoration: none;
    }

    /* IExplorer */
    body,
    table,
    td,
    p,
    a,
    li,
    blockquote {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      font-weight: normal !important;
    }

    .ExternalClass td[class="ecxflexibleContainerBox"] h3 {
      padding-top: 10px !important;
    }

    /* hotmail */
    /* email template styles */
    h1 {
      display: block;
      font-size: 26px;
      font-style: normal;
      font-weight: normal;
      line-height: 100%;
    }

    h2 {
      display: block;
      font-size: 20px;
      font-style: normal;
      font-weight: normal;
      line-height: 120%;
    }

    h3 {
      display: block;
      font-size: 17px;
      font-style: normal;
      font-weight: normal;
      line-height: 110%;
    }

    h4 {
      display: block;
      font-size: 18px;
      font-style: italic;
      font-weight: normal;
      line-height: 100%;
    }

    .flexibleImage {
      height: auto;
    }

    table[class=flexibleContainerCellDivider] {
      padding-bottom: 0 !important;
      padding-top: 0 !important;
    }

    body,
    #bodyTbl {
      background-color: #E1E1E1;
    }

    #emailHeader {
      background-color: #E1E1E1;
    }

    #emailBody {
      background-color: #FFFFFF;
    }

    #emailFooter {
      background-color: #E1E1E1;
    }

    .textContent {
      color: #8B8B8B;
      font-family: Helvetica;
      font-size: 16px;
      line-height: 125%;
      text-align: Left;
    }

    .textContent a {
      color: #205478;
      text-decoration: underline;
    }

    .emailButton {
      background-color: #205478;
      border-collapse: separate;
    }

    .buttonContent {
      color: #FFFFFF;
      font-family: Helvetica;
      font-size: 18px;
      font-weight: bold;
      line-height: 100%;
      padding: 15px;
      text-align: center;
    }

    .buttonContent a {
      color: #FFFFFF;
      display: block;
      text-decoration: none !important;
      border: 0 !important;
    }

    #invisibleIntroduction {
      display: none;
      display: none !important;
    }

    /* hide the introduction text */
    /* other framework hacks and overrides */
    span[class=ios-color-hack] a {
      color: #275100 !important;
      text-decoration: none !important;
    }

    /* Remove all link colors in IOS (below are duplicates based on the color preference) */
    span[class=ios-color-hack2] a {
      color: #205478 !important;
      text-decoration: none !important;
    }

    span[class=ios-color-hack3] a {
      color: #8B8B8B !important;
      text-decoration: none !important;
    }

    /* phones and sms */
    .a[href^="tel"],
    a[href^="sms"] {
      text-decoration: none !important;
      color: #606060 !important;
      pointer-events: none !important;
      cursor: default !important;
    }

    .mobile_link a[href^="tel"],
    .mobile_link a[href^="sms"] {
      text-decoration: none !important;
      color: #606060 !important;
      pointer-events: auto !important;
      cursor: default !important;
    }

    /* responsive styles */
    @media only screen and (max-width: 480px) {
      body {
        width: 100% !important;
        min-width: 100% !important;
      }

      table[id="emailHeader"],
      table[id="emailBody"],
      table[id="emailFooter"],
      table[class="flexibleContainer"] {
        width: 100% !important;
      }

      td[class="flexibleContainerBox"],
      td[class="flexibleContainerBox"] table {
        display: block;
        width: 100%;
        text-align: left;
      }

      td[class="imageContent"] img {
        height: auto !important;
        width: 100% !important;
        max-width: 100% !important;
      }

      img[class="flexibleImage"] {
        height: auto !important;
        width: 100% !important;
        max-width: 100% !important;
      }

      img[class="flexibleImageSmall"] {
        height: auto !important;
        width: auto !important;
      }

      table[class="flexibleContainerBoxNext"] {
        padding-top: 10px !important;
      }

      table[class="emailButton"] {
        width: 100% !important;
      }

      td[class="buttonContent"] {
        padding: 0 !important;
      }

      td[class="buttonContent"] a {
        padding: 15px !important;
      }
    }
  </style>
  <!--
      MS Outlook custom styles
    -->
  <!--[if mso 12]>
      <style type="text/css">
        .flexibleContainer{display:block !important; width:100% !important;}
      </style>
    <![endif]-->
  <!--[if mso 14]>
      <style type="text/css">
        .flexibleContainer{display:block !important; width:100% !important;}
      </style>
    <![endif]-->
</head>

<body bgcolor="#E1E1E1" leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">
  <center style="background-color:#E1E1E1;">
    <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTbl" style="table-layout: fixed;max-width:100% !important;width: 100% !important;min-width: 100% !important;">
      <tr>
        <td align="center" valign="top" id="bodyCell">

          <table bgcolor="#E1E1E1" border="0" cellpadding="0" cellspacing="0" width="500" id="emailHeader">
            <tr>
              <td align="center" valign="top">

                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td align="center" valign="top">

                      <table border="0" cellpadding="10" cellspacing="0" width="500" class="flexibleContainer">
                        <tr>
                          <td valign="top" width="500" class="flexibleContainerCell">

                            <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
                              <tr>
                                <td align="left" valign="middle" id="invisibleIntroduction" class="flexibleContainerBox" style="display:none;display:none !important;">
                                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
                                    <tr>
                                      <td align="left" class="textContent">
                                        <div style="font-family:Helvetica,Arial,sans-serif;font-size:13px;color:#828282;text-align:center;line-height:120%;">
                                          Here you can put short introduction of your email template.
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>
                </table>

              </td>
            </tr>
          </table>

          <table bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" width="500" id="emailBody">

            <tr>
              <td align="center" valign="top">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="color:#FFFFFF;" bgcolor="#2E7D32">
                  <tr>
                    <td align="center" valign="top">
                      <table border="0" cellpadding="0" cellspacing="0" width="500" class="flexibleContainer">
                        <tr>
                          <td align="center" valign="top" width="500" class="flexibleContainerCell">
                            <table border="0" cellpadding="30" cellspacing="0" width="100%">
                              <tr>
                                <td align="center" valign="top" class="textContent">
                                  <h1 style="color:#FFFFFF;line-height:100%;font-family:Helvetica,Arial,sans-serif;font-size:35px;font-weight:normal;margin-bottom:5px;text-align:center;">*Name of Organization*</h1>
                                  <h2 style="text-align:center;font-weight:normal;font-family:Helvetica,Arial,sans-serif;font-size:23px;margin-bottom:10px;color:#C9BC20;line-height:135%;">[VendorName]</h2>
                                  <div style="text-align:center;font-family:Helvetica,Arial,sans-serif;font-size:15px;margin-bottom:0;color:#FFFFFF;line-height:135%;">Hello [VendorContact], You have been assigned the following assessment: [AssessmentName] to complete on behalf of your organization. </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" valign="top">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td align="center" valign="top">
                      <table border="0" cellpadding="0" cellspacing="0" width="500" class="flexibleContainer">
                        <tr>
                          <td align="center" valign="top" width="500" class="flexibleContainerCell">
                            <table border="0" cellpadding="30" cellspacing="0" width="100%">
                              <tr>
                                <td align="center" valign="top">

                                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                      <td valign="top" class="textContent">
                                        <h3 style="color:#5F5F5F;line-height:125%;font-family:Helvetica,Arial,sans-serif;font-size:20px;font-weight:normal;margin-top:0;margin-bottom:3px;text-align:left;">Assessment Information</h3>
                                        <div style="text-align:left;font-family:Helvetica,Arial,sans-serif;font-size:15px;margin-bottom:0;margin-top:3px;color:#5F5F5F;line-height:135%;">This assessment is designed to help us meet and maintain compliance to industry regulations and security expectations. Click the link below to access and complete the assessment. Please do so by [DueDate]. If you have any questions, feel free to reach out to *person@org.com*</div>
                                      </td>
                                    </tr>
                                  </table>

                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td align="center" valign="top">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#F8F8F8">
                  <tr>
                    <td align="center" valign="top">
                      <table border="0" cellpadding="0" cellspacing="0" width="500" class="flexibleContainer">
                        <tr>
                          <td align="center" valign="top" width="500" class="flexibleContainerCell">
                            <table border="0" cellpadding="30" cellspacing="0" width="100%">
                              <tr>
                                <td align="center" valign="top">
                                  <table border="0" cellpadding="0" cellspacing="0" width="50%" class="emailButton" style="background-color: #2E7D32;">
                                    <tr>
                                      <td align="center" valign="middle" class="buttonContent" style="padding-top:15px;padding-bottom:15px;padding-right:15px;padding-left:15px;">
                                        <span style="color:#FFFFFF;text-decoration:none;font-family:Helvetica,Arial,sans-serif;font-size:20px;line-height:135%; cursor: pointer; target="_blank">Click here to complete [AssessmentUrl]</span>
                                      </td>
                                    </tr>
                                  </table>

                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

          </table>

          <!-- footer -->
          <table bgcolor="#E1E1E1" border="0" cellpadding="0" cellspacing="0" width="500" id="emailFooter">
            <tr>
              <td align="center" valign="top">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td align="center" valign="top">
                      <table border="0" cellpadding="0" cellspacing="0" width="500" class="flexibleContainer">
                        <tr>
                          <td align="center" valign="top" width="500" class="flexibleContainerCell">
                            
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <!-- // end of footer -->

        </td>
      </tr>
    </table>
  </center>
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
templates.push(vendorAssessment, cancelled, dataTable, dataTableTwo, dataTableThree, dataTableFour, basicEmail, niceTable, )

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




