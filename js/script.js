$(document).ready(function () {
    $(".cracker1").click(function () {
        $("#calc1").toggle();
        $("#design1").toggle();
    });

    $(".cracker2").click(function () {
        $("#design2").toggle();
        $("#calc2").toggle();
    });
    $(".cracker3").click(function () {
        $("#design3").toggle();
        $("#calc3").toggle();
    });
});



var btn = document.getElementById("myBtn");

// When the user clicks on the button, open the modal
btn.onclick = function(event) {
    // Validate form for entry
    var x = document.forms["myForm"]["contact-name"].value;
    if (x == "") {
        alert("Name not entered");
        return false;
    }
    var y = document.forms["myForm"]["contact-email"].value;
    if (y == "") {
        alert("Email not entered");
        return false;
    }
    var z = document.forms["myForm"]["contact-message"].value;
    if (z == "") {
        alert("You have no message to send");
        return false;
    }
    var person1Input = $("input#contact-name").val();
    $("span#outputName").append(person1Input);
    $(".toast-body").show();
}




// $(document).ready(function() {
//     $("div.image-frame").hover(function() {
//         $("mask flex-center rgba-red-strong");
//     });
//     $("div.image-frame").hover(function() {
//         $("mask flex-center rgba-blue-light");
//     });
//     $("div.image-frame").hover(function() {
//         $("mask flex-center rgba-green-slight");
//     });
//     $("div.image-frame").hover(function() {
//         $("mask flex-center");
//     });
// });
