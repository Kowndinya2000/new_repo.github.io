function fun1(){
    var name = document.getElementsByName('Name')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var phone = document.getElementsByName('num')[0].value;
    console.log(name)
    var description = 'I am a passionate web developer. I started working on ....';
    document.getElementById('p1').innerText = "Welcome " + name;
    document.getElementById('p2').innerText = email;
    document.getElementById('p3').innerText = phone;
    document.getElementById('p4').innerText = description;
    
    
    if(document.getElementById('info').style.display == 'none')
    {
        document.getElementById('info').style.display = 'block'
        document.getElementById('form').style.display = 'none'
        document.getElementById('sub').style.display = 'none'
        
    
    }
    else if(document.getElementById('info').style.display != 'none'){
        document.getElementById('info').style.display = 'none'
        document.getElementById('form').style.display = 'block'
        document.getElementById('sub').style.display = 'block'
    
    }
}
