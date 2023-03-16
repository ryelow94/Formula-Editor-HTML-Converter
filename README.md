# Formula-Editor-HTML-Converter

## Description 
### This app simplifies and streamlines the process of creating HTML code for use within NAVEX IRM. It also converts HTML code into a C# string that can be used within the NAVEX IRM Formula Engine to render HTML in a record.HTML files can also be imported into the app and copy/pasted into the RTF for editing and previewing.This app can also be used to create HTML templates for email notifications sent from IRM to it's users. The Rich Text Editor within the app includes many useful tools for editing HTML and CSS without needing very much knowledge of their syntax. For example, you can insert tables, links and lists, as well as edit spacing, alignment, font and more without writing any code.  

![App](/App%20Home%201.png)
![App Continued](/App%20Home%202.png) 

![C# String Generated in App](/C%23%20String%20Generated%20by%20app.png)

![HTML Output](/HTML%20output.png)

![Converted C# in Formula Engine](/Converted%20C%23%20in%20Formula%20Engine.png)

![HTML in IRM Record](/HTML%20in%20IRM%20record.png)

## Usage: 
### Select an HTML template from the cards and a C# string will be generated and copied to your clipboard. You will then be presented with an option to clear the string and start over, or copy the HTML to paste within the Rich Text Editor for editing. If you do not select a template, you can import an HTML file from your computer and press submit on the form below the text editor (note: you will need to choose an alias name to continue. This will be the reference to the field in IRM that will be rendering the HTML via the formula engine.) If you do not select a template or import an HTML file, you can simply write HTML code in the source tool of the Rich Text Editor/create HTML via the available tools (This would be similar to using Microsoft Word). Clearing the form using the red "Clear Form" button clears the alias value, but only clears the editor if the source tool is open. You can press the "New Page" icon in the text editor toolbar to clear it otherwise. For any questions relating to the functionality of the Rich Text Editor, you can select the "?" icon in the toolbar to see documentation relating to the "CKeditor." Finally, you can add template variables (surrounded by []) to any text area within the HTML to pull the data from other IRM fields within an instance. Just be sure to know that date/time fields will need to be converted to a string element if you intend to use one within the C# string. Example: 

![Date/Time variable to String Variable Example](/date%20to%20string.png)

## Limitations:
### Some HTML and CSS elements and attributes are not supported by the NAVEX IRM formula engine or certain email service providers (Outlook, Gmail, etc.). Be sure to reference supported elements/attributes for both IRM and major email providers to ensure consistency throughout. For example, CSS drop shadows and transitions are not supported by Microsoft Outlook even though they may render in IRM. It's a good idea to test any template by emailing it to yourself before suggesting it for customer use. Finally, since there is no way to add an image to an email notification that isn't a link to the image source, be ware of using links from the internet with HTML "a" tags. Links often change, break or are removed by their creators and will not render if this occurs.