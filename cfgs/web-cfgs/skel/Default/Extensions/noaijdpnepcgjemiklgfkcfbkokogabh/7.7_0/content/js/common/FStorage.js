try{
FExtension.store = {
    profile_Folder: "ImTranslator",
    cl_Profile_Name: "profile.imt",
    global_pref_data: {},

    domStorageManager: null,
    domStorageUri: null,
    ioService: null,
    scriptSecManager: null,
    scriptSecPrincipal: null,
    localStorage: (FExtension.browser.isLocalStoragePreset()) ? localStorage : null,
    cachedSbDomainName: (FExtension.browser.isLocalStoragePreset()) ? "imtranslator.net" : null,
    initialized: FExtension.browser.isLocalStoragePreset(),
    getLocalStorage: function() {
        if (FExtension.browser.isLocalStoragePreset() || FExtension.store.initialized){
            return FExtension.store.localStorage;
        }else{
            if(Object.keys(FExtension.store.global_pref_data).length == 0){
                FExtension.store.loadPrefs();
            }
            FExtension.store.global_pref_data.length = Object.keys(FExtension.store.global_pref_data).length;
            return FExtension.store.global_pref_data;
        }        
    },

    loadNewParams : function(){
            //--------------------NEW HOTKEYS-------------------------------------------------------
            if(FExtension.store.get("SL_HK_gt1")==null){
                if(FExtension.store.get("SL_HK2")==null){
                         var mySL_HKset = localStorage["SL_HKset"].split("|");
                         var tmp0 = " + " + String.fromCharCode(mySL_HKset[1]);
                         if(mySL_HKset[1]==13) tmp0 = "";
			 var tmp1 = "Ctrl + Alt" + tmp0;
			 FExtension.store.set("SL_HK_gt1", tmp1);
		}
	    }
            if(FExtension.store.get("SL_HK_gt2")==null) FExtension.store.set("SL_HK_gt2", "Alt + Z");
            if(FExtension.store.get("SL_HK_it1")==null) FExtension.store.set("SL_HK_it1", "Alt + C");
            if(FExtension.store.get("SL_HK_it2")==null) FExtension.store.set("SL_HK_it2", "Alt + X");
            if(FExtension.store.get("SL_HK_bb1")==null){
                if(FExtension.store.get("SL_HK2")==null){
			 var tmp2 = FExtension.store.get("SL_MOSHK_bbl");
			 if(tmp2=="None") tmp2="";
			 FExtension.store.set("SL_HK_bb1", tmp2);
		}
	    }

            //--------------------NEW PARAM IN GT----------------------------------------------------
            if(FExtension.store.get("SL_HKset_inv")==null) FExtension.store.set("SL_HKset_inv", "3|90|true");

            //--------------------NEW PARAM IN BBL---------------------------------------------------
            if(FExtension.store.get("SL_langDst_name_bbl")==null) FExtension.store.set("SL_langDst_name_bbl", "Spanish");

            //--------------------NEW PARAMS IN IT---------------------------------------------------
            if(FExtension.store.get("SL_langSrc_it")==null){
		if(FExtension.store.get("SL_global_lng")=="true") FExtension.store.set("SL_langSrc_it", FExtension.store.get("SL_langSrc"));
		else FExtension.store.set("SL_langSrc_it", "auto");		
	    }
            if(FExtension.store.get("SL_langDst_it")==null){
		if(FExtension.store.get("SL_global_lng")=="true") FExtension.store.set("SL_langDst_it", FExtension.store.get("SL_langDst"));
		else FExtension.store.set("SL_langDst_it", "es");
	    }
            if(FExtension.store.get("SL_global_lng_it")==null){
		if(FExtension.store.get("SL_global_lng")=="true") FExtension.store.set("SL_global_lng_it", FExtension.store.get("SL_global_lng"));
		else FExtension.store.set("SL_global_lng_it", "false");		
	    }
            if(FExtension.store.get("SL_style")==null) FExtension.store.set("SL_style", "239e23");
            if(FExtension.store.get("SL_inject_brackets")==null) FExtension.store.set("SL_inject_brackets", "true");
            if(FExtension.store.get("SL_inject_before")==null) FExtension.store.set("SL_inject_before", "false");
            if(FExtension.store.get("SL_line_break")==null) FExtension.store.set("SL_line_break", "false");
            if(FExtension.store.get("SL_whole_word")==null) FExtension.store.set("SL_whole_word", "true");
            if(FExtension.store.get("SL_hide_translation")==null) FExtension.store.set("SL_hide_translation", "false");
            if(FExtension.store.get("SL_dictionary")==null){ 
		if(FExtension.store.get("SL_global_lng")=="true") FExtension.store.set("SL_dictionary", FExtension.store.get("SL_dict"));
		else FExtension.store.set("SL_dictionary", "true"); 
	    }	
            if(FExtension.store.get("SL_no_detect_it")==null) FExtension.store.set("SL_no_detect_it", "true");
            if(FExtension.store.get("SL_langDst_name_it")==null) FExtension.store.set("SL_langDst_name_it", "Spanish");
            if(FExtension.store.get("SL_FK_box1")==null) FExtension.store.set("SL_FK_box1", "true");
            if(FExtension.store.get("SL_FK_box2")==null) FExtension.store.set("SL_FK_box2", "true");

            //--------------------NEW PARAM Tr HISTORY-----------------------------------------------
            if(FExtension.store.get("SL_TH_4")==null) FExtension.store.set("SL_TH_4", "0");

    },

    set : function(key, value){              // Storing key function

        var obj = false;
        if (typeof(value) == 'object'){
            value = JSON.stringify(value);
            obj = true;
        }
        if(FExtension.browser.getBrowserName() == 'chrome'){
            //localStorage[key] = obj ? 'obj_'+value : value+''
            FExtension.store.getLocalStorage().setItem(key, obj ? 'obj_'+value : value+'');
        }
        if(FExtension.browser.getBrowserName() == 'firefox'){
            var pref = FExtension.store.getLocalStorage();
            pref[key] = obj ? 'obj_'+value : value+'';
            FExtension.store.savePrefs();
        }
    },
    get : function(key){                  // Retrieving key function
        //var val = localStorage[key];
        var val = null;
        if(FExtension.browser.getBrowserName() == 'chrome'){
            val = FExtension.store.getLocalStorage().getItem(key);
        }
        if(FExtension.browser.getBrowserName() == 'firefox'){
            var pref = FExtension.store.getLocalStorage();
            val = pref[key];
        }
        if (val && val.indexOf('obj_') == 0){
            val = val.slice(4,val.length);
            val = JSON.parse(val);
        }
        return val;
    },
    clearKey : function(key,removing){
        if (removing) {
            //localStorage.removeItem(key);
            FExtension.store.getLocalStorage().removeItem(key);
            return;
        }
        if (FExtension.store.getLocalStorage()) { //localStorage){
            //localStorage[FExtension.config.keyPrefix + key] = '';
            FExtension.store.getLocalStorage().setItem(FExtension.config.keyPrefix + key, '');
        }
    },
    loadPrefs : function(){
        var file = Components.classes["@mozilla.org/file/directory_service;1"].
            getService(Components.interfaces.nsIProperties).
            get("ProfD", Components.interfaces.nsIFile);

        file.append(FExtension.store.profile_Folder);
        if( !file.exists() || !file.isDirectory() ) {   // if it doesn't exist, create
            return null;
        }
        file.append(FExtension.store.cl_Profile_Name);

        var is = Components.classes["@mozilla.org/network/file-input-stream;1"]
            .createInstance( Components.interfaces.nsIFileInputStream );
        is.init(file, 0x01, 00004, null);

        var sis = Components.classes["@mozilla.org/scriptableinputstream;1"]
            .createInstance( Components.interfaces.nsIScriptableInputStream );
        sis.init( is );
        var output_data = sis.read( sis.available() );

        var data = output_data.split(";");
        var result = {};

        for(var i = 0; i < data.length; i++){
            result = FExtension.store.getValueByIndex("ran_before", i, data, result);
            result = FExtension.store.getValueByIndex("SL_Version", i, data, result);

 	    //------------------------------- History ------------------------------------
	    result = FExtension.store.getValueByIndex("SL_History", i, data, result);
	    result = FExtension.store.getValueByIndex("SL_TH_1", i, data, result);
	    result = FExtension.store.getValueByIndex("SL_TH_2", i, data, result);
	    result = FExtension.store.getValueByIndex("SL_TH_3", i, data, result);
            result = FExtension.store.getValueByIndex("SL_TH_4", i, data, result);

            //------------------------------- option gt ----------------------------------
            result = FExtension.store.getValueByIndex("SL_global_lng", i, data, result);
            result = FExtension.store.getValueByIndex("SL_Fontsize", i, data, result);
            result = FExtension.store.getValueByIndex("SL_langSrc", i, data, result);
            result = FExtension.store.getValueByIndex("SL_langDst", i, data, result);
            result = FExtension.store.getValueByIndex("SL_no_detect", i, data, result);
            result = FExtension.store.getValueByIndex("SL_dict", i, data, result);
            result = FExtension.store.getValueByIndex("SL_show_back", i, data, result);
            result = FExtension.store.getValueByIndex("SL_HKset", i, data, result);
            result = FExtension.store.getValueByIndex("SL_HKset_inv", i, data, result);
            result = FExtension.store.getValueByIndex("SL_langDst_name", i, data, result);
            result = FExtension.store.getValueByIndex("SL_Flag", i, data, result);

            //------------------------------- option bbl ---------------------------------
            result = FExtension.store.getValueByIndex("SL_ENABLE", i, data, result);
            result = FExtension.store.getValueByIndex("SL_show_button_bbl", i, data, result);
            result = FExtension.store.getValueByIndex("SL_global_lng_bbl", i, data, result);
            result = FExtension.store.getValueByIndex("SL_Fontsize_bbl", i, data, result);
            result = FExtension.store.getValueByIndex("SL_langSrc_bbl", i, data, result);
            result = FExtension.store.getValueByIndex("SL_langDst_bbl", i, data, result);
            result = FExtension.store.getValueByIndex("SL_no_detect_bbl", i, data, result);
            result = FExtension.store.getValueByIndex("SL_dict_bbl", i, data, result);
            result = FExtension.store.getValueByIndex("SL_translation_mos_bbl", i, data, result);
            result = FExtension.store.getValueByIndex("SL_pin_bbl", i, data, result);
            result = FExtension.store.getValueByIndex("SL_TS", i, data, result);
            result = FExtension.store.getValueByIndex("SL_langDst_name_bbl", i, data, result);

            //------------------------------- option it ----------------------------------
            result = FExtension.store.getValueByIndex("SL_langSrc_it", i, data, result);
            result = FExtension.store.getValueByIndex("SL_langDst_it", i, data, result);
            result = FExtension.store.getValueByIndex("SL_global_lng_it", i, data, result);
            result = FExtension.store.getValueByIndex("SL_style", i, data, result);
            result = FExtension.store.getValueByIndex("SL_inject_brackets", i, data, result);
            result = FExtension.store.getValueByIndex("SL_inject_before", i, data, result);
            result = FExtension.store.getValueByIndex("SL_line_break", i, data, result);
            result = FExtension.store.getValueByIndex("SL_whole_word", i, data, result);
            result = FExtension.store.getValueByIndex("SL_hide_translation", i, data, result);
            result = FExtension.store.getValueByIndex("SL_dictionary", i, data, result);
            result = FExtension.store.getValueByIndex("SL_no_detect_it", i, data, result);
            result = FExtension.store.getValueByIndex("SL_langDst_name_it", i, data, result);
            result = FExtension.store.getValueByIndex("SL_FK_box1", i, data, result);
            result = FExtension.store.getValueByIndex("SL_FK_box2", i, data, result);

            //------------------------------- option wpt ---------------------------------
            result = FExtension.store.getValueByIndex("SL_global_lng_wpt", i, data, result);
            result = FExtension.store.getValueByIndex("SL_langSrc_wpt", i, data, result);
            result = FExtension.store.getValueByIndex("SL_langDst_wpt", i, data, result);
            result = FExtension.store.getValueByIndex("SL_langDst_name_wpt", i, data, result);

	    //-----------------------HK for All Translators-------------------------------
            result = FExtension.store.getValueByIndex("SL_HK_gt1", i, data, result);
            result = FExtension.store.getValueByIndex("SL_HK_gt2", i, data, result);
            result = FExtension.store.getValueByIndex("SL_HK_it1", i, data, result);
            result = FExtension.store.getValueByIndex("SL_HK_it2", i, data, result);
            result = FExtension.store.getValueByIndex("SL_HK_bb1", i, data, result);



            //********************HOTKEYS FOR ALL****************************
            result = FExtension.store.getValueByIndex("SL_GLOBAL_HK_1", i, data, result); //ImTranslator
            result = FExtension.store.getValueByIndex("SL_GLOBAL_HK_2", i, data, result); //ImTranslator: G Translate
            result = FExtension.store.getValueByIndex("SL_GLOBAL_HK_3", i, data, result); //Options
            result = FExtension.store.getValueByIndex("SL_GLOBAL_HK_4", i, data, result); //Widget
            result = FExtension.store.getValueByIndex("SL_GLOBAL_HK_5", i, data, result); //TTS
            result = FExtension.store.getValueByIndex("SL_GLOBAL_HK_6", i, data, result); //Dictionary
            result = FExtension.store.getValueByIndex("SL_GLOBAL_HK_7", i, data, result); //Keyboard
            result = FExtension.store.getValueByIndex("SL_GLOBAL_HK_8", i, data, result); //Web Page Translation

            //********************WINDOW POSITION ON STARTUP****************************
            result = FExtension.store.getValueByIndex("WSP1x", i, data, result);
            result = FExtension.store.getValueByIndex("WSP1y", i, data, result);
            result = FExtension.store.getValueByIndex("WSP2x", i, data, result);
            result = FExtension.store.getValueByIndex("WSP2y", i, data, result);
            result = FExtension.store.getValueByIndex("WSP3x", i, data, result);
            result = FExtension.store.getValueByIndex("WSP3y", i, data, result);
            result = FExtension.store.getValueByIndex("WSP4x", i, data, result);
            result = FExtension.store.getValueByIndex("WSP4y", i, data, result);
            result = FExtension.store.getValueByIndex("WSP5x", i, data, result);
            result = FExtension.store.getValueByIndex("WSP5y", i, data, result);
            result = FExtension.store.getValueByIndex("WSP6x", i, data, result);
            result = FExtension.store.getValueByIndex("WSP6y", i, data, result);
            result = FExtension.store.getValueByIndex("WSP7x", i, data, result);
            result = FExtension.store.getValueByIndex("WSP7y", i, data, result);

            //********************SET OF THE CONTEXT MENU****************************
            result = FExtension.store.getValueByIndex("Context1", i, data, result);
            result = FExtension.store.getValueByIndex("Context2", i, data, result);
            result = FExtension.store.getValueByIndex("Context3", i, data, result);
            result = FExtension.store.getValueByIndex("Context4", i, data, result);
            result = FExtension.store.getValueByIndex("Context5", i, data, result);
            result = FExtension.store.getValueByIndex("Context6", i, data, result);
        }


        if(Object.keys(result).length == 0){
            result = FExtension.store.setDefault();
        }

        for(var prop in result){
            FExtension.store.global_pref_data[prop] = result[prop];
        }
    },
    getValueByIndex: function(name, i, data, result){
        if(data[i].indexOf(name + ":")!=-1){
            var data_array = data[i].split(":");
            result[name] = data_array[1];
        }
        return result;
    },
    savePrefs: function(){
        var file = Components.classes["@mozilla.org/file/directory_service;1"].
            getService(Components.interfaces.nsIProperties).
            get("ProfD", Components.interfaces.nsIFile);

        file.append(FExtension.store.profile_Folder);
        if( !file.exists() || !file.isDirectory() ) {   // if it doesn't exist, create
            file.create(Components.interfaces.nsIFile.DIRECTORY_TYPE, 0777);
        }
        file.append(FExtension.store.cl_Profile_Name);

        var foStream = Components.classes["@mozilla.org/network/file-output-stream;1"].
            createInstance(Components.interfaces.nsIFileOutputStream);
        foStream.init(file, 0x02 | 0x08 | 0x20, 0666, 0);// write, create, truncatefile,
        var converter = Components.classes["@mozilla.org/intl/converter-output-stream;1"].
            createInstance(Components.interfaces.nsIConverterOutputStream);

        converter.init(foStream, "UTF-8", 0, 0xFFFD);
        converter.writeString("");

        var pref_data = "";
        for(var name in FExtension.store.global_pref_data){
            var value = FExtension.store.global_pref_data[name];
            if(typeof value != undefined){
              if(name=="SL_History")                pref_data += name + ":" + value + ";";
              else                                  pref_data += name + ":" + value + ";\n";
            }
        }

        converter.writeString(pref_data);
        converter.close();
    },
    setDefault: function(){
        if(FExtension.browser.getBrowserName() == 'firefox'){
            FExtension.store.global_pref_data = {};

            //------------------------------- option imt ----------------------------------
            FExtension.store.global_pref_data["provider"] = "microsoft";
            FExtension.store.global_pref_data["locParent"] = "en";
            FExtension.store.global_pref_data["dirParentFrom"] = "en";
            FExtension.store.global_pref_data["dirParentTo"] = "es";
            FExtension.store.global_pref_data["AutoBack"] = "false";
            FExtension.store.global_pref_data["AutoDecode"] = "false";
            FExtension.store.global_pref_data["AutoDictionary"] = "false";
            FExtension.store.global_pref_data["AutoSpell"] = "false";
            FExtension.store.global_pref_data["AutoTranslit"] = "false";
            FExtension.store.global_pref_data["AutoDetect"] = "false";
            FExtension.store.global_pref_data["PrefTrans"] = 0;
            FExtension.store.global_pref_data["showBut"] = "true";
            //------------------------------- option imt ----------------------------------


            FExtension.store.global_pref_data["SL_global_lng"] = "false";
            FExtension.store.global_pref_data["SL_Fontsize"] = "14px";
            FExtension.store.global_pref_data["SL_langSrc"] = "auto";
            FExtension.store.global_pref_data["SL_langDst"] = "es";
            FExtension.store.global_pref_data["SL_no_detect"] = "true";
            FExtension.store.global_pref_data["SL_show_back"] = "false";
            FExtension.store.global_pref_data["SL_HKset"] = "3|90|true";
            FExtension.store.global_pref_data["SL_HKset_inv"] = "3|90|true";
            FExtension.store.global_pref_data["SL_Flag"] = "FALSE";
            FExtension.store.global_pref_data["SL_translatorFK"] = "Ctrl + Alt";
            FExtension.store.global_pref_data["SL_translatorFK_inv"] = "Alt";
            FExtension.store.global_pref_data["SL_dict"] = "true";


//-----------------------HK for All Translators--------------------------------------
            FExtension.store.global_pref_data["SL_HK_gt1"] = "Ctrl + Alt + Z";
            FExtension.store.global_pref_data["SL_HK_gt2"] = "Alt + Z";
            FExtension.store.global_pref_data["SL_HK_it1"] = "Alt + C";
            FExtension.store.global_pref_data["SL_HK_it2"] = "Alt + X";
            FExtension.store.global_pref_data["SL_HK_bb1"] = "Alt";
//-----------------------HK for All Translators--------------------------------------


            //------------------
            FExtension.store.global_pref_data["SL_ENABLE"] = "true";
            FExtension.store.global_pref_data["SL_show_button_bbl"] = "true";
            FExtension.store.global_pref_data["SL_global_lng_bbl"] = "false";
            FExtension.store.global_pref_data["SL_Fontsize_bbl"] = "12px";
            FExtension.store.global_pref_data["SL_langSrc_bbl"] = "auto";
            FExtension.store.global_pref_data["SL_langDst_bbl"] = "es";
            FExtension.store.global_pref_data["SL_no_detect_bbl"] = "true";
            FExtension.store.global_pref_data["SL_MOSHK_bbl"] = "Alt";
            FExtension.store.global_pref_data["SL_MOSHK_bbl2"] = "B";
            FExtension.store.global_pref_data["SL_translation_mos_bbl"] = "true";
            FExtension.store.global_pref_data["SL_pin_bbl"] = "false";
            FExtension.store.global_pref_data["SL_TS"] = "0";
            FExtension.store.global_pref_data["SL_langDst_name_bbl"] = "Spanish";
            FExtension.store.global_pref_data["SL_dict_bbl"] = "true";


            //------------------
            FExtension.store.global_pref_data["SL_History"] = "";
            FExtension.store.global_pref_data["SL_TH_1"] = "0";
            FExtension.store.global_pref_data["SL_TH_2"] = "0";
            FExtension.store.global_pref_data["SL_TH_3"] = "0";
            FExtension.store.global_pref_data["SL_TH_4"] = "0";

            FExtension.store.global_pref_data["SL_global_lng_wpt"] = "false";
            FExtension.store.global_pref_data["SL_langSrc_wpt"] = "auto";
            FExtension.store.global_pref_data["SL_langDst_wpt"] = "es";
            FExtension.store.global_pref_data["SL_langDst_name"] = "Spanish";
            //FExtension.store.global_pref_data["SL_langDst_name"] = "Russia";
            FExtension.store.global_pref_data["SL_langDst_name_wpt"] = "Spanish";
            //FExtension.store.global_pref_data["SL_langDst_name_wpt"] = "Russia";

            FExtension.store.global_pref_data["SL_langDst_name_it"] = "Spanish";
            //FExtension.store.global_pref_data["SL_langDst_name_it"] = "Russia";
            FExtension.store.global_pref_data["SL_no_detect_it"] = "true";
            FExtension.store.global_pref_data["SL_global_lng_it"] = "false";
            FExtension.store.global_pref_data["SL_FK_box1"] = "true";
            FExtension.store.global_pref_data["SL_FK_box2"] = "true";
            FExtension.store.global_pref_data["SL_inlinerFK1"] = "Alt";
            FExtension.store.global_pref_data["SL_inlinerFK2"] = "Ctrl";

            //********************Options for inliner****************************
            FExtension.store.global_pref_data["SL_langSrc_it"] = "auto";
            FExtension.store.global_pref_data["SL_langDst_it"] = "es";

            FExtension.store.global_pref_data["SL_shortcutInliner"] = "T";
            FExtension.store.global_pref_data["SL_shortcutClean"] = "C";
            FExtension.store.global_pref_data["SL_style"] = "239e23";
            FExtension.store.global_pref_data["SL_inject_before"] = "false";
            FExtension.store.global_pref_data["SL_inject_brackets"] = "true";
            FExtension.store.global_pref_data["SL_line_break"] = "false";
            FExtension.store.global_pref_data["SL_whole_word"] = "true";
            FExtension.store.global_pref_data["SL_hide_translation"] = "false";
            FExtension.store.global_pref_data["SL_dictionary"] = "true";
            FExtension.store.global_pref_data["ran_before"] = "1";

            //********************HOTKEYS FOR ALL****************************
            FExtension.store.global_pref_data["SL_GLOBAL_HK_1"] = "1|Ctrl+Alt|T"; //ImTranslator
            FExtension.store.global_pref_data["SL_GLOBAL_HK_2"] = "1|Ctrl+Alt|Z"; //ImTranslator: G Translate
            FExtension.store.global_pref_data["SL_GLOBAL_HK_3"] = "1|Ctrl+Alt|O"; //Options
            FExtension.store.global_pref_data["SL_GLOBAL_HK_4"] = "1|Ctrl+Alt|W"; //Widget
            FExtension.store.global_pref_data["SL_GLOBAL_HK_5"] = "1|Ctrl+Alt|V"; //TTS
            FExtension.store.global_pref_data["SL_GLOBAL_HK_6"] = "1|Ctrl+Alt|D"; //Dictionary
            FExtension.store.global_pref_data["SL_GLOBAL_HK_7"] = "1|Ctrl+Alt|K"; //Keyboard
            FExtension.store.global_pref_data["SL_GLOBAL_HK_8"] = "1|Alt|P";      //Web Page Translation

            //********************WINDOW POSITION ON STARTUP****************************
            FExtension.store.global_pref_data["WSP1x"] = "100";
            FExtension.store.global_pref_data["WSP1y"] = "100";
            FExtension.store.global_pref_data["WSP2x"] = "700";
            FExtension.store.global_pref_data["WSP2y"] = "10";
            FExtension.store.global_pref_data["WSP3x"] = "500";
            FExtension.store.global_pref_data["WSP3y"] = "10";
            FExtension.store.global_pref_data["WSP4x"] = "500";
            FExtension.store.global_pref_data["WSP4y"] = "10";
            FExtension.store.global_pref_data["WSP5x"] = "500";
            FExtension.store.global_pref_data["WSP5y"] = "10";
            FExtension.store.global_pref_data["WSP6x"] = "500";
            FExtension.store.global_pref_data["WSP6y"] = "10";
            FExtension.store.global_pref_data["WSP7x"] = "500";
            FExtension.store.global_pref_data["WSP7y"] = "10";

            //********************SET OF THE CONTEXT MENU****************************
	    FExtension.store.global_pref_data["Context1"] = "true";
	    FExtension.store.global_pref_data["Context2"] = "true";
	    FExtension.store.global_pref_data["Context3"] = "true";
	    FExtension.store.global_pref_data["Context4"] = "true";
	    FExtension.store.global_pref_data["Context5"] = "true";
	    FExtension.store.global_pref_data["Context6"] = "true";

            FExtension.store.savePrefs();
        } else{
            var manifestData = chrome.app.getDetails();
            FExtension.store.set("SL_Version", manifestData.version);
            FExtension.store.set("ran_before", "1");

 	    //------------------------------- History ------------------------------------
  	    FExtension.store.set("SL_History", "");
            FExtension.store.set("SL_TH_1", "0");
            FExtension.store.set("SL_TH_2", "0");
            FExtension.store.set("SL_TH_3", "0");
            FExtension.store.set("SL_TH_4", "0");

            //------------------------------- option gt ----------------------------------
            FExtension.store.set("SL_global_lng", "false");
            FExtension.store.set("SL_Fontsize", "14px");
            FExtension.store.set("SL_langSrc", "auto");
            FExtension.store.set("SL_langDst", "es");
            FExtension.store.set("SL_no_detect", "true");
            FExtension.store.set("SL_dict", "true");
            FExtension.store.set("SL_show_back", "false");
            FExtension.store.set("SL_HKset", "3|90|true");
            FExtension.store.set("SL_HKset_inv", "3|90|true");
            FExtension.store.set("SL_langDst_name", "Spanish");
            FExtension.store.set("SL_Flag", "FALSE");

            //------------------------------- option bbl ---------------------------------
            FExtension.store.set("SL_ENABLE", "true");
            FExtension.store.set("SL_show_button_bbl", "true");
            FExtension.store.set("SL_global_lng_bbl", "false");
            FExtension.store.set("SL_Fontsize_bbl", "12px");
            FExtension.store.set("SL_langSrc_bbl", "auto");
            FExtension.store.set("SL_langDst_bbl", "es");
            FExtension.store.set("SL_no_detect_bbl", "true");
            FExtension.store.set("SL_dict_bbl", "true");
            FExtension.store.set("SL_translation_mos_bbl", "true");
            FExtension.store.set("SL_pin_bbl", "false");
            FExtension.store.set("SL_TS", "0");
            FExtension.store.set("SL_langDst_name_bbl", "Spanish");

            //------------------------------- option it ----------------------------------
            FExtension.store.set("SL_langSrc_it", "auto");
            FExtension.store.set("SL_langDst_it", "es");
            FExtension.store.set("SL_global_lng_it", "false");
            FExtension.store.set("SL_style", "239e23");
            FExtension.store.set("SL_inject_brackets", "true");
            FExtension.store.set("SL_inject_before", "false");
            FExtension.store.set("SL_line_break", "false");
            FExtension.store.set("SL_whole_word", "true");
            FExtension.store.set("SL_hide_translation", "false");
            FExtension.store.set("SL_dictionary", "true");
            FExtension.store.set("SL_no_detect_it", "true");
            FExtension.store.set("SL_langDst_name_it", "Spanish");
            FExtension.store.set("SL_FK_box1", "true");
            FExtension.store.set("SL_FK_box2", "true");

            //------------------------------- option wpt ---------------------------------
            FExtension.store.set("SL_global_lng_wpt", "false");
            FExtension.store.set("SL_langSrc_wpt", "auto");
            FExtension.store.set("SL_langDst_wpt", "es");
            FExtension.store.set("SL_langDst_name_wpt", "Spanish");

	    //-----------------------HK for All Translators-------------------------------
            if(FExtension.store.get("SL_HK_gt1")==null) FExtension.store.set("SL_HK_gt1", "Ctrl + Alt + Z");
            if(FExtension.store.get("SL_HK_gt2")==null) FExtension.store.set("SL_HK_gt2", "Alt + Z");
            if(FExtension.store.get("SL_HK_it1")==null) FExtension.store.set("SL_HK_it1", "Alt + C");
            if(FExtension.store.get("SL_HK_it2")==null) FExtension.store.set("SL_HK_it2", "Alt + X");
            if(FExtension.store.get("SL_HK_bb1")==null) FExtension.store.set("SL_HK_bb1", "Alt");
        }
    }
};
    if(FExtension.browser.getBrowserName() == 'firefox'){
        FExtension.store.loadPrefs();
    }
}catch(ex){
//	FExtension.alert_debug(ex);
}