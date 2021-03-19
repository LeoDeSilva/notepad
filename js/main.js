//------------------------Get Elements------------------------------
let note = document.getElementById("note")
let note_list = document.getElementById("list")
let title = document.getElementById("title")
let notes 
let index

if (load_from_local() == null){
	notes = []
}else{
	notes = load_from_local()
}

if (localStorage.getItem("index") == null){
	index = 0
}else{
	index = localStorage.getItem("index")
}

if (notes.length <= 0) {
	add_note()
}
get_note(index)
update_notes()

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

function delete_note(){
	notes.splice(index,1)
	update_notes()
	if (notes.length <= 0){
		add_note()
	}
	get_note(0) 
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
	console.log(notes)
	update_notes()
	save_to_local()
}

function save_to_local(){
	localStorage.setItem("notes",JSON.stringify(notes))
	localStorage.setItem("index",index)
}

function load_from_local(){
	return JSON.parse(localStorage.getItem("notes"))
}

setInterval(function (){
	save_HTML(index)
}, 1000)


//------------------------Navigation------------------------------

function open_login(){
	window.location = "login.html"
}
function open_home(){
	window.location = "index.html"
}
function open_register(){
	window.location = "register.html"
}

