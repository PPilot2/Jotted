function doDL(s){
    function dataUrl(data) {return "data:x-application/text," + escape(data);}
    window.open(dataUrl(s));
}
var textarea = $('#area');
$("#popup").click(function(){

// To show it
textarea.show();

});


// To get the value
var value = textarea.val();
$('#textarea').keyup(function() {
$('#textarea-show').html($(this).text());
});

$('#bold_btn').on('click', function() {
//$('#textarea, #textarea-show').toggleClass('bold');
document.execCommand('bold');
var text = document.getElementById('textarea').innerHTML;
$('#textarea-show').html(text);
});
$('#italic_btn').on('click', function() {
//$('#textarea, #textarea-show').toggleClass('italic');
document.execCommand('italic');
var text = document.getElementById('textarea').innerHTML;
$('#textarea-show').html(text);
});
$('#underline_btn').on('click', function() {
//$('#textarea, #textarea-show').toggleClass('italic');
document.execCommand('underline');
var text = document.getElementById('textarea').innerHTML;
$('#textarea-show').html(text);
});
// For selecting a random number in a range:
function randomNumberBetween(iLowest,iHighest)
{
    var iChoices = iHighest	- iLowest + 1;
    return Math.floor(Math.random() * iChoices + iLowest);
}

// Fonts with spaces need quotes in CSS
function quoteFontsContainingSpaces(font)
{
if (font.includes(" "))
{
    font = `"${font}"`;
}
return font;
}

let sentence = document.getElementById("sentence");
let selectorFontList = document.getElementById("selectorFontList");

function onFontChangeEventHandler(e)
{
let fontString = quoteFontsContainingSpaces(this.value);
sentence.style.fontFamily = fontString;
}

selectorFontList.addEventListener("change", onFontChangeEventHandler);

let btnChangeRandom = document.getElementById("btnChangeRandom");

btnChangeRandom.addEventListener('click', function()
{
let rIndex = randomNumberBetween(0,selectorFontList.length - 1);
selectorFontList.selectedIndex = `${rIndex}`;
let event = new Event('change');
selectorFontList.dispatchEvent(event);
});
var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};
let startX, startY;

handleDragStart = function(event) {
startX = event.x;
startY = event.y;
}

handleDrag = function(event) {
if (event.clientX > 0 && event.clientY > 0) {
    event.srcElement.style.width = event.srcElement.clientWidth + (event.clientX - startX) + "px";
    startX = event.clientX;

    event.srcElement.style.height = event.srcElement.clientHeight + (event.clientY - startY) + "px";
    startY = event.clientY;
}
}