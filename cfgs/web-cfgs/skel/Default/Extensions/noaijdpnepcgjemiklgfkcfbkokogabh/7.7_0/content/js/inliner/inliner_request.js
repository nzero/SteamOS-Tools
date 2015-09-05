var STOP_GOOGLE_CAPTCHA_COUNTER = 0;
var STOP_GOOGLE_CAPTCHA_LIMIT = 25;
var ImTranslator_theurl = "https://webmail.smartlinkcorp.com/";

function getHttpRequest() {
    var ajaxRequest;
    try {
        ajaxRequest = new XMLHttpRequest();
    } catch (e) {
        try {
            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert(FExtension.element("extError1"));
                return false;
            }
        }
    }
    return ajaxRequest;
}

function truncStrByWord(str, length) {
    if (str != "undefined") {
        if (str.length > 25) {
            length = length - 25;
            var thestr = str;
            if (str.length > length) {
                str = str.substring(0, length);
                str = str.replace(new RegExp("/(.{1," + length + "})\b.*/"), "$1")    // VK - cuts str to max length without splitting words.
                var str2 = thestr.substring(length, (length + 25));
                var tempstr = str2.split(" ");
                var tmp = "";
                for (var i = 0; i < tempstr.length - 1; i++) {
                    tmp = tmp + tempstr[i] + " ";
                }
                str = str + tmp;
            }
        } else {
            str = str + " ";
        }
    }
    return str;
}

function DODetectionLangForReal(myTransText) {
        if (myTransText != "") {

	    var cntr = myTransText.split(" ");
	    var newTEXT = myTransText;
	    if(cntr.length<=1)  newTEXT = myTransText+" "+myTransText;

	    var num = Math.floor((Math.random() * SL_GEO.length)); 
	    var theRegion = SL_GEO[num];
	    var baseUrl = 'https://' + 'translate.google.'+theRegion+'/translate_a/single?client=t&sl=auto&tl=en&hl=en&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&dt=at&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&q='+encodeURIComponent(truncStrByWord(newTEXT, 100));


// By VK----------------------------------------------------
//	    var baseUrl = 'http://imtranslator.net';
// By VK----------------------------------------------------

            var ajaxRequest = getHttpRequest();
            ajaxRequest.onreadystatechange = function () {
                if (ajaxRequest.readyState == 4) {
                    try{
                        var resp = ajaxRequest.responseText;
                        var captcha=0;
			if(resp.indexOf('CaptchaRedirect')!=-1) captcha = 1;
		        if(resp.indexOf(',[["')!=-1) {

                                var GDImTranslator_lang=resp.split('",,,');
                                var CNT = GDImTranslator_lang.length-2;
				var GDImTranslator_lang1=GDImTranslator_lang[CNT].split(',"');
 				resp=GDImTranslator_lang1[GDImTranslator_lang1.length-1];

		 				//By VK -----------
 						if(resp.length>10) {
							GDImTranslator_lang1=GDImTranslator_lang[1].split(',"');
		 					resp=GDImTranslator_lang1[GDImTranslator_lang1.length-1];
	 						if(resp.length>10) resp = "en";
						}
		 				//By VK -----------



       		                DetLang = resp;
				//if(STOP_GOOGLE_CAPTCHA_COUNTER == -1) document.getElementById('inlinercovertext').innerHTML="Translating again ...";
				STOP_GOOGLE_CAPTCHA_COUNTER--;
			} else {
				setTimeout(function() {
					SLDetector(myTransText);
				}, 0);
			}
	             }catch (e){
        	                if(resp.indexOf('CaptchaRedirect') > -1){
				  //  document.getElementById('inlinercovertext').innerHTML='Captcha from google request';
				    STOP_GOOGLE_CAPTCHA_COUNTER = STOP_GOOGLE_CAPTCHA_LIMIT;
	                        }
	             }
                }
            }
            ajaxRequest.open("POST", baseUrl, true);
            ajaxRequest.send(null);
        }
}

function SLDetector (text){
  	var theLIMIT = 100;
	var SLDImTranslator_url = ImTranslator_theurl+"ld.php?tr=itr&text="+encodeURIComponent(truncStrByWord(text,theLIMIT));
		var ajaxRequest;  
		try{
			ajaxRequest = new XMLHttpRequest();
		} catch (e){
			try{
				ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try{
					ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e){
					alert(FExtension.element("extError1"));
					return false;
				}
			}
		}
		ajaxRequest.onreadystatechange = function(){
			if(ajaxRequest.readyState == 4){
                        	var tmp = ajaxRequest.responseText;
				if(tmp.indexOf("#|#")!=-1){
				    var tmp2 = tmp.split("#|#");
		                    DetLang="en";

        		            if(tmp2[0].length>0 && tmp2[0].length<7) DetLang=tmp2[0];
			    	} else DetLang="en";
			}
		}
		ajaxRequest.open("POST", SLDImTranslator_url, true);
		ajaxRequest.send(null);                          
}





