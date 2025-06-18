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

function _errorMsgDesk(msg) {
    var openDiv = '<div class="invalid-feedback d-flex">'+msg+'</div>';
    return openDiv; 
}
    
function filtercountryDesk() {
    var countryInput = $("#countryInputdesk").val();
    var country_search_slug_desk = $('#country_search_slug_desk').val();
    $.ajax({
        type:'POST',
        url:country_search_slug_desk+"&input="+countryInput,
        success:function(data){
            if (data.hasOwnProperty('view')) {
                $('#searching_id_desk').html(data.view);             
                $('#country_dropdown_desk').hide();
            }
        }
    });
}

function setCountryDesk(country_id,flag,name,callingcode) {
    $('#country_code').val(country_id);
    $("#country_flag_desk").attr("src",flag);
    $('#country_name_desk').html(name);
    $('#calling_code_desk').val(callingcode);
}

$(document).ready(function() {
    $( "#email_desk_address" ).blur(function() {
        var  str_valid_email = $('#str_valid_email').val();
        var email_validate_slug = $('#email_validate_slug').val();
        var email = $("#email_desk_address").val();
        var email_url = $('#email_url').val();
        $('#email_desk-error').html('');
        $('.email_desk').removeClass('error-field');
        $('#email_desk-error').hide();
        $.ajax({
            url: email_validate_slug,
            type: "POST",
            dataType: "json",
            data: { email: email},
            success: function(response) {
                if(response.hasOwnProperty('email_error')){
                    $('.email_desk').addClass('error-field');
                    $('#email_desk-error').show();
                    $('#email_desk-error').html(str_valid_email);
                }
                else if(response == 1){
                    var emailexist = $('#email_desk_address').val();
                    $('.email_desk').addClass('error-field');
                    $('#email_desk-error').show();
                    $('#email_desk-error').html('The email has already been taken.');
                    // $('#email_desk_address').val('');
                }
                else{
                    $('.email_desk').removeClass('error-field');
                    $('#email_desk-error').show();
                }
            }
        });
    });

    $('#ph_number').on('keyup', function() {
        $('.ph_number').removeClass('error-field');
        $('#ph_number-error').hide();
    });

    $( "#verification_code_desk" ).blur(function() {
        if ($('#verification_code_desk').val()) {
            $('#verification_code_desk').addClass('has-content');
        }
        else{
            $('#verification_code_desk').removeClass('has-content');
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

function saveButtonsDesk() {
    if (validateformDesk()) {
        saveButtons1Desk();            
    }
}

function saveButtons1Desk() {
    var str_marketing_agree = $('#str_marketing_agree').val();
    var str_sign_up = $('#str_sign_up').val();
    var str_marketing_processing = $('#str_marketing_processing').val();
    var str_something_went_wrong = $('#str_something_went_wrong').val();

    if ($('#agree_desk').is(':checked')) {
        $('#val_agree_desk').html('');
    } else {
        $('#val_agree_desk').html(_errorMsgDesk(str_marketing_agree));
        return false;
    }

    var register_btn_string = str_sign_up;
    var processing          = str_marketing_processing;
    var somethingwrong      = str_something_went_wrong;

    $('.msgDesk').removeClass('alert alert-success text-center').html('');
    $('.msgDesk').removeClass('alert alert-danger text-center').html('');
    $('#submitBDesk').addClass('btn-warning').prop('disabled',true).html(processing);
    var dataSerial = $('#ActivityFormDesk').serialize();
    var ajax_register = $('#ajax_register').val();
    var saveurl = ajax_register;
    $('#val_full_name_desk').html('');
    $('#val_mobile_desk').html('');
    $('#val_email_desk').html('');
    $.ajax({
        type:'POST',
        url:saveurl,
        data:dataSerial,
        success:function(data){
            if (data.hasOwnProperty('error_view')) {
                if (data.error_view.hasOwnProperty('full_name')) {
                    $('#val_full_name_desk').html(_errorMsgDesk(data.error_view.full_name));
                }
                if (data.error_view.hasOwnProperty('mobile')) {
                    $('#val_mobile_desk').html(_errorMsgDesk(data.error_view.mobile));
                }
                if (data.error_view.hasOwnProperty('email')) {
                    $('#val_email_desk').html(_errorMsgDesk(data.error_view.email));
                }
                if (data.error_view.hasOwnProperty('country_code')) {
                    $('#val_mobile_desk').html(_errorMsgDesk(data.error_view.country_code));
                }
                $('#submitBDesk').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
            }
            else if (data.hasOwnProperty('email')) {
                $('#val_email_desk').html('');
                $('#val_email_desk').html(_errorMsg(data.email));
                $('#submitBDesk').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
            }
            else if (data.hasOwnProperty('success')) {
                $('#ActivityFormDesk').addClass('d-none');
                $('#PinFormDesk').removeClass('d-none');
                $('#user_id_desk').val(data.id);
                $('#user_pwd_desk').val(data.pwd);
            }
            else if (data.hasOwnProperty('error')){
                $('.msgDesk').addClass('alert alert-danger text-center').html(data.error);
                $('#submitBDesk').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
            }
            else{
                $('.msgDesk').addClass('alert alert-danger text-center').html(somethingwrong);
                $('#submitBDesk').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
            }
        },
        error:function(data){
            $('.msgDesk').html(data.error_view);
            $('#submitBDesk').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
        }
  });
}

function saveVerificationDesk() {
    if (validateform1Desk()) {
        saveVerification1Desk();            
    }
}

function saveVerification1Desk() {
    var register_btn_string = $('#str_confirm').val();
    var processing = $('#str_marketing_processing').val();
    var somethingwrong = $('#str_something_went_wrong').val();

    $('.msg_verification_desk').removeClass('alert alert-success text-center').html('');
    $('.msg_verification_desk').removeClass('alert alert-danger text-center').html('');
    $('#val_verification_code_desk').html('');
    $('#submitVerificationDesk').addClass('btn-warning').prop('disabled',true).html(processing);
    var dataSerial = $('#PinFormDesk').serialize();
    var ajax_verify =  $('#ajax_verify').val();
    var saveurl = ajax_verify;

    $.ajax({
        headers: {'X-CSRF-TOKEN': '{!! csrf_token() !!}'},
        type:'POST',
        url:saveurl,
        data:dataSerial,
        success:function(data){
            if (data.hasOwnProperty('error_view')) {
                if (data.error_view.hasOwnProperty('verification_code_desk')) {
                    $('#val_verification_code_desk').html(_errorMsgDesk(data.error_view.verification_code_desk));
                }
                $('#submitVerificationDesk').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
            }
            else if (data.hasOwnProperty('success')) {
                $('#ActivityFormDesk').addClass('d-none');
                $('#PinFormDesk').removeClass('d-none');
                var str_redirect = $('str_redirect').val();
                $('#submitVerificationDesk').removeClass('btn-warning').prop('disabled',false).html(str_redirect);
                $('.msg_verification_desk').addClass('alert alert-success text-center').html(data.msg);
                var redirected_back = $('#redirected_back').val();
                window.location.href = redirected_back;
            }
            else if (data.hasOwnProperty('error')){
                if(data.error == 'Invalid PIN'){
                    var str_invalid_pin = $('#str_invalid_pin').val();
                    $('.msg_verification').addClass('alert alert-danger text-center').html(str_invalid_pin);    
                }
                $('#submitVerificationDesk').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
            }
            else{
                $('.msg_verification_desk').addClass('alert alert-danger text-center').html(somethingwrong);
                $('#submitVerificationDesk').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
            }
        },
        error:function(data){
            $('.msg_verification_desk').html(data.error_view);
            $('#submitVerificationDesk').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
        }
  });
}

function resendCodeDesk() {
    var register_btn_string = $('#str_confirm_desk').val();
    var processing = $('#str_marketing_processing_desk').val();
    $('.msg_verification_desk').removeClass('alert alert-success text-center').html('');
    $('.msg_verification_desk').removeClass('alert alert-danger text-center').html('');
    $('#submitVerificationDesk').addClass('btn-warning').prop('disabled',true).html(processing);
    var resend_code = $('#resend_code').val();
    $.ajax({
        url : resend_code,
        type: "POST",
        data:   {
                    'id': $('#user_id_desk').val(),
                    'calling_code':$('#calling_code_desk').val(),
                    
                },
        success: function(data) {
            if(data.status) {
                var str_pin_resent = $('#str_pin_resent').val();
                $('.msg_verification_desk').addClass('alert alert-success text-center').html(str_pin_resent);
                $('#submitVerificationDesk').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
            }
        },
        error: function() {
            $('.msg_verification_desk').addClass('alert alert-danger text-center').html('Something went wrong. Please try again later.');
            $('#submitVerificationDesk').removeClass('btn-warning').prop('disabled',false).html(register_btn_string);
        },
        complete: function() {
            // $('#loader-wrapper').hide();
        }
    });
}


function validateformDesk() {

    $('.full_name_desk').removeClass('error-field');
    $('#full_name_desk-error').hide();
    $('.mobile_desk').removeClass('error-field');
    $('#mobile_desk-error').hide();
    $('.email_desk').removeClass('error-field');
    $('#email_desk-error').hide();
    $('#agree_desk').removeClass('error-field');

    var full_name_desk = $('#full_name_desk').val();
    var mobile_desk = $('#mobile_desk').val();
    var email_desk = $('#email_desk_address').val();

    if ($('#agree_desk').is(':checked')) {
        var agree_desk = "agree";
    } else {
        var agree_desk = "";
        $('#agree_desk').addClass('error-field');
    }

    if (!full_name_desk) {
        $('#full_name_desk').addClass('error-field');
        $('#full_name_desk-error').show();
    }

    if ((full_name_desk == null || full_name_desk == "") && (mobile_desk == null ||
            mobile_desk == "") && (email_desk == null || email_desk == "") && agree == "") {
        console.log(full_name_desk);
        $('.full_name_desk').addClass('error-field');
        $('#full_name_desk-error').show();
        $('.mobile_desk').addClass('error-field');
        $('#mobile_desk-error').show();
        $('.email_desk').addClass('error-field');
        $('#email_desk-error').show();
        $('#agree_desk').addClass('error-field');
        return false;
    }
    if ((mobile_desk == null || mobile_desk == "") && (email_desk == null || email_desk ==
        "") && agree_desk == "") {
        console.log(full_name_desk);
        $('.mobile_desk').addClass('error-field');
        $('#mobile_desk-error').show();
        $('.email_desk').addClass('error-field');
        $('#email_desk-error').show();
        $('#agree_desk').addClass('error-field');
        return false;
    }
    if ((full_name_desk == null || full_name_desk == "") && (mobile_desk == null ||
            mobile_desk == "") && (email_desk == null || email_desk == "")) {
        console.log(full_name_desk);
        $('#full_name_desk').addClass('error-field');
        $('#full_name_desk-error').show();
        $('.mobile_desk').addClass('error-field');
        $('#mobile_desk-error').show();
        $('.email_desk').addClass('error-field');
        $('#email_desk-error').show();
        return false;
    }
    if ((mobile_desk == null || mobile_desk == "") && (email_desk == null || email_desk == "")) {
        console.log(full_name_desk);
        $('.mobile_desk').addClass('error-field');
        $('#mobile_desk-error').show();
        $('.email_desk').addClass('error-field');
        $('#email_desk-error').show();
        return false;
    }
    if ((email_desk == null || email_desk == "")) {
        console.log(full_name_desk);
        $('.email_desk').addClass('error-field');
        $('#email_desk-error').show();
        return false;
    }

    if (agree_desk == null || agree_desk == "") {
        console.log(full_name_desk);
        $('#agree_desk').addClass('error-field');
        return false;
    }
    if ((full_name_desk != null || full_name_desk != "") && (mobile_desk != null ||
            mobile_desk != "") && (email_desk != null || email_desk != "") && agree_desk == "agree") {
        console.log(full_name_desk);
        return true;
    }
    console.log(full_name_desk);
    return false;

}

function validateform1Desk(argument) {
        $('#verification_code_desk').removeClass('error-field');
        $('#verification_code_desk-error').hide();
        var verification_code_desk =$('#verification_code_desk').val();
        if ((verification_code_desk == null || verification_code_desk == "")) {

            $('.verification_code_desk').addClass('error-field');
            $('#verification_code_desk-error').show();
            return false;
        }
        else{
            return true;
        }
    }

    function edValueKeyPressDesk(class_name) {
        $('.' + class_name).addClass('has-content');
        $('.' + class_name).removeClass('error-field');
        $('#' + class_name + '-error').hide();
        if (class_name == "email") {
            if (!$('#email_desk_address').val()) {
                $('.email_desk').removeClass('has-content').addClass('error-field');
                $('#email_desk-error').show();
            }
        }
        else if(class_name == "mobile_desk"){
            if (!$('#mobile_desk').val()) {
                $('.mobile_desk').removeClass('has-content').addClass('error-field');
                $('#mobile_desk-error').show();
            }
        }
        else if(class_name == "full_name_desk"){
            console.log(class_name);
            if (!$('#full_name_desk').val()) {
                $('#full_name_desk').removeClass('has-content').addClass('error-field');
                $('#full_name_desk-error').show();
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


    function ValidateEmailDesk(emailField) {
        var  str_valid_email = $('#str_valid_email').val();
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var len =emailField.value.length;
        if(len == 0) {
            $('.email_desk_address').addClass('error-field');
            $('#email_desk_address-error').html('The email field is required.');
            $('#email_desk_address-error').show();
            return false;
        }
        if (reg.test(emailField.value) == false) {
            $('.email_desk_address').addClass('error-field');
            $('#email_desk_address-error').html(str_valid_email);
            $('#email_desk_address-error').show();
            return false;
        }

        return true;

    }

    $('ul#country_dropdownadesk').scroll(function() {
        let div = $(this).get(0);
        var takecountry = $('#takecountry').val();
        let scrollTop = $('ul#country_dropdownadesk').scrollTop();
        let height = $('ul#country_dropdownadesk').attr('data-height');
        scrollTop = scrollTop == 1 ? 131 : scrollTop;
        let scrollTops = scrollTop > 200 ? scrollTop - 20 : scrollTop;
        if ((div.scrollTop + div.clientHeight >= div.scrollHeight)) {
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type: "get",
                url: "{{ route('countrydropdownajaxdesk') }}",
                data: {
                    'takecountry': takecountry
                },
                success: function(result) {
                    $('ul#country_dropdownadesk').attr('data-height', result.height);
                    $('#takecountry').val(result.take);
                    $('ul#country_dropdownadesk').append(result.htmloptions);
                }
            });
        }
    });

    $('#searching_id ul.country_dropdown').attr('data-height', 1);