function cpyFn() {
  /* Get the text field */
  var copyText = document.getElementById("output");

  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  /* Select the text field */
  // copyText.select();
  // copyText.setSelectionRange(0, 99999); /* For mobile devices */
  textArea.select();
  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + textArea.value);
  textArea.remove();
}

// cpyFn();
