function captchaGenerator(){
    var alpha = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0","1","2","3","4","5","6","7","8","9","@","#","$","%","&");
    var a = alpha[Math.floor(Math.random() * alpha.length)];
    var b = alpha[Math.floor(Math.random() * alpha.length)];
    var c = alpha[Math.floor(Math.random() * alpha.length)];
    var d = alpha[Math.floor(Math.random() * alpha.length)];
    var e = alpha[Math.floor(Math.random() * alpha.length)];
    var f = alpha[Math.floor(Math.random() * alpha.length)];

    let generatedCaptcha = a + b + c + d + e + f;

    document.getElementById("captcha-generated").innerText = generatedCaptcha;
    document.getElementById("captcha-generated").value = generatedCaptcha;
}

function compareCaptcha(){
    var generatedCaptcha = document.getElementById("captcha-generated").value;
    var inputCaptcha = document.getElementById("captcha-input").value;
    inputCaptcha.replace(" ", "");
    if(generatedCaptcha == inputCaptcha){
        document.getElementById("result").style.color = "greenyellow";
        document.getElementById("result").innerText = "Congratulations, Human";
    }
    else{
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerText = "Failed, Try again";
    }
}