// Copyright 2009 Google Inc. All Rights Reserved.

/**
 * @fileoverview JavaScript for GSA Suggest (Core).
 *
 * List of global variables defined in other files. We define these variables in
 * an XSLT accessible to customers so that they can customize it. Look at the
 * stylesheet_template.enterprise for detailed descriptions of these variables.
 * Listing here with short descriptions:
 * <ul>
 * <li> ss_form_element {string} Name of search form.
 * <li> ss_popup_element {string} Name of search suggestion drop down.
 * <li> ss_seq {array} Types of suggestions to include.
 * <li> ss_g_one_name_to_display {string} name to display to user.
 * <li> ss_g_more_names_to_display {string} name to display to user.
 * <li> ss_g_max_to_display {number} Max number of query suggestions to display.
 * <li> ss_max_to_display {number} Max number of all types of suggestions to
 * display.
 * <li> ss_wait_millisec {number} Idling internval for fast typers.
 * <li> ss_delay_millisec {number} Delay time to avoid contention when drawing
 * the suggestion box by various par allel processes.
 * <li> ss_gsa_host {string} Host name or IP address of GSA.
 * <li> SS_OUTPUT_FORMAT_LEGACY {string} Constant that contains the value for
 * legacy output format.
 * <li> SS_OUTPUT_FORMAT_OPEN_SEARCH {string} Constant that contains the value
 * for OpenSearch output format.
 * <li> SS_OUTPUT_FORMAT_RICH {string} Constant that contains the value for rich
 * output format.
 * <li> ss_g_protocol {string} Output format protocol to use.
 * <li> ss_allow_debug {boolean} Whether debugging is allowed.
 * </ul>
 */

var ss_form_element = "metSearchForm";

//var ss_form_element = 'metSearchForm'; // search form

var enableSuggestions = true;

var ss_popup_element = 'search_suggest'; // search suggestion drop-down

var ss_popup_element_table = 'search_suggest_table';

var ss_allow_debug = false;

var ss_wait_millisec = 500;

var ss_delay_millisec = 30;

var ss_seq = ['g'];

/**
 * Suggestion type name to display when there is only one suggestion.
 *
 * @type {string}
 */
var ss_g_one_name_to_display =
    "Suggestion";

/**
 * Suggestion type name to display when there are more than one suggestions.
 *
 * @type {string}
 */
var ss_g_more_names_to_display =
    "Suggestions";


var ss_g_max_to_display = 4;
var ss_max_to_display = 12;

var ss_cached = [];

var ss_gsa_host = null;

var ajaxURL = "/wps/suggest";

if (window.location.href.indexOf("metlife.com/mmi", 0) >= 0) {
    ajaxURL = "/wps/mmi/suggest";
}


var SS_OUTPUT_FORMAT_LEGACY = 'legacy';
var SS_OUTPUT_FORMAT_OPEN_SEARCH = 'os';
var SS_OUTPUT_FORMAT_RICH = 'rich';

var ss_protocol = SS_OUTPUT_FORMAT_RICH;

var textOverLayDivBack = "overlayerback";

var textBoxID = "searchInPage";

//var textBoxID="searchInPage";
var maxCharLen = 21;
var autoCompleteEnable = true;
var scheduler = null;
var failCount = 0;
var failCountMaxTries = 3;
/**
 * Cached query when using up and down arrows to move around the suggestion box.
 * When the user escapes from the suggestion box, the typed query is restored
 * from here.
 *
 * @type {string}
 */
var ss_qbackup = null;

/**
 * The query for which suggestions are displayed.
 *
 * @type {string}
 */
var ss_qshown = null;

/**
 * The table row location of the selected suggestion entry.
 *
 * @type {number}
 */
var ss_loc = -1;

/**
 * Lock to prevent painting the suggestion box for an expired query after the
 * required delay.
 *
 * @type {number}
 */
var ss_waiting = 0;

/**
 * Lock to prevent contention when drawing the suggestion box, especially for
 * the concurrent AJAX calls.
 *
 * @type {boolean}
 */
var ss_painting = false;

/**
 * Pending key handling request holder.
 */
var ss_key_handling_queue = null;

/**
 * Pending painting request holder.
 */
var ss_painting_queue = null;

/**
 * Global flag to indicate whether the search box is currently dismissed. The
 * suggestion box must not be drawn if it is false.
 *
 * @type {boolean}
 */
var ss_dismissed = false;

/**
 * Low-level raw information including AJAX requests and responses shown via
 * rudimental alert().
 *
 * @type {boolean}
 */
var ss_panic = false;

/**
 * Constant for the name of class for a row in suggestions drop down.
 *
 * @type {string}
 */
var SS_ROW_CLASS = 'ss-gac-a';

/**
 * Constant for the name of class for a selected row in suggestions drop down.
 *
 * @type {string}
 */
var SS_ROW_SELECTED_CLASS = 'ss-gac-b';

if (!Array.indexOf) {
    /**
     * Custom implementation of indexOf for browsers that do not support it. For
     * example, IE6 and IE7 do not support.
     *
     * @param {Object}
     *            obj The element to be searched in the array.
     *
     * @return {number} The index if the element is found, -1 otherwise.
     */
    Array.prototype.indexOf = function (obj) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == obj) {
                return i;
            }
        }
        return -1;
    };
}

/**
 * Instance of debugger.
 *
 * @type {ss_Debugger}
 */
var ss_debug = new ss_Debugger();
var cacheTimeOut = 1000 * 60 * 30;

var timeStamp = new Date().getTime();

var isThemeMode = true;

var maxLengthFirstRow = 21;
var maxLenghtSecondRow = 31;
var textEntered;


