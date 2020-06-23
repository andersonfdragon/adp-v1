//MOVIMIENTO SUVIZADO ANCLAS
$(function(){

    $('a[href*=#]').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {

            var $target = $(this.hash);

            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

            if ($target.length) {

                var targetOffset = $target.offset().top;

                $('html,body').animate({scrollTop: targetOffset}, 700);

                return false;

            }

        }

    });

});

// Colapsar menu - despues de click en menu hamburguesa
$(document).ready(function(){
    $(".cerrarMenu").click(function () {
            $('.navbar-toggle').click();
    });
});

//BOTONES MENU INICIO WEB
function menu_1(){
    document.getElementById("estado_activo_1").classList.add('activo');
    var color_actual_1 = document.getElementsByClassName("activo_1");
    color_actual_1 = "activo";
    document.getElementById("estado_activo_2").classList.remove('activo');
    var color_actual_2 = document.getElementsByClassName("activo_2");
    color_actual_2 = "inactivo";
    document.getElementById("estado_activo_3").classList.remove('activo');
    var color_actual_3 = document.getElementsByClassName("activo_3");
    color_actual_3 = "inactivo";
    document.getElementById("estado_activo_4").classList.remove('activo');
    var color_actual_4 = document.getElementsByClassName("activo_4");
    color_actual_4 = "inactivo";
}

function menu_2(){
    document.getElementById("estado_activo_1").classList.remove('activo');
    var color_actual_1 = document.getElementsByClassName("activo_1");
    color_actual_1 = "inactivo";
    document.getElementById("estado_activo_2").classList.add('activo');
    var color_actual_2 = document.getElementsByClassName("activo_2");
    color_actual_2 = "activo";
    document.getElementById("estado_activo_3").classList.remove('activo');
    var color_actual_3 = document.getElementsByClassName("activo_3");
    color_actual_3 = "inactivo";
    document.getElementById("estado_activo_4").classList.remove('activo');
    var color_actual_4 = document.getElementsByClassName("activo_4");
    color_actual_4 = "inactivo";
}

function menu_3(){
    document.getElementById("estado_activo_1").classList.remove('activo');
    var color_actual_1 = document.getElementsByClassName("activo_1");
    color_actual_1 = "inactivo";
    document.getElementById("estado_activo_2").classList.remove('activo');
    var color_actual_2 = document.getElementsByClassName("activo_2");
    color_actual_2 = "inactivo";
    document.getElementById("estado_activo_3").classList.add('activo');
    var color_actual_3 = document.getElementsByClassName("activo_3");
    color_actual_3 = "activo";
    document.getElementById("estado_activo_4").classList.remove('activo');
    var color_actual_4 = document.getElementsByClassName("activo_4");
    color_actual_4 = "inactivo";
}

function menu_4(){
    document.getElementById("estado_activo_1").classList.remove('activo');
    var color_actual_1 = document.getElementsByClassName("activo_1");
    color_actual_1 = "inactivo";
    document.getElementById("estado_activo_2").classList.remove('activo');
    var color_actual_2 = document.getElementsByClassName("activo_2");
    color_actual_2 = "inactivo";
    document.getElementById("estado_activo_3").classList.remove('activo');
    var color_actual_3 = document.getElementsByClassName("activo_3");
    color_actual_3 = "inactivo";
    document.getElementById("estado_activo_4").classList.add('activo');
    var color_actual_4 = document.getElementsByClassName("activo_4");
    color_actual_4 = "activo";
}

//BOTONES MENU INICIO RESPONSIVE PC-MD
function menu_1_responsive_pc(){
    document.getElementById("estado_activo_1_responsive_pc").classList.add('activo_responsive_pc');
    var color_actual_1_responsive_pc = document.getElementsByClassName("activo_1_responsive_pc");
    color_actual_1_responsive_pc = "activo_responsive_pc";
    document.getElementById("estado_activo_2_responsive_pc").classList.remove('activo_responsive_pc');
    var color_actual_2_responsive_pc = document.getElementsByClassName("activo_2_responsive_pc");
    color_actual_2_responsive_pc = "inactivo_responsive_pc";
    document.getElementById("estado_activo_3_responsive_pc").classList.remove('activo_responsive_pc');
    var color_actual_3_responsive_pc = document.getElementsByClassName("activo_3_responsive_pc");
    color_actual_3_responsive_pc = "inactivo_responsive_pc";
    document.getElementById("estado_activo_4_responsive_pc").classList.remove('activo_responsive_pc');
    var color_actual_4_responsive_pc = document.getElementsByClassName("activo_4_responsive_pc");
    color_actual_4_responsive_pc = "inactivo_responsive_pc";
}

