$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

if ($(window).width() < 1200){
  $(document).ready(function(){
    setTimeout(function(){
        $('.home_banner_sec').css('min-height', $(window).outerHeight());
    }, 50);

    $(window).resize(function(){
        $('.home_banner_sec').css('min-height', $(window).outerHeight());
    });

  });
} else{
  $(document).ready(function(){
    setTimeout(function(){
        $('.home_banner_sec').css('height', $(window).outerHeight());
    }, 50);

    $(window).resize(function(){
        $('.home_banner_sec').css('height', $(window).outerHeight());
    });

  });
}

if ($(window).width() < 768){
  $(document).ready(function(){
    setTimeout(function(){
        $('.home_banner_sec').css('min-height', 'auto');
    }, 50);

    $(window).resize(function(){
      $('.home_banner_sec').css('min-height', 'auto');
    });

  });
}
    

$('.scroll_down').click(function (){
    var keyword = $(this).attr('ss');
    var scrollTo = $('#' + keyword);
    $('html, body').animate({
    scrollTop: scrollTo.offset().top
    }, 100);
});

function _errorMsg(msg) {
    var openDiv = '<div class="invalid-feedback d-flex">'+msg+'</div>';
    return openDiv; 
}
    
function filtercountry() {
    var countryInput = $("#countryInput").val();
    var country_search_slug = $('#country_search_slug').val();
    $.ajax({
        type:'POST',
        url:country_search_slug+"&input="+countryInput,
        success:function(data){
            if (data.hasOwnProperty('view')) {
                $('#searching_id').html(data.view);             
                $('#country_dropdown').hide();
            }
        }
    });
}

function setCountry(country_id,flag,name,callingcode) {
    $('#country_code').val(country_id);
    $("#country_flag").attr("src",flag);
    $('#country_name').html(name);
    $('#calling_code').val(callingcode);
}