function setSearchResultsPageIDS() {
    if (isThemeMode) {
        clear_suggestions();
        maxLengthFirstRow = 27;
        maxLenghtSecondRow = 40;
        clear_suggestions();
        ss_form_element = "frm_refineSearchResult";
        textOverLayDivBack = "overlayerback_sr";
        textBoxID = "form-refineSearchQuery_sr";
        maxCharLen = 21;
        autoCompleteEnable = true;
        ss_popup_element_table = 'search_suggest_table_sr';
        ss_popup_element = 'search_suggest_sr';
        isThemeMode = false;
    }
}

function setThemePageIDS() {
    if (!isThemeMode) {
        clear_suggestions();
        maxLengthFirstRow = 21;
        maxLenghtSecondRow = 31;
        ss_form_element = "metSearchForm";


        textOverLayDivBack = "overlayerback";

        textBoxID = "searchInPage";

        //textBoxID="searchInPage";
        maxCharLen = 24;
        autoCompleteEnable = true;
        ss_popup_element_table = 'search_suggest_table';
        ss_popup_element = 'search_suggest';
        isThemeMode = true;
    }
}

function clear_suggestions() {
    ss_dismissed = true;
    ss_clear();
}

function clearCache() {
    // alert(ss_cached['i'].g[0].q );
    ss_cached = [];
    // alert('cache cleared');
    timeStamp = new Date().getTime();
    scheduler = setTimeout("clearCache()", cacheTimeOut);
}


function doGetCaretPosition(oField) {

    // Initialize
    var iCaretPos = 0;

    // IE Support
    if (document.selection) {

        // Set focus on the element
        oField.focus();

        // To get cursor position, get empty selection range
        var oSel = document.selection.createRange();

        // Move selection start to 0 position
        oSel.moveStart('character', -oField.value.length);

        // The caret position is selection length
        iCaretPos = oSel.text.length;
    }

    // Firefox support
    else if (oField.selectionStart || oField.selectionStart == '0')
        iCaretPos = oField.selectionStart;

    // Return results
    return (iCaretPos);
}


function drawTextBox(suggest) {
    drawTextBox(suggest, null);
}

function isNonPrintableCharacter(e) {
    if (e != null)
        if (typeof e.which == "undefined") {
            // This is IE, which only fires keypress events for printable keys
            return true;
        } else if (typeof e.which == "number" && e.which > 0) {
            // In other browsers except old versions of WebKit, evt.which is
            // only greater than zero if the keypress is a printable key.
            // We need to filter out backspace and ctrl/alt/meta key
            // combinations

            return !e.ctrlKey && !e.metaKey && !e.altKey && e.which != 8;
        }
    return false;
}

/**
 * auto complete text writer
 *
 */
function drawTextBox(suggest, e) {
    var kid = -1;
    if (e != null) {
        kid = (window.event) ? window.event.keyCode : e.keyCode;
    }
    var textBox = document.getElementById(textBoxID);
    var overlayerback = document.getElementById(textOverLayDivBack);
    if (e != null && textEntered == textBox.value) {
        return;
    }
    else {
        textEntered = textBox.value;
    }

    if (textBox.value.length < maxCharLen) {
        if (kid != 37 && kid != 39)// not key left and not key right
        {
            if (suggest != null & suggest != '') {
                overlayerback.style.color = "silver";
                overlayerback.style.visibility = "visible";
                overlayerback.value = textBox.value + suggest;
            }
            else {
                overlayerback.style.visibility = "hidden";
            }
        }
    }
    else {
        overlayerback.style.color = "#ffffff";
    }
}

/**
 * Composes the suggest URI to be sent to EnterpriseFrontend. Extracts the user
 * input from the suggest form and then formats the URI based on that.
 *
 * @param {string}
 *            qVal The query string.
 * @param {Element}
 *            suggestForm The suggest form node.
 *
 * @return {string} The composed URI.
 */
function ss_composeSuggestUri(qVal, suggestForm) {
    /*
     * var siteVal = suggestForm.site ? suggestForm.site.value : null; var clientVal =
     * suggestForm.client ? suggestForm.client.value : null; if (!qVal || !siteVal ||
     * !clientVal) { return null; } var accessVal = (suggestForm.access &&
     * suggestForm.access.value) ? suggestForm.access.value : 'p';
     */
    var uri = ajaxURL;
    if (!qVal) {
        return null;
    }
    if (SS_OUTPUT_FORMAT_LEGACY == ss_protocol) {
        uri = uri + '?token=' + encodeURIComponent(qVal) +
            '&max_matches=' + ss_g_max_to_display;
    } else {
        // Same param names for other two formats.
        uri = uri + '?q=' + encodeURIComponent(qVal) +
            '&max=' + ss_g_max_to_display + '&cts=' + timeStamp;
    }
    /*
     * '&site=' + encodeURIComponent(siteVal)+ '&client=' +
     * encodeURIComponent(clientVal) + '&access=' +
     * encodeURIComponent(accessVal) +
     */
    uri = uri +
        '&format=' + encodeURIComponent(ss_protocol);
    return uri;
}

/**
 * Submits a suggest query to the EnterpriseFrontend.
 *
 * Also defines a nested function handler that is called when suggest results
 * are fetched. The handler function parses the JSON response to extract dynamic
 * result clusters, and document matches.
 *
 * @param {string}
 *            qVal The query that user enters.
 */
