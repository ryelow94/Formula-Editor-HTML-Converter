var myHeaders = new Headers();
myHeaders.append("content-type", "application/json");
myHeaders.append("Cookie", ".ASPXAUTH=C38473E3E56E7EF52C8A0B58FCDA1F9D453110CDA80974786CAE71084B8B65FB253708133F14C8F0242EFECDCA0FC97E0FCEFA0E68C15C37BB35084674B2DB15F79208A6C3928F056A71239B7CC80DE64E470EFF3369D7CAEAB5DA7184483B0155EB7EC7FBF4F1B1CDAECD6794594C29205C2E2C560F7D972FCD585E7DD0DBEC11A457CFD61DD2D3069B813DC71D34662B6D5266FABBBD6B456FBEB55AEA6F0CCCAF324DC5344C4608FEAFCCF2F206BB029B8D29C0AD4036A5FFB2D08AE22D631B85770AF431D090C7FCA5B6A4AEA434; NGSecure=rd1o00000000000000000000ffff0a62c21fo4443");

var raw = JSON.stringify({
  "username": "ryan.logan",
  "password": "Boxingcoco123!"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://ryanlogan-personal.keylightgrc.com:4443/SecurityService/Login", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));




  // var myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "UpdateRecord": {
      "componentId": "10253",
      "dynamicRecord": {
        "Id": "10",
        "FieldValues": {
          "KeyValuePair": {
            "key": "5446",
            "value": {
              "_i:type": "a:dateTime",
              "__text": "2021-09-21T11:02:46"
            }
          }
        },
        "_xmlns:i": "http://www.w3.org/2001/XMLSchema-instance",
        "_xmlns:a": "http://www.w3.org/2001/XMLSchema"
      }
    }
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://ryanlogan-personal.keylightgrc.com:4443/ComponentService/UpdateRecord", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
 
  