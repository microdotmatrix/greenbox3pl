function validateEmail5279830000170702029() {
  var form = document.forms["WebToLeads5279830000170702029"];
  var emailFld = form.querySelectorAll("[ftype=email]");
  var i;
  for (i = 0; i < emailFld.length; i++) {
    var emailVal = emailFld[i].value;
    if (emailVal.replace(/^\s+|\s+$/g, "").length != 0) {
      var atpos = emailVal.indexOf("@");
      var dotpos = emailVal.lastIndexOf(".");
      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
        alert("Please enter a valid email address. ");
        emailFld[i].focus();
        return false;
      }
    }
  }
  return true;
}

export function checkMandatory5279830000170702029() {
  var mndFileds = new Array(
    "Company",
    "First Name",
    "Last Name",
    "Email",
    "Phone"
  );
  var fldLangVal = new Array(
    "Company",
    "First\x20Name",
    "Last\x20Name",
    "Email",
    "Phone"
  );
  for (i = 0; i < mndFileds.length; i++) {
    var fieldObj =
      document.forms["WebToLeads5279830000170702029"][mndFileds[i]];
    if (fieldObj) {
      if (fieldObj.value.replace(/^\s+|\s+$/g, "").length == 0) {
        if (fieldObj.type == "file") {
          alert("Please select a file to upload.");
          fieldObj.focus();
          return false;
        }
        alert(fldLangVal[i] + " cannot be empty.");
        fieldObj.focus();
        return false;
      } else if (fieldObj.nodeName == "SELECT") {
        if (fieldObj.options[fieldObj.selectedIndex].value == "-None-") {
          alert(fldLangVal[i] + " cannot be none.");
          fieldObj.focus();
          return false;
        }
      } else if (fieldObj.type == "checkbox") {
        if (fieldObj.checked == false) {
          alert("Please accept  " + fldLangVal[i]);
          fieldObj.focus();
          return false;
        }
      }
      try {
        if (fieldObj.name == "Last Name") {
          name = fieldObj.value;
        }
      } catch (e) {}
    }
  }
  if (!validateEmail5279830000170702029()) {
    return false;
  }
  var urlparams = new URLSearchParams(window.location.search);
  if (urlparams.has("service") && urlparams.get("service") === "smarturl") {
    var webform = document.getElementById("webform5279830000170702029");
    var service = urlparams.get("service");
    var smarturlfield = document.createElement("input");
    smarturlfield.setAttribute("type", "hidden");
    smarturlfield.setAttribute("value", service);
    smarturlfield.setAttribute("name", "service");
    webform.appendChild(smarturlfield);
  }
  document
    .querySelector(".crmWebToEntityForm .formsubmit")
    .setAttribute("disabled", true);
}
function tooltipShow5279830000170702029(el) {
  var tooltip = el.nextElementSibling;
  var tooltipDisplay = tooltip.style.display;
  if (tooltipDisplay == "none") {
    var allTooltip = document.getElementsByClassName("zcwf_tooltip_over");
    for (i = 0; i < allTooltip.length; i++) {
      allTooltip[i].style.display = "none";
    }
    tooltip.style.display = "block";
  } else {
    tooltip.style.display = "none";
  }
}