// TODO: This function is too big and needs to be re-factored.
function ss_suggest(qVal) {
    var startTimeMs = new Date().getTime();
    if (!ss_cached[qVal]) {
        ss_cached[qVal] = {};
    }
    var suggestForm = document.getElementById(ss_form_element);
    var uri = ss_composeSuggestUri(qVal, suggestForm);
    if (!uri) {
        return;
    }

    var url = ss_gsa_host ? 'http://' + ss_gsa_host + uri : uri;
    if (ss_panic) {
        // alert('ss_suggest() AJAX: ' + url);
    }
    var xmlhttp = XH_XmlHttpCreate();
    var handler = function () {

        if (xmlhttp.readyState == XML_READY_STATE_COMPLETED) {
            if (xmlhttp.status != null && xmlhttp.status != 200) {
                failCount++;
            }
            else {
                failCount = 0;
            }
            if (failCount >= failCountMaxTries) {
                if (typeof console != "undefined") {
                    console.info("suggestions disabled " + failCount);
                }
                enableSuggestions = false;
            }
            if (ss_panic) {
                // alert('ss_suggest() AJAX: ' + xmlhttp.responseText);
            }
            var suggested;
            try {
                suggested = eval('(' + xmlhttp.responseText + ')');
                autocompleteList = suggested;
            } catch (e) {
                ss_cached[qVal].g = null;

                // Always try to show suggestion box even if there is no results
                // because previous attempt may be skipped due to concurrent ajax
                // processing.
                ss_show(qVal);
                return;
            }
            if (scheduler == null) {
                scheduler = setTimeout("clearCache()", cacheTimeOut);
            }
            if (ss_use.g) {
                try {
                    switch (ss_protocol) {
                        case SS_OUTPUT_FORMAT_LEGACY:
                        default:
                            var suggestions = suggested;
                            if (suggestions && suggestions.length > 0) {
                                var found = false;
                                ss_cached[qVal].g = [];
                                var max = (ss_g_max_to_display <= 0) ?
                                    suggestions.length :
                                    Math.min(ss_g_max_to_display, suggestions.length);
                                for (var si = 0; si < max; si++) {
                                    ss_cached[qVal].g[si] = {'q': suggestions[si]};
                                    found = true;
                                }
                                if (!found) {
                                    ss_cached[qVal].g = null;
                                }
                            } else {
                                ss_cached[qVal].g = null;
                            }
                            break;
                        case SS_OUTPUT_FORMAT_OPEN_SEARCH:
                            if (suggested.length > 1) {
                                var suggestions = suggested[1];
                                if (suggestions && suggestions.length > 0) {
                                    var found = false;
                                    ss_cached[qVal].g = [];
                                    var max = (ss_g_max_to_display <= 0) ?
                                        suggestions.length :
                                        Math.min(ss_g_max_to_display, suggestions.length);
                                    for (var si = 0; si < max; si++) {
                                        if (suggestions[si] && suggestions[si] != suggested[0]) {
                                            ss_cached[qVal].g[si] = {'q': suggestions[si]};
                                            found = true;
                                        } else if ((suggested.length > 3) && ss_allow_non_query) {
                                            var title = (suggested[2].length > si) ?
                                                null : suggested[2][si];
                                            var url = (suggested[3].length > si) ?
                                                null : suggested[3][si];
                                            if (url) {
                                                title = !title ? ss_non_query_empty_title : title;
                                                ss_cached[qVal].g[si] = {'t': title, 'u': url};
                                                found = true;
                                            }
                                        }
                                    }
                                    if (!found) {
                                        ss_cached[qVal].g = null;
                                    }
                                } else {
                                    ss_cached[qVal].g = null;
                                }
                            } else {
                                ss_cached[qVal].g = null;
                            }
                            break;
                        case SS_OUTPUT_FORMAT_RICH:
                            var suggestions = suggested.results;
                            if (suggestions && suggestions.length > 0) {
                                var found = false;
                                ss_cached[qVal].g = [];
                                var max = (ss_g_max_to_display <= 0) ?
                                    suggestions.length :
                                    Math.min(ss_g_max_to_display, suggestions.length);
                                for (var si = 0; si < max; si++) {
                                    if (suggestions[si].name &&
                                        suggestions[si].name != suggested.query) {
                                        ss_cached[qVal].g[si] = {'q': suggestions[si].name};
                                        found = true;
                                    } else if (ss_allow_non_query) {
                                        var title = suggestions[si].content;
                                        var url = suggestions[si].moreDetailsUrl;
                                        if (url) {
                                            title = !title ? ss_non_query_empty_title : title;
                                            ss_cached[qVal].g[si] = {'t': title, 'u': url};
                                            found = true;
                                        }
                                    }
                                }
                                if (!found) {
                                    ss_cached[qVal].g = null;
                                }
                            } else {
                                ss_cached[qVal].g = null;
                            }
                            break;
                    }
                } catch (e) {
                    ss_cached[qVal].g = null;
                }
            }
            if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
                var stopTimeMs = new Date().getTime();
                ss_debug.addRequestDebugLine(qVal, 'suggest',
                    stopTimeMs - startTimeMs, ss_cached[qVal]);
            }

            // Always try to show suggestion box even if there is no results
            // because previous attempt may be skipped due to concurrent ajax
            // processing.
            ss_show(qVal);
        }
    };
    XH_XmlHttpGET(xmlhttp, url, handler);
}

/**
 * Determines if the query has been processed.
 *
 * @param {string}
 *            qVal The query that user enters.
 * @return {boolean} True if this query is already in cache.
 */
function ss_processed(qVal) {
    if (!ss_cached[qVal] && ss_use.g) {
        return false;
    }
    return true;
}


/**
 * Handles key stroke events for turning debug console on and off.
 */
