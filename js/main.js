//------------------------Get Elements------------------------------
note = document.getElementById("note")
note_list = document.getElementById("list")
title = document.getElementsByClassName("h")[0]

notes = []
index = 0

if (notes.length <= 0) {
	add_note()
	get_note(0)
}

//------------------------Format Commands------------------------------

function format(command, value){
   document.execCommand(command, false, value)
}
const inCode = function() {
  //create code block with print("hello world")
  document.designMode = 'on'
  document.execCommand('insertHTML', false, `<div class="code">` + 'print("hello world")' + `</div>`)
  document.designMode = 'off'
}
const insert_tag_with_class = function(tag,type) {
  //create heading tag with highlighted text
  document.designMode = 'on'
  document.execCommand('insertHTML', false, `<${tag} class="${type}">` + window.getSelection().toString() + `</${tag}>`)
  document.designMode = 'off'
}
function insert_tag(tag){
	document.designMode = 'on'
	document.execCommand('insertHTML', false, `<${tag}>` + window.getSelection().toString() + `</${tag}>`)
	document.designMode = 'off'
}

//------------------------Navbar Functions------------------------------

function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
  document.getElementById("mySidenav").classList.add("shadow");
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").classList.remove("shadow");
}

//------------------------Debug Commands------------------------------

function print_html(){
    console.log(note.innerHTML)
}

//------------------------Storing Notes------------------------------

function add_note(){
	notes.push({"title":"Untitled", "content":""})
	update_notes()
	get_note(notes.length-1)
}

function update_notes(){
	note_list.innerHTML = ""
	for (let i = 0; i < notes.length; i++){
		note_list.innerHTML += `<a onclick="get_note(${i})" id="${i}" href="#">${notes[i]['title']}</a>`
	}
}

function get_note(i){
	title.innerHTML = notes[i]["title"]
	note.innerHTML = notes[i]["content"]
	index = i
	closeNav()
} 

function save_HTML(i){
	console.log(i)
	notes[i]["title"] = title.innerHTML
	if (notes[i]["title"].trim() == "") {
		notes[i]["title"] = "Untitled"
	}
	notes[i]["content"] = note.innerHTML
	update_notes()
}

setInterval(function (){
	save_HTML(index)
}, 1000)