function menu_2_responsive_pc(){
    document.getElementById("estado_activo_1_responsive_pc").classList.remove('activo_responsive_pc');
    var color_actual_1_responsive_pc = document.getElementsByClassName("activo_1_responsive_pc");
    color_actual_1_responsive_pc = "inactivo_responsive_pc";
    document.getElementById("estado_activo_2_responsive_pc").classList.add('activo_responsive_pc');
    var color_actual_2_responsive_pc = document.getElementsByClassName("activo_2_responsive_pc");
    color_actual_2_responsive_pc = "activo_responsive_pc";
    document.getElementById("estado_activo_3_responsive_pc").classList.remove('activo_responsive_pc');
    var color_actual_3_responsive_pc = document.getElementsByClassName("activo_3_responsive_pc");
    color_actual_3_responsive_pc = "inactivo_responsive_pc";
    document.getElementById("estado_activo_4_responsive_pc").classList.remove('activo_responsive_pc');
    var color_actual_4_responsive_pc = document.getElementsByClassName("activo_4_responsive_pc");
    color_actual_4_responsive_pc = "inactivo_responsive_pc";
}

function menu_3_responsive_pc(){
    document.getElementById("estado_activo_1_responsive_pc").classList.remove('activo_responsive_pc');
    var color_actual_1_responsive_pc = document.getElementsByClassName("activo_1_responsive_pc");
    color_actual_1_responsive_pc = "inactivo_responsive_pc";
    document.getElementById("estado_activo_2_responsive_pc").classList.remove('activo_responsive_pc');
    var color_actual_2_responsive_pc = document.getElementsByClassName("activo_2_responsive_pc");
    color_actual_2_responsive_pc = "inactivo_responsive_pc";
    document.getElementById("estado_activo_3_responsive_pc").classList.add('activo_responsive_pc');
    var color_actual_3_responsive_pc = document.getElementsByClassName("activo_3_responsive_pc");
    color_actual_3_responsive_pc = "activo_responsive_pc";
    document.getElementById("estado_activo_4_responsive_pc").classList.remove('activo_responsive_pc');
    var color_actual_4_responsive_pc = document.getElementsByClassName("activo_4_responsive_pc");
    color_actual_4_responsive_pc = "inactivo_responsive_pc";
}

function menu_4_responsive_pc(){
    document.getElementById("estado_activo_1_responsive_pc").classList.remove('activo_responsive_pc');
    var color_actual_1_responsive_pc = document.getElementsByClassName("activo_1_responsive_pc");
    color_actual_1_responsive_pc = "inactivo_responsive_pc";
    document.getElementById("estado_activo_2_responsive_pc").classList.remove('activo_responsive_pc');
    var color_actual_2_responsive_pc = document.getElementsByClassName("activo_2_responsive_pc");
    color_actual_2_responsive_pc = "inactivo_responsive_pc";
    document.getElementById("estado_activo_3_responsive_pc").classList.remove('activo_responsive_pc');
    var color_actual_3_responsive_pc = document.getElementsByClassName("activo_3_responsive_pc");
    color_actual_3_responsive_pc = "inactivo_responsive_pc";
    document.getElementById("estado_activo_4_responsive_pc").classList.add('activo_responsive_pc');
    var color_actual_4_responsive_pc = document.getElementsByClassName("activo_4_responsive_pc");
    color_actual_4_responsive_pc = "activo_responsive_pc";
}

