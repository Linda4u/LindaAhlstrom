// This function can be passed
//     *an ID got an html element
//     *the page it's changing
//     *the color you want to tab to update
// It updates the color of the tabs and the display of the tabs
function openPage(elementId, page, color) {
  //Name my variables
  var i, tabcontent, tablinks;
  // Get html elements with the class name "tabcontent" and set tabcontent variable
  tabcontent = document.getElementsByClassName("tabcontent");
  // Get html elements with the class name "tablink" and set tablink variable
  tablinks = document.getElementsByClassName("tablink");
  // loop through every element in the tabcontent variable, set the display to none
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // loop through every element in the tablinks variable, set the background color to empty
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  // Get the element with the id of the elementId we passed in and set the display to block
  document.getElementById(elementId).style.display = "block";
  //Set the background color of the tab to the color we passed in
  page.style.backgroundColor = color;
  let dispage;

  const tabname = elementId;
  //if (tabname = "defaultOpen") { dispage = 'index'; } else { dispage = tabname; }
  tabname.innerHTML = "hi" + dispage + "!"

  window.location = elementId + '.html'


}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
