function idCheck(){
    var exp = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,10}$/;
    var id = document.getElementById("idForm");
    var idResult = document.getElementById("idCkResult");
    if(id.value.length==0){
        idResult.style.color = "red";
        idResult.innerHTML = "아이디는 필수 입니다."
    } else if(id.value.length<6 || id.value.length>10 || !id.value.match(exp)){
        idResult.style.color = "red";
        idResult.innerHTML = "유효하지 않은 형식입니다."
    } else if(id.value.length>=6 && id.value.length<=10 && id.value.match(exp)){
        idResult.style.color = "green";
        idResult.innerHTML = "좋아요 Good"
    } 
}
function pwdCheck(){
    // 정규식(RegularExpression)
    var exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;
    var pwd = document.getElementById("pwd");
    var pwdCheck = document.getElementById("pwdCkResult");
    if(pwd.value.match(exp)){
        pwdCheck.style.color="green";
        pwdCheck.innerHTML = "유효한 비밀번호형식";
    } else{
        pwdCheck.style.color="red";
        pwdCheck.innerHTML = "유효한 비밀번호형식이 아닙니다.";
    }
}
function checkReset(){
    document.getElementById("pwdCkResult").innerHTML = "";
}
function pwdConfirm(){
    var pwd = document.getElementById("pwd").value;
    var pwdConfirm = document.getElementById("pwdConfirm").value;
    var confirmMsg = document.getElementById("confirmMsg");
    if(pwd==pwdConfirm){
        confirmMsg.style.color = "green";
        confirmMsg.innerHTML = "비밀번호 일치!!";
    } else{
        confirmMsg.style.color = "red";
        confirmMsg.innerHTML = "비밀번호 불일치!!";
    }
}
function phoneCheck(){
    var exp = /^\d{3}-\d{4}-\d{4}$/;
    var phone = document.getElementById("phone");
    var phoneCheck = document.getElementById("phoneCheck");
    if(phone.value.match(exp)){
        phoneCheck.style.color = "green";
        phoneCheck.innerHTML = "유효한 전화번호 형식";
    } else {
        phoneCheck.style.color = "red";
        phoneCheck.innerHTML = "유효하지 않은 전화번호 형식";
    }
}
function emailSel(value){
    document.getElementById("emailSelected").value = value;
}

