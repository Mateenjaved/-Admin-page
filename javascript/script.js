
function login(){
    let Name = document.getElementById("name").value;
    let Email = document.getElementById("email").value;
    let Password = document.getElementById("password").value;
    if(Name =="" ){
        Toastify({
            text: "Please Enter Name",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "rgb(235, 95, 95)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
    if(Email=="" ){
        Toastify({
            text: "Please Enter Email",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "rgb(235, 95, 95)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
    if(Password =="" ){
        Toastify({
            text: "Please Enter Password",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "rgb(235, 95, 95)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
    if(Name=="Mateen javed" && Email=="admin@user.com" && Password=="123456"){
        window.location.href = "home.html";
    }else{
        Toastify({
            text: "Please Enter correct data",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "rgb(235, 95, 95)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }
}