$(document).ready(function() {
            
    $( "#email_address" ).blur(function() {
        var  str_valid_email = $('#str_valid_email').val();
        var email_validate_slug = $('#email_validate_slug').val();
        var email = $("#email_address").val();
        var email_url = $('#email_url').val();
        $('#email-error').html('');
        $('.email').removeClass('error-field');
        $('#email-error').hide();
        $.ajax({
            url: email_validate_slug,
            type: "POST",
            dataType: "json",
            data: { email: email},
            success: function(response) {
                console.log(response.hasOwnProperty('email_error'));
                console.log(response);
                if(response.hasOwnProperty('email_error')){
                    $('.email').addClass('error-field');
                    $('#email-error').show();
                    $('#email-error').html(str_valid_email);
                }
                else if(response == 1){                      
                    var emailexist = $('#email_address').val();
                    $('.email').addClass('error-field');
                    $('#email-error').show();
                    $('#email-error').html('The email has already been taken.');
                    // $('#email_address').val('');
               }
               else{
                    $('.email').removeClass('error-field');
                    $('#email-error').show();
               }
            }
        });
    });

    $('#ph_number').on('keyup', function() {
        $('.ph_number').removeClass('error-field');
        $('#ph_number-error').hide();
    });

    $( "#verification_code" ).blur(function() {
        if ($('#verification_code').val()) {
            $('#verification_code').addClass('has-content');
        }
        else{
            $('#verification_code').removeClass('has-content');
        }
    });
});

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 &&
        (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function saveButtons() {
    if (validateform()) {
        saveButtons1();            
    }
}

function saveButtons1() {
    var str_marketing_agree = $('#str_marketing_agree').val();
    var str_sign_up = $('#str_sign_up').val();
    var str_marketing_processing = $('#str_marketing_processing').val();
    var str_something_went_wrong = $('#str_something_went_wrong').val();

    if ($('#agree').is(':checked')) {
        $('#val_agree').html('');
    } else {
        $('#val_agree').html(_errorMsg(str_marketing_agree));
        return false;
    }

    var register_btn_string = str_sign_up;
    var processing          = str_marketing_processing;
    var somethingwrong      = str_something_went_wrong;
    var btn_string          = $('#btn_string').val();

    $('.msg').removeClass('alert alert-success text-center').html('');
    $('.msg').removeClass('alert alert-danger text-center').html('');

    $('#submitB').addClass('btn-warning').prop('disabled',true).html(processing);
    var dataSerial = $('#ActivityForm').serialize();
    var ajax_register = $('#ajax_register').val();
    var saveurl = ajax_register;
    $('#val_full_name').html('');
    $('#val_mobile').html('');
    $('#val_email').html('');
    $('#val_mobile').html('');
    $.ajax({
        type:'POST',
        url:saveurl,
        data:dataSerial,
        success:function(data){
            if (data.hasOwnProperty('error_view')) {
                if (data.error_view.hasOwnProperty('full_name')) {
                    $('#val_full_name').html(_errorMsg(data.error_view.full_name));
                }
                if (data.error_view.hasOwnProperty('mobile')) {
                    $('#val_mobile').html(_errorMsg(data.error_view.mobile));
                }
                if (data.error_view.hasOwnProperty('email')) {
                    $('#val_email').html(_errorMsg(data.error_view.email));
                }
                if (data.error_view.hasOwnProperty('country_code')) {
                    $('#val_mobile').html(_errorMsg(data.error_view.country_code));
                }
                $('#submitB').removeClass('btn-warning').prop('disabled',false).html(btn_string);
            }
            else if (data.hasOwnProperty('email')) {
                $('#val_email').html(_errorMsg(data.email));
                $('#submitB').removeClass('btn-warning').prop('disabled',false).html(btn_string);
            }
            else if (data.hasOwnProperty('success')) {
                $('#ActivityForm').addClass('d-none');
                $('#PinForm').removeClass('d-none');
                $('#user_id').val(data.id);
                $('#user_pwd').val(data.pwd);
            }
            else if (data.hasOwnProperty('error')){
                $('.msg').addClass('alert alert-danger text-center').html(data.error);
                $('#submitB').removeClass('btn-warning').prop('disabled',false).html(btn_string);
            }
            else{
                $('.msg').addClass('alert alert-danger text-center').html(somethingwrong);
                $('#submitB').removeClass('btn-warning').prop('disabled',false).html(btn_string);
            }
        },
        error:function(data){
            $('.msg').html(data.error_view);
            $('#submitB').removeClass('btn-warning').prop('disabled',false).html(btn_string);
        }
  });
}

function saveVerification() {
    if (validateform1()) {
        saveVerification1();            
    }
}

function saveVerification1() {
    var register_btn_string = $('#str_confirm').val();
    var processing = $('#str_marketing_processing').val();
    var somethingwrong = $('#str_something_went_wrong').val();

    $('.msg_verification').removeClass('alert alert-success text-center').html('');
    $('.msg_verification').removeClass('alert alert-danger text-center').html('');
    $('#val_verification_code').html('');
    $('#submitVerification').addClass('btn-warning').prop('disabled',true).html(processing);
    var dataSerial = $('#PinForm').serialize();
    var ajax_verify =  $('#ajax_verify').val();
    var saveurl = ajax_verify;

    $.ajax({
        headers: {'X-CSRF-TOKEN': '{!! csrf_token() !!}'},
        type:'POST',
        url:saveurl,
        data:dataSerial,
        success:function(data){
            if (data.hasOwnProperty('error_view')) {
                if (data.error_view.hasOwnProperty('verification_code')) {
                    $('#val_verification_code').html(_errorMsg(data.error_view.verification_code));
                }
                $('#submitVerification').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
            }
            else if (data.hasOwnProperty('success')) {
                $('#ActivityForm').addClass('d-none');
                $('#PinForm').removeClass('d-none');
                var str_redirect = $('str_redirect').val();
                $('#submitVerification').removeClass('btn-warning').prop('disabled',false).html(str_redirect);
                $('.msg_verification').addClass('alert alert-success text-center').html(data.msg);
                var redirected_back = $('#redirected_back').val();
                window.location.href = redirected_back;
            }
            else if (data.hasOwnProperty('error')){
                if(data.error == 'Invalid PIN'){
                    var str_invalid_pin = $('#str_invalid_pin').val();
                    $('.msg_verification').addClass('alert alert-danger text-center').html(str_invalid_pin);    
                }
                $('#submitVerification').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
            }
            else{
                $('.msg_verification').addClass('alert alert-danger text-center').html(somethingwrong);
                $('#submitVerification').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
            }
        },
        error:function(data){
            $('.msg_verification').html(data.error_view);
            $('#submitVerification').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
        }
  });
}

function resendCode() {
    var register_btn_string = $('#str_confirm').val();
    var processing = $('#str_marketing_processing').val();
    $('.msg_verification').removeClass('alert alert-success text-center').html('');
    $('.msg_verification').removeClass('alert alert-danger text-center').html('');
    $('#submitVerification').addClass('btn-warning').prop('disabled',true).html(processing);
    var resend_code = $('#resend_code').val();
    $.ajax({
        url : resend_code,
        type: "POST",
        data:   {
                    'id': $('#user_id').val(),
                    'calling_code':$('#calling_code').val(),
                    
                },
        success: function(data) {
            if(data.status) {
                var str_pin_resent = $('#str_pin_resent').val();
                $('.msg_verification').addClass('alert alert-success text-center').html(str_pin_resent);
                $('#submitVerification').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
            }
        },
        error: function() {
            $('.msg_verification').addClass('alert alert-danger text-center').html('Something went wrong. Please try again later.');
            $('#submitVerification').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
        },
        complete: function() {
            // $('#loader-wrapper').hide();
        }
    });
}


function validateform() {

    $('.full_name').removeClass('error-field');
    $('#full_name-error').hide();
    $('.mobile').removeClass('error-field');
    $('#mobile-error').hide();
    $('.email').removeClass('error-field');
    $('#email-error').hide();
    $('#agree').removeClass('error-field');

    var full_name = $('#full_name').val();
    var mobile = $('#mobile').val();
    var email = $('#email_address').val();
    // console.log(document.myform.full_name.value);

    // var full_name = document.myform.full_name.value;
    // var mobile = document.myform.mobile.value;
    // var email = document.myform.email.value;

    if ($('.agree').is(':checked')) {
        var agree = "agree";
    } else {
        var agree = "";
        $('.agree').addClass('error-field');
    }


    if ((full_name == null || full_name == "") && (mobile == null ||
            mobile == "") && (email == null || email == "") && agree == "") {

        $('.full_name').addClass('error-field');
        $('#full_name-error').show();
        $('.mobile').addClass('error-field');
        $('#mobile-error').show();
        $('.email').addClass('error-field');
        $('#email-error').show();
        $('#agree').addClass('error-field');
        return false;
    }
    if ((mobile == null || mobile == "") && (email == null || email ==
        "") && agree == "") {

        $('.mobile').addClass('error-field');
        $('#mobile-error').show();
        $('.email').addClass('error-field');
        $('#email-error').show();
        $('#agree').addClass('error-field');
        return false;
    }
    if ((full_name == null || full_name == "") && (mobile == null ||
            mobile == "") && (email == null || email == "")) {
        $('.full_name').addClass('error-field');
        $('#full_name-error').show();
        $('.mobile').addClass('error-field');
        $('#mobile-error').show();
        $('.email').addClass('error-field');
        $('#email-error').show();
        return false;
    }
    if ((mobile == null || mobile == "") && (email == null || email == "")) {
        $('.mobile').addClass('error-field');
        $('#mobile-error').show();
        $('.email').addClass('error-field');
        $('#email-error').show();
        return false;
    }
    if ((email == null || email == "")) {

        $('.email').addClass('error-field');
        $('#email-error').show();
        return false;
    }

    if (agree == null || agree == "") {
        $('#agree').addClass('error-field');
        return false;
    }
    if ((full_name != null || full_name != "") && (mobile != null ||
            mobile != "") && (email != null || email != "") && agree == "agree") {
        return true;
    }
    return false;

}

function validateform1(argument) {
        $('#verification_code').removeClass('error-field');
        $('#verification_code-error').hide();
        var verification_code =$('#verification_code').val();
        if ((verification_code == null || verification_code == "")) {

            $('.verification_code').addClass('error-field');
            $('#verification_code-error').show();
            return false;
        }
        else{
            return true;
        }
    }

    function edValueKeyPress(class_name) {
        $('.' + class_name).addClass('has-content');
        $('.' + class_name).removeClass('error-field');
        $('#' + class_name + '-error').hide();
        if (class_name == "email") {
            if (!$('#email_address').val()) {
                $('.email').removeClass('has-content').addClass('error-field');
                $('#email-error').show();
            }
        }
        else if(class_name == "mobile"){
            if (!$('#mobile').val()) {
                $('.mobile').removeClass('has-content').addClass('error-field');
                $('#mobile-error').show();
            }
        }
        else if(class_name == "full_name"){
            if (!$('#full_name').val()) {
                $('.full_name').removeClass('has-content').addClass('error-field');
                $('#full_name-error').show();
            }
        }
    }
    // Some More Validation For Registration Page Account
    $(document).ready(function() {
        $(".first_name").keypress(function(event) {
            var inputValue = event.charCode;

            if (!(inputValue >= 65 && inputValue <= 122) && (inputValue != 32 && inputValue != 0)) {
                event.preventDefault();
            }
        });
        $(".last_name").keypress(function(event) {
            var inputValue = event.charCode;
            if (!(inputValue >= 65 && inputValue <= 122) && (inputValue != 32 && inputValue != 0)) {
                event.preventDefault();
            }
        });


    });


    function ValidateEmail(emailField) {
        var  str_valid_email = $('#str_valid_email').val();
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var len =emailField.value.length;
        if(len == 0) {
            $('.email_address').addClass('error-field');
            $('#email_address-error').html(str_valid_email);
            $('#email_address-error').show();
            return false;
        }
        if (reg.test(emailField.value) == false) {
            $('.email_address').addClass('error-field');
            $('#email_address-error').html(str_valid_email);
            $('#email_address-error').show();
            return false;
        }

        return true;

    }

    $('ul#country_dropdowna').scroll(function() {
        let div = $(this).get(0);
        var takecountry = $('#takecountry').val();
        let scrollTop = $('ul#country_dropdowna').scrollTop();
        let height = $('ul#country_dropdowna').attr('data-height');
        scrollTop = scrollTop == 1 ? 131 : scrollTop;
        let scrollTops = scrollTop > 200 ? scrollTop - 20 : scrollTop;
        if ((div.scrollTop + div.clientHeight >= div.scrollHeight)) {
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type: "get",
                url: "{{ route('countrydropdownajax') }}",
                data: {
                    'takecountry': takecountry
                },
                success: function(result) {
                    $('ul#country_dropdowna').attr('data-height', result.height);
                    $('#takecountry').val(result.take);
                    $('ul#country_dropdowna').append(result.htmloptions);
                }
            });
        }
    });

    $('#searching_id ul.country_dropdown').attr('data-height', 1);

// $('#full_name').addClass('has-content');
// $('#mobile').addClass('has-content');
// $('#email_address').addClass('has-content');
// $('#verification_code').addClass('has-content');