//probably should add the textahead functionality here.
function ss_handleAllKey(e) {
    if (!enableSuggestions) {
        return;
    }
    var kid = (window.event) ? window.event.keyCode : e.keyCode;
    switch (kid) {
        case 40:  // "key down".
        case 38:  // "key up".
            // If the next line is activated, key down and up will bring search box
            // into focus which is useful if the user happens to click the mouse
            // outside of the search box and the suggestions, but it may not be
            // desirable if you want to use keyboard to scroll the page also, once
            // the
            // key is trapped here, it won't starts move the selection unless we add
            // suggestion movement code here, which would bring side effect to the
            // search box key stroke trapping.
            break;
        case 9:  // "tab".
            ss_qbackup = null;
            ss_dismissed = true;
            ss_clear(true);
        case 16:  // "shift-tab".
            ss_qbackup = null;
            ss_dismissed = true;
            var qry = document.getElementById(ss_form_element).query.value;
            if (!ss_processed(qry)) {
                // Fire new searches for the selected suggestion
                // useful for potential lucky guess.
                if (ss_panic) {
                    // alert('run ajax when key off');
                }
                ss_suggest(qry);
            }
            break;
        case 113:  // "F2".
            if (!ss_allow_debug) {
                break;
            }
            if (ss_debug && ss_debug.getDebugMode()) {
                ss_debug.deactivateConsole();
            } else {
                ss_debug.activateConsole();
            }
            break;
        default:
            break;
    }
}

function isBlockedChar(kid) {
    keyArr = [17, 20, 16, 18, 9, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 91, 92, 93, 45, 33, 34, 144, 145, 19];
    Array.prototype.contains = function (element) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == element) {
                return true;
            }
        }
        return false;
    }

    return keyArr.contains(kid);
}

/**
 * Handles key stroke events for the search box.
 */
function ss_handleKey(e) {
    if (!enableSuggestions) {
        return;
    }
    var tbl = document.getElementById(ss_popup_element);
    var rows = tbl.getElementsByTagName('tr');
    var kid = (window.event) ? window.event.keyCode : e.keyCode;
    // alert(kid);
    var fo = document.getElementById(ss_form_element);
    var qnow = (!ss_qbackup) ? fo.query.value : ss_qbackup;
    var sum = 0;
    var tbl = document.getElementById(ss_popup_element);
    if (isBlockedChar(kid)) {
        return;
    }
    switch (kid) {
        case 40:  // "key down".
            ss_dismissed = false;
            if (ss_processed(qnow)) {
                sum = ss_countSuggestions(qnow);
                if (sum > 0) {
                    if (tbl.style.visibility == 'hidden') {
                        ss_show(qnow);
                        break;
                    }
                    if (ss_qbackup) {
                        ss_loc++;
                    } else {
                        ss_qbackup = qnow;
                        ss_loc = 0;
                    }
                    while (ss_loc >= sum)
                        ss_loc -= sum;
                    var rows = tbl.getElementsByTagName('tr');
                    for (var ri = 0; ri < rows.length - 1; ri++) {
                        if (ri == ss_loc + 1) {
                            rows[ri].className = SS_ROW_SELECTED_CLASS;
                        } else {
                            rows[ri].className = SS_ROW_CLASS;
                        }
                    }

                    // Find out what type of suggestion it is.
                    var suggestion = ss_locateSuggestion(qnow, ss_loc);

                    // Adjust the query in the search box.
                    if (suggestion.q) {
                        fo.query.value = suggestion.q;
                    } else {
                        fo.query.value = ss_qbackup;
                    }
                }
            } else {
                // May be here if using back button.
                if (ss_panic) {
                    // alert('run ajax when key down');
                }
                ss_suggest(qnow);
            }
            break;
        case 38:  // "key up".
            ss_dismissed = false;
            if (ss_processed(qnow)) {
                sum = ss_countSuggestions(qnow);
                if (sum > 0) {
                    if (tbl.style.visibility == 'hidden') {
                        ss_show(qnow);
                        break;
                    }
                    if (ss_qbackup) {
                        ss_loc--;
                    } else {
                        ss_qbackup = qnow;
                        ss_loc = -1;
                    }
                    while (ss_loc < 0)
                        ss_loc += sum;
                    var rows = tbl.getElementsByTagName('tr');
                    for (var ri = 1; ri < rows.length - 1; ri++) {
                        if (ri == ss_loc + 1) {
                            rows[ri].className = SS_ROW_SELECTED_CLASS;
                        } else {
                            rows[ri].className = SS_ROW_CLASS;
                        }
                    }

                    // Find out what type of suggestion it is.
                    var suggestion = ss_locateSuggestion(qnow, ss_loc);

                    // Adjust the query in the search box.
                    if (suggestion.q) {
                        fo.query.value = suggestion.q;
                    } else {
                        fo.query.value = ss_qbackup;
                    }
                }
            } else {
                // May be here if using back button.
                if (ss_panic) {
                    // alert('run ajax when key up');
                }
                ss_suggest(qnow);
            }
            break;
        case 13:  // "enter".
            var url = null;
            if (ss_processed(qnow) && ss_qbackup && ss_loc > -1) {
                // Find out what type of suggestion it is.
                var suggestion = ss_locateSuggestion(ss_qbackup, ss_loc);
                // Adjust the query in the search box.
                if (suggestion.u) {
                    url = suggestion.u;
                }
            }
            ss_qbackup = null;
            ss_dismissed = true;
            ss_clear();
            if (url) {
                window.location.href = url;
            }
            break;
        case 27:  // "escape".
            // alert("before escape key >"+textEntered);
            /* var x=textEntered; */
            if (ss_qbackup) {
                fo.query.value = ss_qbackup;
                ss_qbackup = null;
            }
            ss_dismissed = true;
            ss_clear();
            // alert("escape key >"+textEntered);
            /*
             * textEntered=x; fo.query.value=x;
             */
            break;
        case 37:  // "key left".
            autoCompleteEnable = false;
            break;
        case 16:  // "shift-tab".
            break;
        case 9:  // "tab".
            break;
        case 35 : // end
            if (!autoCompleteEnable) {
                autoCompleteEnable = true;
            }
            break;
        case 39: // key right
            if (ss_dismissed)
                return;
            if (doGetCaretPosition(fo.query) >= fo.query.value.length) {

                if (!autoCompleteEnable) {
                    autoCompleteEnable = true;
                    break;
                }
                ss_dismissed = false;
                if (ss_processed(qnow)) {
                    sum = ss_countSuggestions(qnow);
                    if (sum > 0) {
                        var queryToBeFilled = "";
                        // Find out what type of suggestion it is.
                        var suggestion = ss_locateSuggestion(qnow, 0);
                        if (suggestion.q) {
                            queryToBeFilled = suggestion.q;
                        }
                        for (var ri = 1; ri < rows.length - 1; ri++) {
                            if (rows[ri].className == SS_ROW_SELECTED_CLASS) {
                                ss_loc = ri - 1;
                                var suggestion = ss_locateSuggestion(ss_qbackup, ss_loc);
                                if (suggestion.q) {
                                    queryToBeFilled = suggestion.q;
                                }
                            }
                        }
                        // Adjust the query in the search box.
                        if (suggestion.q) {
                            fo.query.value = queryToBeFilled;
                            drawTextBox('');
                        }
                    }
                }
                clear_suggestions();
            }
            else {
                autoCompleteEnable = false;
                break;
            }


        default:
            ss_dismissed = false;
            if (fo.query.value == ss_qshown) {
                // The key stroke has not changed the searched text.
            } else {
                if (ss_key_handling_queue) {
                    // Ignore pending key handling request delayed earlier.
                    clearTimeout(ss_key_handling_queue);
                }
                ss_qbackup = null;
                ss_loc = -1;
                // Flow through for delayed AJAX calls.
                ss_waiting++;
                if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
                    ss_debug.addWaitDebugLine(fo.query.value, 'queue', ss_wait_millisec);
                }
                ss_key_handling_queue = setTimeout(
                    'ss_handleQuery("' + ss_escape(fo.query.value) + '", ' +
                    ss_waiting + ')', ss_wait_millisec);
            }
            break;
    }
}

