const encryptBtn = document.querySelector('button');
let msg;
let shift;



function inAlpha(letter){
  const alpha=("abcdefghijklmnopqrstuvwxyz").split("");

  if(alpha.indexOf(letter)== -1){
    return false
  }
  else{
    return true
  }
  
}
function getNewLetter(letter,shift){
  const alpha=("abcdefghijklmnopqrstuvwxyz").split("");
  let res;
  currIndex= alpha.indexOf(letter);

  if(currIndex+shift < 25){
    res=alpha[currIndex+shift];
  }else{
    res=alpha[((currIndex+shift)-alpha.length)];
  }

  return res;
}


encryptBtn.onclick = function() {
  msg = (document.getElementById("msg").value).split("");
  shift= parseInt(document.getElementById("shift").value);
  
  if(msg !="" && shift!="" ){
    for(let i=0;i<msg.length;i++){
      if(inAlpha(msg[i])){
        msg[i]=getNewLetter(msg[i],shift);
      }
    }
    document.getElementById("final").innerHTML="New Message: "+ msg.join("");

    document.getElementById("msg").value = "";
    document.getElementById("shift").value = "";
  }
  else{
    document.getElementById("msg").value = "Please Enter message..";
    document.getElementById("shift").value = "Please enter a number..";
  }
}






