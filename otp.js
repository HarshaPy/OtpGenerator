var oriotp;
function otpGen(){
    var num1 = Math.floor(Math.random()*10);
    var num2 = Math.floor(Math.random()*10);
    var num3 =  Math.floor(Math.random()*10);
    var num4 =  Math.floor(Math.random()*10);
    oriotp = `${num1}${num2}${num3}${num4}`
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
    document.getElementById("num3").innerHTML = num3;
    document.getElementById("num4").innerHTML = num4;
    document.getElementById("otpContainer").style.display="flex";
}
function closeWin(){
    document.getElementById("otpContainer").style.display="none";
}

function submitOTP(){
    var userGivenInput = document.getElementById("inp").value;
    if(userGivenInput ==oriotp ){
        document.getElementById("status").innerHTML="Access Granted..";
        document.getElementById("status").style.color="green";
    }
    else{
        document.getElementById("status").innerHTML="Access Denied..";
        document.getElementById("status").style.color="red";
    }
}
