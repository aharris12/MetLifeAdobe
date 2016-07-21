/**
 * Created by icunningham on 2/18/2016.
 */

if($(".global-header").length !=0) {
    var stickyOffset = $('.global-header').offset().top + 20;

    $(window).scroll(function () {
        var scroll_pos = $(window).scrollTop();

        if (scroll_pos >= stickyOffset) {
            $('.ctcTall').addClass('untopped');
            $('.ctcTall').removeClass('topped');
            $('.ctcOffline').addClass('untopped');
            $('.ctcOffline').removeClass('topped');
            $('#tcpa_c2c').css("display", "none");
        } else {
            $('.ctcTall').removeClass('untopped');
            $('.ctcTall').addClass('topped');
            $('.ctcOffline').removeClass('untopped');
            $('.ctcOffline').addClass('topped');
        }
    });
}

var regexPhone = /^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/;
var zChar = new Array(' ', ' ', '-', '-', '.');
var maxphonelength = 12;
var phonevalue1;
var cursorposition;

function click2calltcpa() {
    var p = document.getElementById("phone");
    var c2cButton = document.getElementById("lpButtonDiv");
    var tcpadiv = document.getElementById("tcpa_c2c");

    if (typeof(p) != 'undefined' && p != null) {
        p.addEventListener("focus", function(event) {
            tcpadiv.style.display = "block";
        }, true);
        p.addEventListener("blur", function(event) {
        }, true);
    }

    document.addEventListener('click', function(e) {
        if (e.target === tcpadiv || e.currentTarget === tcpadiv || e.target === p) {
            tcpadiv.style.display = "block";
        } else {
            tcpadiv.style.display = "none";
        }
    });
}

function ctcParseForNumber1(e) {
    phonevalue1 = ctcParseChar(e.value, zChar);
};

function ctcGetCursorPosition() {var e=phonevalue1,o=!1;for(i=0;i<e.length;i++)e.substring(i,1)!=n.substring(i,1)&&(o||(cursorposition=i,o=!0))};

function ctcValidatePhone(e){var n=phonevalue1;n=n.replace(/[^\d]*/gi,""),n.length<3?e.value=n:3==n.length?(pp=n+"-",e.value=pp):n.length>3&&n.length<6?(n=""+n,l30=n.length,p30=n.substring(0,3),p30+="-",p31=n.substring(3,l30),pp=p30+p31,e.value=pp):n.length>=6&&(n=""+n,l30=n.length,p30=n.substring(0,3),p30+="-",p31=n.substring(3,l30),pp=p30+p31,l40=pp.length,p40=pp.substring(0,7),p40+="-",p41=pp.substring(7,l40),ppp=p40+p41,e.value=ppp.substring(0,maxphonelength)),ctcGetCursorPosition(),cursorposition>=0&&(0==cursorposition?cursorposition=2:2>=cursorposition?cursorposition+=1:5>=cursorposition?cursorposition+=2:6==cursorposition?cursorposition+=2:7==cursorposition?(cursorposition+=4,e1=e.value.indexOf(")"),e2=e.value.indexOf("-"),e1>-1&&e2>-1&&e2-e1==4&&(cursorposition-=1)):11>cursorposition?cursorposition+=3:11==cursorposition?cursorposition+=1:cursorposition>=12&&(cursorposition=cursorposition));};

function ctcParseChar(e, n) {
    for (zChar = null == n.length ? new Array(n) : n, i = 0; i < zChar.length; i++) {
        sNewStr = "";
        for (var o = 0, t = e.indexOf(n[i]); - 1 != t;) sNewStr += e.substring(o, t), o = t + 1, t = e.indexOf(n[i], o);
        sNewStr += e.substring(e.lastIndexOf(n[i]) + 1, e.length), e = sNewStr
    }
    return sNewStr
};

function ctcUP(e, n) {
    if (n = n ? n : window.event, n.which) var i = n.which;
    else var i = n.keyCode;
    ctcParseForNumber1(e), i >= 48 && ctcValidatePhone(e)
};

function ctcDOWN(e, n) {
    n = n ? n : window.event, n.which ? n.which : n.keyCode
};

function ctcFocus(e) {
    n = Trim(e.value), obj_name = e.name, id = e.id, obj_name += ":", document.getElementById(id).value = ""
};

function ctcBlur(e) {
    n = Trim(e.value),
        obj_name = e.name,
        id = e.id,
        idOrig = id,
        obj_name = obj_name.replace("_", " ") + ":",
        id = id.substring(id, id.length - 6),
        id += ":",
    "phone" == e.id && ("" == e.value || "Phone" == e.value ? (document.getElementById(idOrig).className = "ctcPhoneField error", document.getElementById(idOrig).value = "Phone") : regexPhone.test(Trim(document.getElementById("phone").value)) ? document.getElementById(idOrig).className = "ctcPhoneField" : (document.getElementById(idOrig).className = "ctcPhoneField error", document.getElementById(idOrig).value = "Phone"))
};

function ctcSubmit(e) {
    var phoneVar = document.getElementById('phone').value;
    if (phoneVar.match(/...-...-..../)){
        lpSendData('session','phoneNumber',phoneVar);
        lpSendData('session','enablePCS','false');
    };
    if (phoneVar == 'Phone') {
        lpSendData('session','CustomPhoneWindow','1');
    };
};

function Trim(s) {
    while (s.substring(0, 1) == ' ') {
        s = s.substring(1, s.length);
    }
    while (s.substring(s.length - 1, s.length) == ' ') {
        s = s.substring(0, s.length - 1);
    }
    return s;
}