/**
 * Triggers fetch for query suggestions or triggers the display depending on
 * whether the query has already been processed earlier or not.
 *
 * @param {string}
 *            query The query whose suggestions are needed.
 * @param {number}
 *            waiting1 The value to match the lock so as not to handle queries
 *            that are no longer valid.
 */
function ss_handleQuery(query, waiting1) {
    if (waiting1 != ss_waiting) return;
    ss_waiting = 0;
    if (query == '') {
        ss_clear();
    } else if (!ss_processed(query)) {
        if (ss_panic) {
            // alert('run ajax when key change');
        }
        ss_suggest(query);
    } else {
        ss_show(query);
    }
}

/**
 * Puts search box in focus.
 */
function ss_sf() {
    document.getElementById(ss_form_element).query.focus();
    ss_dismissed = false;
}

/**
 * Clears search suggestions.
 *
 * @param {boolean}
 *            nofocus The flag to indicate whether the search box must not be in
 *            focus, such as when user uses the tab key to move away to the
 *            search button(s).
 */
function ss_clear(nofocus) {
    drawTextBox('');
    ss_qshown = null;
    var fo = document.getElementById(ss_form_element);
    var qnow = (!ss_qbackup) ? fo.query.value : ss_qbackup;
    ss_hide(qnow);
    /*
     * if (!nofocus) { ss_sf(); }
     */
}

$(".search-trigger__search-box").blur( function() {
    ss_clear();
});

/**
 * Hides search suggestions.
 *
 * @param {string}
 *            qry The query to which suggestions to be closed.
 */
function ss_hide(qry) {
    //ss_popup_element = search_suggest
    var tbl = document.getElementById(ss_popup_element);
    if (tbl.style.visibility == 'visible') {
        //ss_panic = false;  Never initialized anywhere
        if (ss_panic) {
            // alert('close suggestion box');
        }
        if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
            ss_debug.addHideDebugLine(qry, 'hide');
        }
        tbl.style.visibility = 'hidden';
        // custom change
        document.getElementById(ss_popup_element_table).style.visibility = 'hidden';
    }
}

/**
 * Shows search suggestions.
 *
 * @param {string}
 *            qry The query to which suggestions to be presented.
 */
