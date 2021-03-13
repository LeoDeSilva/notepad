//------------------------Get Elements------------------------------
note = document.getElementById("note")
title = document.getElementsByClassName("h")[0]

notes = {} 

//------------------------Format Commands------------------------------

function format(command, value){
    document.execCommand(command, false, value)
}
const inCode = function() {
  document.designMode = 'on'
  document.execCommand('insertHTML', false, `<div class="code">` + 'print("hello world")' + `</div>`)
  document.designMode = 'off'
}
const h = function(tag,type) {
  document.designMode = 'on'
  document.execCommand('insertHTML', false, `<${tag} class="${type}">` + window.getSelection().toString() + `</${tag}>`)
  document.designMode = 'off'
}


//------------------------Navbar Functions------------------------------

function openNav() {
  document.getElementById("mySidenav").style.width = "450px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//------------------------Debug Commands------------------------------

function print_html(){
    console.log(note.innerHTML)
}

setInterval(function(){
  console.log(title.innerHTML)
},1000)


//------------------------Storing Notes------------------------------

function get_notes(){
    //notes = JSON.parse(window.localStorage.getItem("notes"))
    t = title.innerHTML
    notes[t] = note.innerHTML
    console.log(notes)
    console.log("")
}

function save_HTML(){
    //get inner HTML
    text = note.innerHTML
    //save into dictionary with Titles
}



