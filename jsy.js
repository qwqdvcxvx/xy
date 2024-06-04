function y1() {
    var d212=document.getElementById("d212");
    var d211=document.getElementById("d211");
    if (d211.value.length<1||d212.value.length<1) {
        alert("账号或密码不能为空");
    }
    else if (d212.value.length>=1&&d212.value.length<6) {
        alert("密码长度不能小于6位！");
    }
    else{
        alert("登陆成功");
    }
}