function ss_show(qry) {
    var currentQry = document.getElementById(ss_form_element).query.value;
    if (currentQry != qry) {
        // The query whose suggestions to be shown does not match the current query
        // this happens when the previous query takes much longer to process.
        if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
            ss_debug.addHideDebugLine(qry, 'skip');
        }
        return;
    }

    var startTimeMs = new Date().getTime();
    if (ss_dismissed) {
        // The suggestion box has been dismissed by mouse close or key
        // escape/enter/tab.
        ss_qshown = null;
        ss_hide(qry);
        return;
    }

    if (!ss_processed(qry)) {
        // Not all ajax calls have been processed, skip instead.
        return;
    }

    if (qry == '') {
        // Empty query should not have much to suggest, close if not already.
        ss_hide(qry);
        return;
    }

    var g = ss_cached[qry] ? ss_cached[qry].g : null;
    var disp = false;
    if (ss_use.g && g) {
        disp = true;
    }
    if (!disp) {
        // Nothing to show for.
        ss_qshown = null;
        ss_hide(qry);
        return;
    }
    // Check the lock.
    if (ss_painting) {
        if (ss_painting_queue) {
            // Ignore potential painting request delayed earlier.
            clearTimeout(ss_painting_queue);
        }
        // Postpone the call for later time.
        if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
            ss_debug.addWaitDebugLine(qry, 'delay', ss_delay_millisec);
        }
        ss_painting_queue = setTimeout('ss_show("' + ss_escape(qry) + '")',
            ss_delay_millisec);
        return;
    } else {
        // Set the lock, which may not be fool-proof when more than another thread
        // checks the lock just before.
        ss_painting = true;
    }
    var tbl = document.getElementById(ss_popup_element);
    for (var ri = tbl.rows.length - 1; ri > -1; ri--) {
        tbl.deleteRow(ri);
    }
    var cnt = 0;
    for (var z = 0; z < ss_seq.length; z++) {
        switch (ss_seq[z]) {
            case 'g':
                cnt += ss_showSuggestion(g, cnt, tbl, qry);
                break;
        }
        if (ss_max_to_display > 0 && cnt >= ss_max_to_display) {
            break;
        }
    }
    if (cnt > 0) {

        var row = tbl.insertRow(-1);
        row.className = 'ss-gac-e';
        var cls = document.createElement('td');
        cls.colSpan = 2;
        var clsTxt = document.createElement('span');
        clsTxt.onclick = function () {
            ss_qbackup = null;
            ss_clear();  // This will always turn off ss_dismiss after bring search
                         // box into focus.
            var query = document.getElementById(ss_form_element).query.value;
            if (!ss_processed(query)) {
                // Fire new searches for the selected suggestion
                // useful for potential lucky guess.
                ss_dismissed = true;
                if (ss_panic) {
                    // alert('run ajax when mouse close');
                }
                ss_suggest(query);
            }
        };
        clsTxt.appendChild(document.createTextNode('close'));
        cls.appendChild(clsTxt);
        row.appendChild(cls);
        tbl.style.visibility = 'visible';
        // custom change
        document.getElementById(ss_popup_element_table).style.visibility = 'visible';
        ss_qshown = qry;
        if (ss_panic) {
            // alert('open suggestion box for ' + qry);
        }
        if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
            var stopTimeMs = new Date().getTime();
            ss_debug.addShowDebugLine(qry, stopTimeMs - startTimeMs,
                ss_cached[qry], cnt);
        }
    } else {
        ss_hide(qry);
    }
    // Release the lock.
    ss_painting = false;
}

/**
 * Draws suggestion.
 *
 * @param {object}
 *            g The suggest server entry.
 * @param {number}
 *            cnt The current row index to start drawing.
 * @param {object}
 *            tbl The suggestion box element.
 * @param {string}
 *            qry The user's query.
 * @return {number} Returns the number of suggestions actually drawn.
 */