//BOTONES MENU INICIO RESPONSIVE TABLET
function menu_1_responsive_tb(){
    document.getElementById("estado_activo_1_responsive_tb").classList.add('activo_responsive_tb');
    var color_actual_1_responsive_tb = document.getElementsByClassName("activo_1_responsive_tb");
    color_actual_1_responsive_tb = "activo_responsive_tb";
    document.getElementById("estado_activo_2_responsive_tb").classList.remove('activo_responsive_tb');
    var color_actual_2_responsive_tb = document.getElementsByClassName("activo_2_responsive_tb");
    color_actual_2_responsive_tb = "inactivo_responsive_tb";
    document.getElementById("estado_activo_3_responsive_tb").classList.remove('activo_responsive_tb');
    var color_actual_3_responsive_tb = document.getElementsByClassName("activo_3_responsive_tb");
    color_actual_3_responsive_tb = "inactivo_responsive_tb";
    document.getElementById("estado_activo_4_responsive_tb").classList.remove('activo_responsive_tb');
    var color_actual_4_responsive_tb = document.getElementsByClassName("activo_4_responsive_tb");
    color_actual_4_responsive_tb = "inactivo_responsive_tb";
}

function menu_2_responsive_tb(){
    document.getElementById("estado_activo_1_responsive_tb").classList.remove('activo_responsive_tb');
    var color_actual_1_responsive_tb = document.getElementsByClassName("activo_1_responsive_tb");
    color_actual_1_responsive_tb = "inactivo_responsive_tb";
    document.getElementById("estado_activo_2_responsive_tb").classList.add('activo_responsive_tb');
    var color_actual_2_responsive_tb = document.getElementsByClassName("activo_2_responsive_tb");
    color_actual_2_responsive_tb = "activo_responsive_tb";
    document.getElementById("estado_activo_3_responsive_tb").classList.remove('activo_responsive_tb');
    var color_actual_3_responsive_tb = document.getElementsByClassName("activo_3_responsive_tb");
    color_actual_3_responsive_tb = "inactivo_responsive_tb";
    document.getElementById("estado_activo_4_responsive_tb").classList.remove('activo_responsive_tb');
    var color_actual_4_responsive_tb = document.getElementsByClassName("activo_4_responsive_tb");
    color_actual_4_responsive_tb = "inactivo_responsive_tb";
}

function menu_3_responsive_tb(){
    document.getElementById("estado_activo_1_responsive_tb").classList.remove('activo_responsive_tb');
    var color_actual_1_responsive_tb = document.getElementsByClassName("activo_1_responsive_tb");
    color_actual_1_responsive_tb = "inactivo_responsive_tb";
    document.getElementById("estado_activo_2_responsive_tb").classList.remove('activo_responsive_tb');
    var color_actual_2_responsive_tb = document.getElementsByClassName("activo_2_responsive_tb");
    color_actual_2_responsive_tb = "inactivo_responsive_tb";
    document.getElementById("estado_activo_3_responsive_tb").classList.add('activo_responsive_tb');
    var color_actual_3_responsive_tb = document.getElementsByClassName("activo_3_responsive_tb");
    color_actual_3_responsive_tb = "activo_responsive_tb";
    document.getElementById("estado_activo_4_responsive_tb").classList.remove('activo_responsive_tb');
    var color_actual_4_responsive_tb = document.getElementsByClassName("activo_4_responsive_tb");
    color_actual_4_responsive_tb = "inactivo_responsive_tb";
}

function menu_4_responsive_tb(){
    document.getElementById("estado_activo_1_responsive_tb").classList.remove('activo_responsive_tb');
    var color_actual_1_responsive_tb = document.getElementsByClassName("activo_1_responsive_tb");
    color_actual_1_responsive_tb = "inactivo_responsive_tb";
    document.getElementById("estado_activo_2_responsive_tb").classList.remove('activo_responsive_tb');
    var color_actual_2_responsive_tb = document.getElementsByClassName("activo_2_responsive_tb");
    color_actual_2_responsive_tb = "inactivo_responsive_tb";
    document.getElementById("estado_activo_3_responsive_tb").classList.remove('activo_responsive_tb');
    var color_actual_3_responsive_tb = document.getElementsByClassName("activo_3_responsive_tb");
    color_actual_3_responsive_tb = "inactivo_responsive_tb";
    document.getElementById("estado_activo_4_responsive_tb").classList.add('activo_responsive_tb');
    var color_actual_4_responsive_tb = document.getElementsByClassName("activo_4_responsive_tb");
    color_actual_4_responsive_tb = "activo_responsive_tb";
}

