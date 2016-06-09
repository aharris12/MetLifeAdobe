/**
 * Created by icunningham on 2/8/2016.
 */

if ($(".wrapper__quote-card").length > 0) {
    // Open Edit Quote Form
    $(".results-card__quoteinfo__anchor").on("click", function(){
        //preFillQuoteForm();
        $(".results-form__wrapper").addClass("hidden");
        $(".edit-quote__form__wrapper").removeClass("hidden");
        $(".edit-quote__form__wrapper").css("display", "table-cell");
        //$(".results-form").addClass("results-form--dark-blue");
        $(".results-card__premium-card").addClass("results-card__premium-card--inactive");
    });

    // Close Edit Quote Form
    $(".form-close .icon-close").on("click", function(){
        $(".results-form__wrapper").removeClass("hidden");
        $(".edit-quote__form__wrapper").css("display", "none");
        //$(".edit-form-quote-results").removeClass("edit-form-quote-results--block");
        $(".results-card__premium-card").removeClass("results-card__premium-card--inactive");
    });

    $(".form-user-grp input").on("click", function() {
        $(".results-form__button").removeClass("hidden");
        $(".apply-disclaimer").removeClass("hidden");
        $(".results-form__inputs .form-user-grp").removeClass("hidden");
        $(".results-form__inputs .form-user-grp-location").removeClass("hidden");
    })

//    $(".results-form__button").on("click", function() {
//        $(".results-form__text").addClass("hidden");
//        $(".results-form__inputs").addClass("hidden");
//        $(".apply-disclaimer").addClass("hidden");
//        $(".contact-thanks").removeClass("hidden");
//    })
    
}


//Added per HCL request
$('#resultsBuyNow').on('click',function(e){
    e.preventDefault();
    var $this = $(this);
    var isValid = metlifeRedesign.onFSubmit($(this));
    if (isValid) {
          var fid = $this.attr('data-fsubmit');
          var $formid = $('[data-fid=' + fid + ']');
          // $('#phone_ql').val($('#phone_ql').val().replace(/-/g,""));
          var formName = $formid.attr('name');
          var formObject = document.getElementById(formName);
          formProcessorSubmit(formName,'a','chn-har-thankyou','chn-har-error','chn-har-exception');
          applyOnlineNow(formObject);
    }
})

function applyOnlineNow(e) {
    var o = getCookie("ReserveID");
    null  != o ? (console.debug("reserveid is not null and the  value =" + o),
          AddInputParameter(e, "input", "reserveid", o, document)) : console.debug("reserveid is empty for ReserveID "),
          addSessionParameters(e);

    var t = "/wps/proxy/MCOnlineEnterpriseApp/TranzactLeadService.do";
    var callCount = 0;

    if(typeof FormData !== 'undefined'){ 
          var formData = new FormData(e);
          $.ajax({
                url: t,
                type: 'POST',
                data: formData,
                async: false,
                contentType: false,
                processData: false,
                handleAs: "text",
                enctype:"multipart/form-data",
                contents:{increment:callCount++,fileFields: "attachURL"},
                success: function (e) {
                      console.log(e);
                      window.location = JSON.parse(e.substring(e.indexOf("{"),e.indexOf("}")+1))["redirecturl"];
                      var str = JSON.parse(e.substring(e.indexOf("{"),e.indexOf("}")+1))["redirecturl"];
                      console.log(e.redirecturl);
                      redirectToOEA(str)
                },
                error: function(){
                      window.location = "http://oea.metlifetermlife.com"
                }
          });
    } else {
          var formData = postSerialize($('#'+e.attributes.id.value));
          $.ajax({
                url: t,
                type: 'POST',
                data: formData,
                async: false,
                contentType: 'application/x-www-form-urlencoded',
                processData: false,
                handleAs: "text",
                enctype:"multipart/form-data",
                contents:{increment:callCount++,fileFields: "attachURL"},
                success: function (e) {
                      console.log(e);
                      window.location = JSON.parse(e.substring(e.indexOf("{"),e.indexOf("}")+1))["redirecturl"];
                      var str = JSON.parse(e.substring(e.indexOf("{"),e.indexOf("}")+1))["redirecturl"];
                      console.log(e.redirecturl);
                      redirectToOEA(str)
                },
                error: function(){
                      window.location = "http://oea.metlifetermlife.com"
                }
          });
    }
}
function redirectToOEA(e) {
    window.location = e
}
