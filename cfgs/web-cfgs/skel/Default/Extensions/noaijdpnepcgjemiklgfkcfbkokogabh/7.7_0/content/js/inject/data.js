ImTranslatorDataEvent = {
	init: function(){

		(function(){
	            var doc = FExtension.browserInject.getDocument();
		    doc.addEventListener('keydown', ImTranslatorDataEvent.mousedown,!1);
		})();

		(function(){
	            var doc = FExtension.browserInject.getDocument();
		    doc.addEventListener('mousedown', ImTranslatorDataEvent.mousedown,!1);
		})();
		
		(function(){
        	    var doc = FExtension.browserInject.getDocument();
	            doc.addEventListener('mousedown', ImTranslatorDataEvent.mousedown_hk,!1);
		})();
		(function(){
        	    var doc = FExtension.browserInject.getDocument();
	            doc.addEventListener('mousedown', ImTranslatorDataEvent.mousedown_hkinv,!1);
		})();

	},

	mousedown: function(){
            TranslatorIM.SL_OBJ_BUILDER();
            FExtension.browserInject.extensionSendMessage({greeting: FExtension.store.getLocalStorage().length}, function(response) {
            if(response && response.farewell){
                var theresponse = response.farewell.split("~");
                var theresponse1 = theresponse[1].split("|")
                var theresponse2 = theresponse[2].split("|");
                TranslatorIM.SL_MSG=response.farewell;
                TranslatorIM.SL_langSrc=theresponse2[0];
                TranslatorIM.SL_langDst=theresponse2[1];

                TranslatorIM.SL_FontSize=theresponse2[2];
                TranslatorIM.SL_OnOff_BTN=theresponse2[3];
                TranslatorIM.SL_OnOff_PIN=theresponse2[4];
                TranslatorIM.SL_OnOff_HK=theresponse2[5];
                TranslatorIM.SL_HK=theresponse2[6];
                TranslatorIM.SL_NODETECT_bbl=theresponse2[7];
                TranslatorIM.SL_TS=theresponse2[8];
                TranslatorIM.SL_ENABLE=theresponse2[9];
                TranslatorIM.SL_TH_2=theresponse2[10];
                TranslatorIM.SL_TH_4=theresponse2[11];
                TranslatorIM.SL_FK=theresponse2[12];
                TranslatorIM.SL_no_detect_it=theresponse2[13];
                TranslatorIM.SL_dict_bbl=theresponse2[14];
                TranslatorIM.SL_HK2=theresponse2[15];
                TranslatorIM.SL_FK_inv=theresponse2[16];
		TranslatorIM.SL_FK_box1=theresponse2[17];
		TranslatorIM.SL_inlinerFK1=theresponse2[18];
		TranslatorIM.SL_inliner=theresponse2[19];
		TranslatorIM.SL_FK_box2=theresponse2[20];
		TranslatorIM.SL_inlinerFK2=theresponse2[21];
		TranslatorIM.SL_clean=theresponse2[22];
		//NEW HOT KEYS------------------------
		TranslatorIM.SL_HK_gt1=theresponse[5];
		TranslatorIM.SL_HK_gt2=theresponse[6];
		TranslatorIM.SL_HK_it1=theresponse[7];
		TranslatorIM.SL_HK_it2=theresponse[8];
		TranslatorIM.SL_HK_bb1=theresponse[9];
		//BLANK GT INVOKER
		TranslatorIM.SL_GT_INV=theresponse1[2];		
            }
	    
        });
       }
}


if(FExtension.browser.isLocalStoragePreset()){
	ImTranslatorDataEvent.init();
}else{
	var appcontent = window.document.getElementById("appcontent");
	appcontent.addEventListener("DOMContentLoaded", function(){
		ImTranslatorDataEvent.init();
	}, false);
}