//BOTONES MENU INICIO RESPONSIVE MOBILE
function menu_1_responsive(){
    document.getElementById("estado_activo_1_responsive").classList.add('activo_responsive');
    var color_actual_1_responsive = document.getElementsByClassName("activo_1_responsive");
    color_actual_1_responsive = "activo_responsive";
    document.getElementById("estado_activo_2_responsive").classList.remove('activo_responsive');
    var color_actual_2_responsive = document.getElementsByClassName("activo_2_responsive");
    color_actual_2_responsive = "inactivo_responsive";
    document.getElementById("estado_activo_3_responsive").classList.remove('activo_responsive');
    var color_actual_3_responsive = document.getElementsByClassName("activo_3_responsive");
    color_actual_3_responsive = "inactivo_responsive";
    document.getElementById("estado_activo_4_responsive").classList.remove('activo_responsive');
    var color_actual_4_responsive = document.getElementsByClassName("activo_4_responsive");
    color_actual_4_responsive = "inactivo_responsive";
}

function menu_2_responsive(){
    document.getElementById("estado_activo_1_responsive").classList.remove('activo_responsive');
    var color_actual_1_responsive = document.getElementsByClassName("activo_1_responsive");
    color_actual_1_responsive = "inactivo_responsive";
    document.getElementById("estado_activo_2_responsive").classList.add('activo_responsive');
    var color_actual_2_responsive = document.getElementsByClassName("activo_2_responsive");
    color_actual_2_responsive = "activo_responsive";
    document.getElementById("estado_activo_3_responsive").classList.remove('activo_responsive');
    var color_actual_3_responsive = document.getElementsByClassName("activo_3_responsive");
    color_actual_3_responsive = "inactivo_responsive";
    document.getElementById("estado_activo_4_responsive").classList.remove('activo_responsive');
    var color_actual_4_responsive = document.getElementsByClassName("activo_4_responsive");
    color_actual_4_responsive = "inactivo_responsive";
}

function menu_3_responsive(){
    document.getElementById("estado_activo_1_responsive").classList.remove('activo_responsive');
    var color_actual_1_responsive = document.getElementsByClassName("activo_1_responsive");
    color_actual_1_responsive = "inactivo_responsive";
    document.getElementById("estado_activo_2_responsive").classList.remove('activo_responsive');
    var color_actual_2_responsive = document.getElementsByClassName("activo_2_responsive");
    color_actual_2_responsive = "inactivo_responsive";
    document.getElementById("estado_activo_3_responsive").classList.add('activo_responsive');
    var color_actual_3_responsive = document.getElementsByClassName("activo_3_responsive");
    color_actual_3_responsive = "activo_responsive";
    document.getElementById("estado_activo_4_responsive").classList.remove('activo_responsive');
    var color_actual_4_responsive = document.getElementsByClassName("activo_4_responsive");
    color_actual_4_responsive = "inactivo_responsive";
}

function menu_4_responsive(){
    document.getElementById("estado_activo_1_responsive").classList.remove('activo_responsive');
    var color_actual_1_responsive = document.getElementsByClassName("activo_1_responsive");
    color_actual_1_responsive = "inactivo_responsive";
    document.getElementById("estado_activo_2_responsive").classList.remove('activo_responsive');
    var color_actual_2_responsive = document.getElementsByClassName("activo_2_responsive");
    color_actual_2_responsive = "inactivo_responsive";
    document.getElementById("estado_activo_3_responsive").classList.remove('activo_responsive');
    var color_actual_3_responsive = document.getElementsByClassName("activo_3_responsive");
    color_actual_3_responsive = "inactivo_responsive";
    document.getElementById("estado_activo_4_responsive").classList.add('activo_responsive');
    var color_actual_4_responsive = document.getElementsByClassName("activo_4_responsive");
    color_actual_4_responsive = "activo_responsive";
}


//FORMULARIO DE CONTACTO
$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented("Complete este campo")) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Complete los campos que faltan");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});

function submitForm(){
    // Initiate Variables With Form Content
    var first_name = $("#first_name").val();
    var telephone = $("#telephone").val();
    var email = $("#email").val();

    $.ajax({
        type: "POST",
        url: "php/process.php",
        data: "first_name=" + first_name + "&telephone=" + telephone + "&email=" + email,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Datos enviados satisfactoriamente!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h4 text-center tada animated text-success";
    } else {
        var msgClasses = "h4 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

