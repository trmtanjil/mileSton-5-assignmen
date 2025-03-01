const completebutton = document.querySelectorAll('.completed-btn');
for (let i=0; i<completebutton.length; i++){
    cmpltbtn= completebutton[i];
 
    completitem =   cmpltbtn.addEventListener('click',function(value){
   alert('Board Updated Succenfull')
 const tasknmbr=  document.getElementById('task-nmbr');
 const valuee = value.target.innerText ==='' ?1 : -1;
 console.log(valuee);
 const taskNmbeInt =parseInt(tasknmbr.innerText);
 const newtastNumber = Math.max(0, taskNmbeInt + valuee);
 tasknmbr.innerText = newtastNumber;

  
   })
}