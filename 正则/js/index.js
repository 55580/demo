var reditMessage = document.getElementsByClassName("reditMessage"),
    myImooc = document.getElementById("myImooc"),
    detail = document.getElementsByClassName("detail"),
    username = document.getElementById("username"),
    passwd = document.getElementById("passwd"),
    confirmpwd = document.getElementById("confirmpwd"),
    uname = document.getElementById("uname"),
    idType = document.getElementById("idType"),
    userId = document.getElementById("userId"),
    email = document.getElementById("email"),
    phoneNum = document.getElementById("phoneNum"),
    confirm =document.getElementsByClassName("confirm"),
    str ="",
    pattern = "",
    btn = document.getElementById("btn"),
    text = document.getElementsByClassName("text"),
    confirmBox = document.getElementsByClassName("confirmBox"),
    pwd = document.getElementsByClassName("pwd"),
    nameDetail = document.getElementsByClassName("nameDetail"),
    confirmName = document.getElementsByClassName("confirmName"),
    selectedType = false,
    arr = [false,false,false,false,false];
    // 鼠标悬浮“我的IMOOC”显示详情
    myImooc.onmouseover = function(){
        detail[0].style.display = "block";
        myImooc.className = "showDetail";/*鼠标进入详细信息后，不退出*/
    }
    detail[0].onmouseover = function(){
        detail[0].style.display = "block"
    }
    detail[0].onmouseout = function(){
        detail[0].style.display = "none"
    }
    myImooc.onmouseleave = function(){
        detail[0].style.display = "none";
    }
    // 鼠标悬浮“姓名规则时”显示详情
    confirmName[0].onmouseover = function(){
        nameDetail[0].style.display = "block";
        confirmName[0].className = "confirmName showDetail";
    }
    confirmName[0].onmouseout = function(){
        nameDetail[0].style.display = "none";
    }
    nameDetail[0].onmouseover = function(){
        nameDetail[0].style.display = "block";
    }
    nameDetail[0].onmouseout = function(){
        nameDetail[0].style.display = "none";
    }
// 正则表达式
// var patt = {
//     usernameP:/^[a-zA-Z]\w{5-29}$/,
//     passwdP:/^\w.{6,20}$/,
//     uname:/^[\u4e00-\u9fa5]{2,15}$|^\w{3,13}$/,
//     userId:/^\d{18}$|^\d{17}x$/i,
//     email:/^[.^@]@[.^@]\.[.^@]$/,
//     phoneNum:/^1[3-9]{9}$/,
// }
// 调用正则函数
function regExe(str,pattern){
    var pattern = new RegExp(pattern);
    return pattern.test(str);
}
// 判断身份证是否被选中

// idType.onchange = function(){
//     if(idType.value=="personerId"){
//         alert("helloID");
//     }
// }
   

for( i =0;i<text.length;i++){
    text[i].onblur = function(){
        switch(this.title){
            case "用户名":
                Patter.usernamePattern();
                break;
            case "登录密码":
                Patter.passwdPattern();
                break;
            case "确认密码":
                Patter.confirmpwdPattern();
                break;
            case "姓名":
                Patter.unamePattern();
                break;
            case "证件号":
                Patter.userIdPattern();
                break;
            case "邮箱":
                Patter.emailPattern();
                break;
            case "手机号":
                Patter.phoneNumPattern();
                break;
        }
    }
}
// 验证证件号
// function userIdPattern(){
//     // confirm[3].style.color ="red";
//     idType.onchange = function(){
//         str = userId.value;
//         pattern = /^\d{18}$|^\d{17}x$/i;
//         if(idType.value=="personerId"){
//             confirm[3].innerHTML = "请输入18位身份证号码"
//             userId.onblur = function(){
//                 if(str==""){
//                     confirm[3].innerHTML = "证件号不能为空";
                    
//                 }
//                 else{
//                     if(regExe(str,pattern)){
//                         confirm[3].innerHTML = "身份证号正确";
                        
//                     }
//                     else{
//                         confirm[3].innerHTML = "请输入18位身份证号码";
                        
//                     }
//                     arr[3] = true;
//                 }
//             } 
//         }
//     }
    