function DODetectionLang(myTransText) {
    var AUTO = SL_langSrc;
    if (TranslatorIM.SL_no_detect_it == "true") AUTO = "auto";
    if (AUTO == "auto") {
	if(STOP_GOOGLE_CAPTCHA_COUNTER<=0){
// By VK ------ removed language detection. Translation goes without the detection engine-------------
	 var a=0; // It's a fake. Remove me!!!
	//DODetectionLangForReal(myTransText);
// By VK ------ removed language detection. Translation goes without the detection engine-------------
	}else  STOP_GOOGLE_CAPTCHA_COUNTER--;

        if (TranslatorIM.SL_TH_4 == 1 && /*FExtension.browserInject.getBrowserName() != 'firefox' &&*/ historySentense != ""){
       	    SaveToHistory(historySentense);
            historySentense = "";
        }
		setTimeout(function() {
//        if(STOP_GOOGLE_CAPTCHA_COUNTER==0){
		        translate(myTransText, inlinerInjectDictionary);

//	} else translate(myTransText, inlinerInjectDictionary);
		}, 0);
    } else {
        DetLang = SL_langSrc;
        if (TranslatorIM.SL_TH_4 == 1 && /*FExtension.browserInject.getBrowserName() != 'firefox' &&*/ historySentense != ""){
            SaveToHistory(historySentense);
            historySentense = "";
        }
        translate(myTransText, inlinerInjectDictionary);
    }
}










function injectScript(id, url, param, dictionary) {
    var xhr = getHttpRequest();
    xhr.open("POST", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var result = xhr.responseText;
            translateCallBack(result, dictionary);
        }
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(param);
}

function translate(text, injectDictionary) {
    var escapedText = text.replace(/#/g, "");
//    escapedText = escapedText.replace(/%/g, "");

    var langSrc = "auto";
    var SL_TMPTMP1 = SL_ListOfAvailableLanguages.split(",");
    for (var i = 0; i < SL_TMPTMP1.length; i++) {
        var SL_TMPTMP2 = SL_TMPTMP1[i].split(":");
        if (SL_TMPTMP2[0] == DetLang) {
            langSrc = DetLang;
            break;
        }
    }

    var langDst = SL_langDst;

// By VK ------ Translation goes without the detection engine-------------
/*
    if(langSrc != "auto" && DetLang == langDst){
      langDst = langSrc;
      langSrc = SL_langSrc;
      if(langSrc!="auto"){
	      var tmp = langSrc;
	      langSrc = langDst;
	      langDst = tmp;
      }
    }
*/
// By VK ------ Translation goes without the detection engine-------------

    var baseUrl = "";
    var SL_Params = "";
    var array = text.match(/\b\w+\b/g);

    var arraySplit = text.split(' ');
    //var dictionary = false;

    if (injectDictionary && dictionary){//array && array.length == 1 && arraySplit && arraySplit.length == 1) {
        //escapedText = escapedText.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        baseUrl = "https://translate.google.com/translate_a/t";

// By VK ------ Translation goes without the detection engine-------------
//        SL_Params = "client=drive&sl=" + langSrc + "&tl=" + langDst + "&multires=1&otf=2&ssel=0&tsel=0&notlr=0&sc=1&text=" + encodeURIComponent(dictionaryWord);
        SL_Params = "client=drive&sl=auto&tl=" + langDst + "&multires=1&otf=2&ssel=0&tsel=0&notlr=0&sc=1&text=" + encodeURIComponent(dictionaryWord);
// By VK ------ Translation goes without the detection engine-------------

        //dictionary = true;
    } else {
        baseUrl = "https://translate.google.com/";
//        SL_Params = "hl=en&langpair=" + langSrc + "|" + langDst + "&q=" + encodeURIComponent(escapedText) + "&tbb=1&ie=UTF-8&oe=UTF-8";
        SL_Params = "hl=en&langpair=auto|" + langDst + "&q=" + encodeURIComponent(escapedText) + "&tbb=1&ie=UTF-8&oe=UTF-8";
    }


    injectScript("inlinerScript", baseUrl, SL_Params, dictionary);
}

function translateCallBack(result, dictionary) {

    var translation = "";
    //if(result.indexOf('TRANSLATED_TEXT')!=-1){
    if (dictionary) {
        try {
            result = JSON.parse(result);
        } catch (e) {

        }
        if (result.dict) {
            var dict = result.dict;
            if (dict.length > 0 && dict[0].terms) {
                translation = dict[0].terms.join(', ');
            }
        } else {
            translation = result.sentences[0].trans;
        }
    } else {
        translation = get_translation(result);
    }
    //}
    inlinerInjectHandleMessage({name: "inlinerSelectionResponse", message: translation});
}

function get_translation(result){
    if (result.indexOf('<span id=result_box class="long_text">') > -1)   var ImtranslatorGoogleResult1 = result.split('<span id=result_box class="long_text">');
    else var ImtranslatorGoogleResult1 = result.split('<span id=result_box class="short_text">');
    var ImtranslatorGoogleResult2 = ImtranslatorGoogleResult1[1].split('</span></div>');
    var ImtranslatorGoogleResult3 = ImtranslatorGoogleResult2[0].replace(/<br>/ig, '@');
    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/&#39;/ig, "'");
    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/&quot;/ig, "'");
    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/&amp;/ig, "&");
    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/(<([^>]+)>)/ig, "");
    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/@/ig, "<br>");
    var ImtranslatorGoogleResult4 = ImtranslatorGoogleResult3.replace(/% 20/ig, " ");
    return ImtranslatorGoogleResult4;
}

