const addbtn=document.getElementById('add');
const removebtn=document.getElementById('remove');
const checkbox=document.getElementById('done');
const iteminput=document.getElementById('task');
const parent=document.getElementById('wrap');
const time1=document.getElementById('time1');
const time2=document.getElementById('time2');

let date=new Date();
let currentdate=date.toLocaleDateString();
let minute=date.toLocaleTimeString();
time1.innerHTML=`time : ${minute}`;
time2.innerHTML=`date : ${currentdate}`;



let id=1;
let data='';
iteminput.addEventListener('input',()=>{
    data=iteminput.value;
})
 let arr=JSON.parse(localStorage.getItem("store")) || [];
function removetodo(id)
{
   
    store=arr.splice(id, 1);
    localStorage.setItem("store", JSON.stringify(arr)); // update todo in localstorage
    kartik(); // re-render todos

}
function cuttodo(id)
{
    let element=document.getElementById(id);
   element.children[1].classList.toggle('completed');
}

function kartik(){
      parent.innerHTML = '';
let god=JSON.parse(localStorage.getItem("store"));
god.map((val,id)=>{
    display(val,id)
})
function display(val,id){
let div=document.createElement('div');
div.setAttribute('class','display');
div.setAttribute('id',id);
div.innerHTML=`  <p id="kalu">${id+1} . </p>

<h3 id="data">${val}</h3>
            <input type="checkbox" onClick="cuttodo('${id}')"  name="done" id="done">
            <button onClick="removetodo('${id}')" id="remove">Remove</button>`
parent.appendChild(div);
iteminput.value='';
}
}

addbtn.addEventListener('click',()=>{
 


  if(data === ''){
        alert('input field is empty');
        return
    }
arr.push(data);
localStorage.setItem("store",JSON.stringify(arr));

kartik();
// return ;

})
kartik();
 console.log(arr);




