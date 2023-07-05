function replaceSpaces() {
    let text = document.getElementById("textInput").value;
    let replacedText = text.replace(/ /g, " 🤸🏻‍♀️ ");
    document.getElementById("result").textContent = replacedText;
}

function copyContent(){
    let copyText = document.getElementById("result");
    let range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("text copied");
}

function clearText(){
    document.getElementById("textInput").value = "";
    document.getElementById("result").textContent = "";
}

