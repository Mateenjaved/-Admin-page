function clr(){
    document.getElementById("input").value="";
}
let Cities=["Islamabad","Peshawar","Lahore","karachi","Bhawalpur"];
function Entercity(){
    let input = document.getElementById("input").value;
    if(input==""){
        Toastify({
            text: "Please Enter City Name",
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
    }else{
        Cities[Cities.length]= input;
    Toastify({
        text: "Your city has been added",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "rgb(89, 194, 29)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    }
}
function PrintCities(){
    let input = document.getElementById("output").innerHTML="";
    for(let i=0 ;i<Cities.length;i++){
        document.getElementById("output").innerHTML += Cities[i]+"<br>";
    }
}
function ClrOutput(){
    let input = document.getElementById("output").innerHTML="";
}