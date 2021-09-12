function calendarFilter(c) {
    var x, i;
    x = document.getElementsByClassName("calendar-event"); // all filter items class
    if (c == "all") c = "";
    var filtered = 0;
    for (i = 0; i < x.length; i++) {
      filterRemoveClass(x[i], "calendar-filter-show");
      if (x[i].className.indexOf(c) > -1){
          filterAddClass(x[i], "calendar-filter-show");
          filtered++
      }
    }
    var header = document.getElementById("calendar-filter-head");
    var headerVar = "";
    if (c == '') headerVar = "All";
    else if (c == 'calendar-filter-mandatory') headerVar = "Mandatory";
    else if (c == 'calendar-filter-social') headerVar = "Social";
    else headerVar = "Extra-Curricular";
    header.innerHTML = headerVar+" Events ("+filtered+")";
  }
  
  // Show filtered elements
  function filterAddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }
  
  // Hide elements that are not selected
  function filterRemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }
  
  // Add active class to the current control button (highlight it)
  var btnContainer = document.getElementById("calendar-filter-container");
  var btns = btnContainer.getElementsByClassName("calendar-filter-button");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("calendar-filter-button-active");
      current[0].className = current[0].className.replace(" calendar-filter-button-active", "");
      this.className += " calendar-filter-button-active";
    });
  }