function idCheck(){
    var id = document.getElementById("idForm");
    var idResult = document.getElementById("idCkResult");
    if(id.value.length==0){
        idResult.style.color = "red";
        idResult.innerHTML = "아이디는 필수 입니다."
    } else if(id.value.length<6 || id.value.length>10){
        idResult.style.color = "red";
        idResult.innerHTML = "아이디를 6~10자로 입력하세요."
    } else{
        idResult.style.color = "green";
        idResult.innerHTML = "좋아요 Good"
    } }
