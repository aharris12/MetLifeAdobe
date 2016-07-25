    $('select.form-library').change(function(){
        $('[data-form-library-msg]').hide();
        var selectedLoginType = $(this).val();
        $('[data-form-library-msg=' + selectedLoginType + ']').show();
    }); 