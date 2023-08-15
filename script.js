let btn = document.querySelector(".add");
let input = document.querySelector(".input");
let divtasks = document.querySelector(".tasks");
let items = {...localStorage};
let keys = Object.keys(items);

btn.onclick = () => {
   if (! input.value){
      return;
   }
   let task = document.querySelector(".input").value;
   let pra = document.createElement("div");
   let del_btn = document.createElement("button");
   let txt = document.createTextNode("Delete");
   pra.className = "task";
   del_btn.className = "Delete";
   let counter =  Date.now();
   window.localStorage.setItem(`task ${counter}`, task);
   let k = window.localStorage.getItem(`task ${counter}`);
   let text2 = document.createTextNode(k);
   pra.appendChild(text2);
   del_btn.appendChild(txt);
   pra.appendChild(del_btn);
   divtasks.appendChild(pra);
   input.value = ""
   del_btn.onclick = () => {
      divtasks.removeChild(pra);
      pra.removeChild(del_btn);
      window.localStorage.removeItem(`task ${counter}`)
   }
};


for (let index = 0; index < keys.length; index++) {
   let pra = document.createElement("div");
   let btn2 = document.createElement("button");
   let txt = document.createTextNode("Delete");
   pra.className = "task";
   btn2.className = "Delete";
   let k = window.localStorage.getItem(keys[index]);
   let text2 = document.createTextNode(k);
   pra.appendChild(text2);
   btn2.appendChild(txt);
   pra.appendChild(btn2);
   divtasks.appendChild(pra);
   btn2.onclick = () => {
      divtasks.removeChild(pra);
      pra.removeChild(btn2);
      window.localStorage.removeItem(keys[index]);
   }
}