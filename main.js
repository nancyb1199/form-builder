// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------
var fields = document.getElementById("fields")

for (let i=0; i < formData.length; i++){

  if( formData[i].type == "text" || formData[i].type == "email"){

    var newInput = document.createElement("input");
    newInput.setAttribute("type", formData[i].type);
    newInput.setAttribute("name", formData[i].id);
    newInput.setAttribute("option", formData[i].options);
    newInput.setAttribute("placeholder", formData[i].label);
    fields.appendChild(newInput);
  }
  else if( formData[i].type == "select"){

    var newSelect = document.createElement("select");
    newSelect.setAttribute("type", formData[i].type);
    newSelect.setAttribute("name", formData[i].id);
    newSelect.setAttribute("options", formData[i].options);
    newSelect.setAttribute("placeholder", formData[i].label);
    fields.appendChild(newSelect);
  }
  else if (formData[i].type == "textarea"){

    var newTextArea = document.createElement("textarea");
    newTextArea.setAttribute("type", formData[i].type);
    newTextArea.setAttribute("name", formData[i].id);
    newTextArea.setAttribute("option", formData[i].options);
    newTextArea.setAttribute("placeholder", formData[i].label);
    newTextArea.setAttribute("rows", 5);
    fields.appendChild(newTextArea);
  }
  else{  /* type = tel */

    var newTel = document.createElement("input");
    newTel.setAttribute("type", formData[i].type);
    newTel.setAttribute("name", formData[i].id);
    newTel.setAttribute("option", formData[i].options);
    newTel.setAttribute("placeholder", formData[i].label);
    fields.appendChild(newTel);
  }


console.log(newInput);



} /* i loop */
