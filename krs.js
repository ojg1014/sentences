function codeText(num) {
  let txt = document.getElementsByClassName("text")[num].innerText;
  let textArea = document.createElement("textarea");        
  document.body.appendChild(textArea);
  textArea.value = txt;
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
};

let a = 0;
while(a < krs.length) {
  document.write('<div>' + '<li class="text">' + krs[a][0] + '</li>' + '</div>');
  document.write('<button onclick="codeText('+a+')">Click to copy</button>');
  a = a + 1;
};