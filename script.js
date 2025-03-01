const completebutton = document.querySelectorAll('.completed-btn');
 
for (let i=0; i<completebutton.length; i++){
  const  cmpltbtn= completebutton[i];

    completitem =   cmpltbtn.addEventListener('click',function(value){
   alert('Board Updated Succenfull')
   
   this.Disabled= true;
   this.classList.add("bg-gray-300");

 const tasknmbr=  document.getElementById('task-nmbr');
 const valuee = value.target.innerText ==='' ? 1 : -1;
 const taskNmbeInt =parseInt(tasknmbr.innerText);
 const newtastNumber = Math.max(0, taskNmbeInt + valuee);
 tasknmbr.innerText = newtastNumber;

 
 if(taskNmbeInt<=1){
  alert('terwe')
 };

//   nev number pluss add 
const nevNumber = document.getElementById('nev-number')
        const nevNumPlus = value.target.innerText==='' ?-1: 1;
        const nevNumInt = parseInt(nevNumber.innerText);
        const newNaveNumber = Math.max(0, nevNumInt+nevNumPlus);
        nevNumber.innerText= newNaveNumber;

        // card messege import section start 

    const cardDiv =document.getElementById('card-div');
    const todayDate = new Date();
    const hour= todayDate.getHours()||12;
    const minut = todayDate.getMinutes();
    const socends = todayDate.getSeconds();
    const tomeZon = todayDate.getHours()>=12 ? "PM": "AM";
    const newtTime = `
    ${hour}: ${minut}:${socends}:${tomeZon}
    `



    const div = document.createElement("div");
    
    div.classList.add('bg-[#c8d6e5]');
    div.classList.add('rounded-md');
    div.classList.add('mx-2');
    div.classList.add('px-2');
    div.innerHTML=`

    <h1 class="text-black text-center my-2 ">You Have Complete The Task 
    ${newtTime}
    </h1>
    `
    cardDiv.appendChild(div);
    if(tasknmbr.length<=0){
      alert('lkd')
       }
    })
}

// card section start
const cardBtn = document.getElementById('card-btn').addEventListener('click',function(){
 document.getElementById('card-div').innerHTML ='';
});


// discover Selection
document.getElementById('discover-div').addEventListener('click', function(){
  console.log('kls');
  window.location.href = "./index1.html";
})

// discover-time section 

const innetDate =document.getElementById('discover-time');
const dscTime =  new Date();
const newTime = dscTime.toDateString();
console.log(newTime);
innetDate.innerText = newTime;



// bg color section 

document.getElementById('bg-change-btn').addEventListener('click',function(){
 const random = Math.random()*2+1;
 console.log(random);
})