function ss_showSuggestion(g, cnt, tbl, qry) {
    if (ss_max_to_display > 0 && cnt >= ss_max_to_display) {
        return 0;
    }
    if (g && g.length > 0) {
        lqry = qry.toLowerCase().replace(/\"/g, "");


        var firstrow = tbl.insertRow(-1);
        firstrow.className = SS_ROW_CLASS;
        var firstcol = document.createElement('td');
        firstcol.className = 'ss-gac-c';
        var clue = '';
        if (g.length == 1) {
            clue = ss_g_one_name_to_display;
        } else {
            clue = ss_g_more_names_to_display;
        }
        var secondcol = document.createElement('td');
        secondcol.appendChild(document.createTextNode(clue));
        secondcol.className = 'ss-gac-d';
        firstrow.appendChild(firstcol);
        firstrow.appendChild(secondcol);


        for (var i = 0; i < g.length; i++) {
            var row = tbl.insertRow(-1);
            row.onclick = ss_handleMouseC;
            row.onmousemove = ss_handleMouseM;
            row.className = SS_ROW_CLASS;
            var alt = document.createElement('td');
            // the suggestion will always start with the query.
            if (g[i].q) {
                var tempQ = g[i].q;

                if (tempQ.length > maxLenghtSecondRow)
                    tempQ = tempQ.substr(0, maxLenghtSecondRow) + "..";
                var txtNode = tempQ.substr(0, lqry.length);
                if (g[i].q.length > lqry.length) {
                    txtNode += '<b>' + tempQ.substring(lqry.length) + '</b>';
                    // for first row
                    if (i == 0) {
                        drawTextBox(g[i].q.substring(lqry.length));
                    }
                }
                alt.innerHTML = txtNode;
            } else {
                alt.innerHTML = '<i>' + g[i].t + '</i>';
            }

            alt.className = 'ss-gac-c';
            row.appendChild(alt);
            alt.colSpan = 2;

            if (ss_max_to_display > 0 && cnt + i + 1 >= ss_max_to_display) {
                return i + 1;
            }
        }
        return g.length;
    }
    return 0;
}

/**
 * Handles mouse movement. To be attached to the row on mouse-over.
 *
 * @return {boolean} Always returns true after handling the event.
 * @this {Element}
 */
function ss_handleMouseM() {
    var fo = document.getElementById(ss_form_element);
    var tbl = document.getElementById(ss_popup_element);
    var rows = tbl.getElementsByTagName('tr');
    for (var ri = 1; ri < rows.length - 1; ri++) {
        if (rows[ri] == this && rows[ri].className != SS_ROW_SELECTED_CLASS) {
            // Select the row.
            rows[ri].className = SS_ROW_SELECTED_CLASS;
            // Back up the original query if not already, and adjust the reference
            // index.
            if (!ss_qbackup) {
                ss_qbackup = fo.query.value;
            }
            ss_loc = ri - 1;
            // Find out what type of suggestion it is.
            var suggestion = ss_locateSuggestion(ss_qbackup, ss_loc);
            // Adjust the query in the search box.
            if (suggestion.q) {
                fo.query.value = suggestion.q;
                drawTextBox('');
            } else {
                fo.query.value = ss_qbackup;
                drawTextBox('');
            }
        } else if (rows[ri] != this) {
            rows[ri].className = SS_ROW_CLASS;
        }
    }
    // Bring the search box back into focus to allow the next key down and key
    // up.
    ss_sf();
    return true;
}

/**
 * Handles mouse pressing, while keeping the history in the browser in case back
 * button is used. To be attached to the row on mouse clicking.
 *
 * @this {Element}
 */
function ss_handleMouseC() {
    var fo = document.getElementById(ss_form_element);
    var tbl = document.getElementById(ss_popup_element);
    var rows = tbl.getElementsByTagName('tr');
    for (var ri = 0; ri < rows.length - 1; ri++) {
        if (rows[ri] == this) {
            var x = rows[ri].getElementsByTagName('td');

            $('#searchInPage,#Search').val($(x)[0].innerText);

            var searchTerm = $(".search-trigger__search-box").val();


            if ($(".search-trigger__search-box").hasClass("js-oldSearch")) {
                   ServicesAPI.legacySearch(searchTerm);
            } else {
                //For Integration we only need this statment
                    ServicesAPI.redirectToSearchResultsPage(searchTerm);
            }
            // Back up the original query if not already, and adjust the reference
            // index.
            /* if (!ss_qbackup) {
             ss_qbackup = fo.query.value;
             }
             ss_loc = ri-1;
             // Find out what type of suggestion it is.
             var suggestion = ss_locateSuggestion(ss_qbackup, ss_loc);
             // Adjust the query in the search box.
             if (suggestion.q) {
             fo.query.value = suggestion.q;
             fo.submit();
             } else {
             fo.query.value = ss_qbackup;
             if (suggestion.u) {
             // window.location.href = suggestion.u;
             }
             }
             ss_dismissed = true;
             ss_clear();
             break;*/
        }
    }
}

/**
 * Counts the total number of suggestions for the typed query.
 *
 * @param {string}
 *            query The typed query.
 * @return {number} The number of suggestions we have for displaying.
 */
function ss_countSuggestions(query) {
    var cnt = 0;
    for (var i = 0; i < ss_seq.length; i++) {
        switch (ss_seq[i]) {
            case 'g':
                cnt += ss_cached[query].g ? ss_cached[query].g.length : 0;
                break;
        }
        if (ss_max_to_display > 0 && cnt >= ss_max_to_display) {
            return ss_max_to_display;
        }
    }
    return cnt;
}

/**
 * Looks up the suggestion for the typed query.
 *
 * @param {string}
 *            query The typed query.
 * @param {number}
 *            loc The location index of the current suggestion selection.
 *
 * @return {string} The suggestion term for given query at the given loc.
 */
function ss_locateSuggestion(query, loc) {
    var cnt1 = 0;
    var cnt2 = 0;
    var type = null;
    for (var z = 0; z < ss_seq.length; z++) {
        switch (ss_seq[z]) {
            case 'g':
                cnt2 += ss_cached[query].g ? ss_cached[query].g.length : 0;
                break;
        }
        if (loc >= cnt1 && loc < cnt2) {
            switch (ss_seq[z]) {
                case 'g':
                    var qV = ss_cached[query].g[loc - cnt1].q;
                    if (qV) {
                        return {'q': qV};
                    } else {
                        return {'u': ss_cached[query].g[loc - cnt1].u};
                    }
            }
            break;
        }
        cnt1 = cnt2;
    }
    return null;
}

/**
 * Escapes query to be used in setTimeout().
 *
 * @param {string}
 *            query The query whose suggestions are needed.
 * @return {string} The escaped query.
 */
function ss_escape(query) {
    return query.replace(/\\/g, '\\\\').replace(/\"/g, '\\\"');
}

/**
 * Escapes query to be used in debugging display.
 *
 * @param {string}
 *            query The query whose suggestions are needed.
 * @return {string} The escaped query.
 */
function ss_escapeDbg(query) {
    var escapedQuery = '';
    var ch = query.split('');
    for (var i = 0; i < ch.length; i++) {
        switch (ch[i]) {
            case '&':
                escapedQuery += '&amp;';
                break;
            case '<':
                escapedQuery += '&lt;';
                break;
            case '>':
                escapedQuery += '&gt;';
                break;
            default:
                escapedQuery += ch[i];
                break;
        }
    }
    return escapedQuery;
}

/**
 * Debugger class.
 *
 * @constructor
 */
function ss_Debugger() {
    this.debugMode = false;
}

/**
 * Id of debug console in the DOM Tree.
 *
 * @type {string}
 */
ss_Debugger.DEBUG_CONSOLE_ID = 'ss_debug_console';

/**
 * Id of content node of debug console in the DOM Tree.
 *
 * @type {string}
 */
ss_Debugger.DEBUG_CONTENT_ID = 'ss_debug_content';

/**
 * Id of the button that minimizes/maximizes the debug console.
 *
 * @type {string}
 */
ss_Debugger.DEBUG_TOGGLE_ID = 'ss_debug_toggle';

/**
 * Getter method for debugMode member variable.
 *
 * @return {boolean} The value of debugMode variable.
 */
ss_Debugger.prototype.getDebugMode = function () {
    return this.debugMode;
};

/**
 * Activates debugger console.
 */
ss_Debugger.prototype.activateConsole = function () {
    var console = document.getElementById(ss_Debugger.DEBUG_CONSOLE_ID);
    if (console) {
        console.style.display = 'block';
    } else {
        var dc = document.createElement('div');
        dc.id = ss_Debugger.DEBUG_CONSOLE_ID;
        dc.zIndex = 100;
        dc.className = 'expanded';
        var title = document.createElement('h1');
        title.appendChild(document.createTextNode('GSA Suggest Debug Console'));
        title.style.display = 'inline';
        dc.appendChild(title);
        var actn = document.createElement('div');
        actn.style.float = 'right';
        var btn = document.createElement('button');
        btn.onclick = function (event) {
            var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
            if (debugContent) {
                for (var ri = debugContent.rows.length - 1; ri > 0; ri--) {
                    debugContent.deleteRow(ri);
                }
            }
        };
        btn.appendChild(document.createTextNode('Clear console'));
        actn.appendChild(btn);
        btn = document.createElement('button');
        btn.onclick = function (event) {
            ss_cached = [];
        };
        btn.appendChild(document.createTextNode('Clear cache'));
        actn.appendChild(btn);
        btn = document.createElement('button');
        btn.id = ss_Debugger.DEBUG_TOGGLE_ID;
        btn.onclick = function (event) {
            var debugConsole = document.getElementById(ss_Debugger.DEBUG_CONSOLE_ID);
            if (debugConsole) {
                var b = document.getElementById(ss_Debugger.DEBUG_TOGGLE_ID);
                if (debugConsole.className.indexOf('expanded') != -1) {
                    debugConsole.className = debugConsole.className.replace(
                        /expanded/, 'contracted');
                    b.innerHTML = 'Maximize';
                } else {
                    debugConsole.className = debugConsole.className.replace(
                        /contracted/, 'expanded');
                    b.innerHTML = 'Minimize';
                }
            }
        };
        btn.appendChild(document.createTextNode('Minimize'));
        actn.appendChild(btn);
        actn.style.display = 'inline';
        dc.appendChild(actn);
        dc.appendChild(document.createElement('br'));
        var pane = document.createElement('table');
        pane.id = ss_Debugger.DEBUG_CONTENT_ID;
        var dhr = pane.insertRow(-1);
        var dhc = document.createElement('th');
        dhc.innerHTML = 'Query';
        dhr.appendChild(dhc);
        dhc = document.createElement('th');
        dhc.innerHTML = 'Type';
        dhr.appendChild(dhc);
        dhc = document.createElement('th');
        dhc.innerHTML = 'Time';
        dhr.appendChild(dhc);
        dhc = document.createElement('th');
        dhc.innerHTML = 'g';
        dhr.appendChild(dhc);
        dhc = document.createElement('th');
        dhc.innerHTML = 'Total';
        dhr.appendChild(dhc);
        dc.appendChild(pane);
        document.body.appendChild(dc);
    }
    this.debugMode = true;
};

/**
 * De-activates debugger console.
 */
ss_Debugger.prototype.deactivateConsole = function () {
    var console = document.getElementById(ss_Debugger.DEBUG_CONSOLE_ID);
    if (console) {
        console.style.display = 'none';
    }
    this.debugMode = false;
};

ss_Debugger.prototype.addRequestDebugLine = function (query, type, time, obj) {
    var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
    if (debugContent) {
        var currentRow = debugContent.insertRow(1);
        var currentCell = document.createElement('td');
        currentCell.innerHTML = '&lt;' + ss_escapeDbg(query) + '&gt;';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.innerHTML = type;
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.className = 'no';
        currentCell.innerHTML = time + ' ms';
        currentRow.appendChild(currentCell);
        switch (type) {
            case 'suggest':
                currentCell = document.createElement('td');
                currentCell.className = 'no';
                currentCell.innerHTML = (obj.g ? obj.g.length : 0);
                currentRow.appendChild(currentCell);
                currentCell = document.createElement('td');
                currentRow.appendChild(currentCell);
                break;
            default:
                currentCell = document.createElement('td');
                currentRow.appendChild(currentCell);
                currentCell = document.createElement('td');
                currentRow.appendChild(currentCell);
                break;
        }
    }
};

ss_Debugger.prototype.addShowDebugLine = function (query, time, o, total) {
    var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
    if (debugContent) {
        var currentRow = debugContent.insertRow(1);
        var currentCell = document.createElement('td');
        currentCell.innerHTML = '&lt;' + ss_escapeDbg(query) + '&gt;';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.innerHTML = '<i>show</i>';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.className = 'no';
        currentCell.innerHTML = time + ' ms';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.className = 'no';
        currentCell.innerHTML = (o ? (o.g ? o.g.length : 0) : 0);
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.className = 'no';
        currentCell.innerHTML = total;
        currentRow.appendChild(currentCell);
    }
};

ss_Debugger.prototype.addHideDebugLine = function (query, type) {
    var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
    if (debugContent) {
        var currentRow = debugContent.insertRow(1);
        var currentCell = document.createElement('td');
        currentCell.innerHTML = '&lt;' + ss_escapeDbg(query) + '&gt;';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.innerHTML = '<i>' + type + '</i>';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.className = 'no';
        currentCell.innerHTML = '0 ms';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentRow.appendChild(currentCell);
    }
};

ss_Debugger.prototype.addWaitDebugLine = function (query, type, time) {
    var debugContent = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
    if (debugContent) {
        var currentRow = debugContent.insertRow(1);
        var currentCell = document.createElement('td');
        currentCell.innerHTML = '&lt;' + ss_escapeDbg(query) + '&gt;';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.innerHTML = '<i>' + type + '</i>';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentCell.className = 'no';
        currentCell.innerHTML = time + ' ms';
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentRow.appendChild(currentCell);
        currentCell = document.createElement('td');
        currentRow.appendChild(currentCell);
    }
};

var ss_use = {};
ss_use.g = ss_seq.indexOf('g') >= 0;