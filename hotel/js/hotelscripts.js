
// what is the path to the JSON file?
const apiURL = "js/hoteldata.js";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);

    for (i = 0; i < myList.length; i++) {

    let myImageTag = document.createElement("img");
    myImageTag.src = myList[i].photo;
    console.log(myList[i].photo);

    let myCaptionTag = document.createElement("figcaption");
    myCaptionTag.textContent = myList[i].name;
    console.log(myList[i].name);

    let myFigureTag = document.createElement("figure");
    myFigureTag.appendChild(myImageTag);
    myFigureTag.appendChild(myCaptionTag);

    let theIconleftTag = document.createElement("ion-icon");
    theIconleftTag.name = "car-outline";

    let theAddress1Tag = document.createElement("p");
    theAddress1Tag.textContent = myList[i].address[0];
    console.log(myList[i].address[0]);

    let theAddress2Tag = document.createElement("p");
    theAddress2Tag.textContent = myList[i].address[1];
    console.log(myList[i].address[1]);

    let theIconRightTag = document.createElement("ion-icon");
    theIconRightTag.name = "call-outline";

    let thePhoneTag = document.createElement("p");
    thePhoneTag.textContent = myList[i].phone;
    console.log(myList[i].phone);

    // span elements 

    let theSpanLeftTag = document.createElement("span");
    theSpanLeftTag.appendChild(theIconleftTag);
    theSpanLeftTag.appendChild(theAddress1Tag);
    theSpanLeftTag.appendChild(theAddress2Tag);

    let theSpanRightTag = document.createElement("span");
    theSpanRightTag.appendChild(theIconRightTag);
    theSpanRightTag.appendChild(thePhoneTag);


    let myDivTag = document.createElement("div");
    myDivTag.appendChild(theSpanLeftTag);
    myDivTag.appendChild(theSpanRightTag);

    // section
    let mySectionTag = document.createElement("section");
    mySectionTag.className = "card";
    mySectionTag.appendChild(myFigureTag);
    mySectionTag.appendChild(myDivTag);
   


    
    //document.getElementById('inventoryWrapper').appendChild(myFigureTag);
    document.getElementById('inventoryWrapper').appendChild(mySectionTag);
    
   
  }
    
    
    
    
    
    
}); //end of "then" fat arrow function