// }
// 调用证件号验证
// 将校验放在一个对象里
var Patter = {
    usernamePattern: function(){
        str = username.value;
        pattern = /^[a-z]\w{5,29}$/i;
        if(str==""){
            confirm[0].innerHTML = "用户名不能为空";
        }
        else{
            if(!regExe(str,pattern)){
                confirm[0].innerHTML = "6-30位字母、数字或'_'；必须以字母开头";
            }
            else{
                confirm[0].innerHTML = "用户名正确";
                confirm[0].style.color = "green";
                arr[0] = true;
            }
        }
        },
    passwdPattern: function(){
            str = passwd.value;
            pattern = /^.{6,20}$/;
            var pattern1 = /^\d{6,20}$|^[a-zA-Z]{6,20}$|^\W{6,20}$/,
                pattern2 = /^[0-9a-z]{6,20}$/,
                pattern3 = /^[\W\w\d]{6,20}$/i;
                if(str==""){
                    // confirm[1].innerHTML = "";
                    pwd[0].innerHTML = "登录密码不能为空，密码为6-20位字母、数字或符号";
                    pwd[0].style.color = "red";
                    pwd[0].style.fontSize = "13px"
                    pwd[0].style.paddingLeft= "95px"
                    confirmBox[0].style.backgroundColor = "";
                    confirmBox[1].style.backgroundColor = "";
                    confirmBox[2].style.backgroundColor = ""; 
                    return;
                }
                if(!regExe(str,pattern)){
                    // confirm[1].innerHTML = "";
                    pwd[0].innerHTML = "密码为6-20位字母、数字或符号";
                    pwd[0].style.color = "red";
                    pwd[0].style.fontSize = "13px"
                    pwd[0].style.paddingLeft= "95px"
                    confirmBox[0].style.backgroundColor = "";
                    confirmBox[1].style.backgroundColor = "";
                    confirmBox[2].style.backgroundColor = "";
                    return;
                }
                else{
                    // confirm[1].innerHTML = "";
                     pwd[0].innerHTML = ""; 
                        if(regExe(str,pattern1)){
                            confirmBox[0].style.backgroundColor = "red";
                            confirmBox[1].style.backgroundColor = "";
                            confirmBox[2].style.backgroundColor = "";      
                            // alert("1") 
                            return;
                        }
                        else if(regExe(str,pattern2)){
                            // pwd[0].innerHTML = "";
                            confirmBox[0].style.backgroundColor = "red";
                            confirmBox[1].style.backgroundColor = "orange";
                            confirmBox[2].style.backgroundColor = "";  
                            return;  
                        }
                        else if(regExe(str,pattern3)){
                            // pwd[0].innerHTML = "";
                            confirmBox[0].style.backgroundColor = "red";
                            confirmBox[1].style.backgroundColor = "orange";
                            confirmBox[2].style.backgroundColor = "green";
                            return;
                        }
                        arr[1] = true;
                    }
                    
    } ,
    confirmpwdPattern: function(){
        str = confirmpwd.value;
        if(str==""){
            confirm[2].innerHTML = "确认密码不能为空";
        }
        else{
            if(str===passwd.value){
                confirm[2].innerHTML = "确认密码正确";
                confirm[2].style.color = "green";
            }
            if(str!=passwd.value){
                confirm[2].innerHTML = "密码不一致，请重新输入";
            }
        }
        
    } ,
    unamePattern:function(){
        str = uname.value;
        pattern = /^[\u4e00-\u9fa5]{2,15}$|^[a-z]{3,30}$/i;
        confirmName[0].style.color ="red";
        confirmName[0].style.textDecoration ="none" ;
        if(str==""){
            confirmName[0].innerHTML = "姓名不能为空";
        }
        else{
            if(regExe(str,pattern)){
                confirmName[0].innerHTML = "姓名正确";
            }
            else{
                confirmName[0].innerHTML = "姓名只能包含中文或者英文,且字符在3-30个之间！";
            }
            arr[2] = true;
        }
    },
    userIdPattern:function(){
        str = userId.value;
        pattern = /^\d{18}$|^\d{17}x$/i;
            if(str==""){
                confirm[3].innerHTML = "证件号不能为空";
                
            }
            else{
                if(regExe(str,pattern)){
                    confirm[3].innerHTML = "身份证号正确";
                    
                }
                else{
                    confirm[3].innerHTML = "请输入18位身份证号码";
                    
                }
                arr[3] = true;
            }   
    },
    emailPattern:function(){
        str = email.value;
        pattern = /^[0-9a-zA-Z_-]+@[0-9a-zA-Z_-]+\.[0-9a-zA-Z_-]+$/;
        if(str==""){
            confirm[4].innerHTML = "邮箱不能为空";
        }
        else{
            if(regExe(str,pattern)){
                confirm[4].innerHTML = "邮箱正确";
            }
            else{
                confirm[4].innerHTML = "请输入正确的邮箱";
            }
            arr[4] = true;
        }
    },
    phoneNumPattern:function(){
        str = phoneNum.value;
        pattern = /^1[3-9][0-9]{9}$/;
        if(str==""){
            confirm[5].innerHTML = "手机号不能为空";
        }
        else{
            if(regExe(str,pattern)){
                confirm[5].innerHTML = "手机号正确";
            }
            else{
                confirm[5].innerHTML = "请输入正确的手机号";
            }
            arr[5] = true;
        }
    }
}
// 点击提交按钮，各表单验证情况
btn.onclick =  function(){
    reditMessage[0].action="https://www.imooc.com/"
//     window.location.href = "https://www.imooc.com/"
    // var result = true;
    // for(var j = 0;j<confirm.length;j++){
    //     if(confirm[i].innerHTML!=text[i].title+"正确"){
    //         alert(text[i].title+"不正确");
    //     }
        
    // }
    // for(var j = 0;j<arr.length;j++){
    //     alert(arr[j]);
    //     // if(arr[j]!=true){
    //     //     alert(confirm[i].innerHTML);
    //     //     result = false;
    //     // }
    // }
    // if(result){
    //     alert("即将跳转到慕课网首页");
    // }
}