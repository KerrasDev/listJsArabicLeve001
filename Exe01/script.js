function message() {
    var msgDiv = document.querySelector('.message');
    msgDiv.innerHTML = "Hello Walcom";
    msgDiv.style.display = "block";
    setTimeout(function() {
        msgDiv.style.opacity = 1; // تغيير الشفافية لجعل الرسالة تظهر
    }, 10); // تعيين تأخير بسيط لتفعيل الانتقال
}

document.getElementById('clc').addEventListener('click', message);