function split_sentence(selText) {
    if (selText != "") {
        //By VK handling & sign------------------------------
        var historyText = selText;
        //selText = encodeURIComponent(selText);
        //By VK handling & sign------------------------------

        var baseUrl = 'http://imtranslator.net/split.asp';
        var params = 'text=' + encodeURIComponent(selText);

        var ajaxRequest = getHttpRequest();
        ajaxRequest.onreadystatechange = function () {
            if (ajaxRequest.readyState == 4) {
                var resp = ajaxRequest.responseText;

                //By VK handling Titles---------------------------------------------------------------
                if (resp.indexOf('http') == -1 || resp.indexOf('www') == -1) {
                    resp = resp.replace(/\n+/g, '\n');
                    resp = resp.replace(/\n/g, "<#>");
                    resp = resp.replace(/<#><#>/g, "<#>");
                    resp = resp.replace(/<#> <#>/g, "<#>");
                }
                //By VK handling Titles---------------------------------------------------------------

                var mas = resp.split('<#>');
                var doc = FExtension.browserInject.getDocument(true);
                doc.arraySentence = null;
                if (mas.length > 0) {
                    doc.arraySentence = mas;
                    runinliner();
                }
            }
        }
        //if (TranslatorIM.SL_TH_4 == 1)
        //    SaveToHistory(historyText);

        ajaxRequest.open("POST", baseUrl, true);
        ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ajaxRequest.send(params);
    }
}


function SaveToHistory(historyText) {
    var mySourceLang = DetLang;
    var myTargetLang = SL_langDst;
    //var GUrl = "https://translate.google.com?hl=en&langpair=" + mySourceLang + "|" + myTargetLang + "&q=" + encodeURIComponent(historyText) + "&tbb=1&ie=UTF-8&oe=UTF-8";
    var baseUrl = "https://translate.google.com/";
    var SL_Params = "hl=en&langpair=" + mySourceLang + "|" + myTargetLang + "&q=" + encodeURIComponent(historyText) + "&tbb=1&ie=UTF-8&oe=UTF-8";
    var GajaxRequest;
    try {
        GajaxRequest = new XMLHttpRequest();
    } catch (e) {
        try {
            GajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                GajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert(FExtension.element("extError1"));
                return false;
            }
        }
    }
    GajaxRequest.onreadystatechange = function () {
        if (GajaxRequest.readyState == 4) {
            var resp = GajaxRequest.responseText;
            if (resp.indexOf('<span id=result_box class="long_text">') > -1)
                var ImtranslatorGoogleResult1 = resp.split('<span id=result_box class="long_text">');
            else
                var ImtranslatorGoogleResult1 = resp.split('<span id=result_box class="short_text">');
            var ImtranslatorGoogleResult2 = ImtranslatorGoogleResult1[1].split('</span></div>');
            var ImtranslatorGoogleResult3 = ImtranslatorGoogleResult2[0].replace(/<br>/ig, '@');
            ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/&#39;/ig, "'");
            ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/&quot;/ig, "'");
            ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/&amp;/ig, "&");

            ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/(<([^>]+)>)/ig, "");
            ReadyToUseGoogleText = ImtranslatorGoogleResult3.replace(/@/ig, "\n");
            var SLnow = new Date();
            SLnow = SLnow.toString();
            var TMPtime = SLnow.split(" ");
            var CurDT = TMPtime[1] + " " + TMPtime[2] + " " + TMPtime[3] + ", " + TMPtime[4];
            FExtension.browserInject.runtimeSendMessage({greeting: historyText + "~~" + ReadyToUseGoogleText + "~~" + mySourceLang + "|" + myTargetLang + "~~" + FExtension.browserInject.getDocument().location + "~~" + CurDT + "~~5^^"}, function (response) {
                if(response){
                    console.log(response.farewell);
                }
            });
        }
    }
//    GajaxRequest.open("POST", GUrl, false);
//    GajaxRequest.send(null);
    GajaxRequest.open("POST", baseUrl, false);
    GajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    GajaxRequest.send(SL_Params);

}
