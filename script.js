let list = [];

function createItem() {
	const name = document.getElementById("name").value;
	const scname = document.getElementById("scname").value;
	const img = document.getElementById("img").value;
	if(name && scname && img){
		list.push({name, scname, img}); //pushing a set or record
	}else{
		alert("Values can't be empty!");
	}
	displayItems();
}


function displayItems() {
	const view = document.getElementById("view");
	view.innerHTML = "";
	list.forEach((record,index)=>{
		const div = document.createElement("div");
		div.setAttribute("class", "record");
		const name = record.name;
		const scname = record.scname;
		const img = record.img;
		const content = `<h1>${name}</h1>
						<img src=${img} alt=""><br>
						<i>${scname}</i><br>
						<div>
							<button onclick="deleteItem(${index})">DELETE</button>
							<button onclick="updateItem(${index})">UPDATE</button>
						</div>`;
		div.innerHTML = content;
		view.appendChild(div);
	})
}

function deleteItem(index){
	list.splice(index,1);
	displayItems();
}

function updateItem(index){
	const newName = prompt("New Name", list[index].name);
	const newScname = prompt("New Scientific Name", list[index].scname);
	const newImg = prompt("New Image Link", list[index].img);
	if(newName && newScname && newImg){ //checking if valid (not empty and not null)
		list[index].name = newName;
		list[index].scname = newScname;
		list[index].img = newImg;
	}
	displayItems();
}