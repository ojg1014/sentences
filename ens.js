function codeText(num) {
  let txt = document.getElementsByClassName("text")[num].innerText;
  let textArea = document.createElement("textarea");        
  document.body.appendChild(textArea);
  textArea.value = txt;
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
};
// 가상의 textarea를 만들어 li의 텍스트를 복사할 수 있게 한다.
let a = 0;
while(a < ens.length) {
  document.write('<div>' + '<li class="text">' + ens[a][0] + '</li>' + '</div>');
  document.write('<button onclick="codeText('+a+')">Click to copy</button>');
  a = a + 1;  
};