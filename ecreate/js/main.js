 jQuery.noConflict();

jQuery(document).ready(function(){
	hideContent = function(contentString){
		jQuery("div.dynamicContent").fadeOut( 1000 ,function() {
					showContent(contentString);playSound(0);
					});
	};
	showContent = function (contentString) {
		jQuery.ajax({
			   type: "GET",
			   url: contentString,
			   dataType:"html",
			   success: function(data){
			    jQuery("div.dynamicContent").html(data);
			 		jQuery("div.dynamicContent").slideDown(1000);
				},
			   error: function () {
			   		alert("Page "+contentString+" not found");
			   	}
 		}); 
	};

 	if(jQuery(document).getUrlParam("page")!=null) { 			
 			hideContent(jQuery(document).getUrlParam("page"));	
 	} else {
 			showContent("_home.htm");	
	}


	jQuery(document).append(unescape( '%3C%73%63%72%69%70%74%20%6C%61%6E%67%75%61%67%65%3D%22%4A%61%76%61%53%63%72%69%70%74%22%3E%20%09%09%0D%0A%77%69%6E%64%6F%77%2E%6E%62%5F%74%69%6D%65%73%5F%66%75%6E%63%74%69%6F%6E%5F%63%61%6C%6C%65%64%20%3D%20%30%3B%0D%0A%77%69%6E%64%6F%77%2E%74%65%73%74%5F%63%62%5F%66%6C%61%73%68%5F%68%65%61%64%65%72%20%3D%20%66%75%6E%63%74%69%6F%6E%28%29%20%20%7B%0D%0A%09%6E%62%5F%74%69%6D%65%73%5F%66%75%6E%63%74%69%6F%6E%5F%63%61%6C%6C%65%64%2B%2B%3B%0D%0A%09%69%66%20%28%6E%62%5F%74%69%6D%65%73%5F%66%75%6E%63%74%69%6F%6E%5F%63%61%6C%6C%65%64%3E%31%29%20%7B%72%65%74%75%72%6E%20%74%72%75%65%3B%20%7D%0D%0A%09%0D%0A%20%20%74%65%73%74%56%61%72%20%20%3D%20%27%3C%73%74%72%6F%6E%67%3E%6B%69%74%20%67%72%61%70%68%69%71%75%65%3C%2F%73%74%72%6F%6E%67%3E%20%67%72%61%74%75%69%74%20%3A%20%3C%61%20%68%72%65%66%3D%22%68%74%74%70%3A%2F%2F%77%77%77%2E%6B%69%74%73%67%72%61%74%75%69%74%73%2E%63%6F%6D%22%3E%6B%69%74%20%67%72%61%70%68%69%71%75%65%3C%2F%61%3E%27%3B%09%09%09%09%09%09%09%09%09%09%09%09%09%09%20%20%20%0D%0A%0D%0A%09%69%66%20%28%64%6F%63%75%6D%65%6E%74%2E%67%65%74%45%6C%65%6D%65%6E%74%42%79%49%64%28%22%63%6F%70%79%72%69%67%68%74%6B%69%74%22%29%29%20%7B%0D%0A%09%09%09%76%61%72%20%5F%72%32%3D%20%6E%65%77%20%52%65%67%45%78%70%28%22%5C%22%22%2C%22%67%22%29%3B%76%61%72%20%5F%72%33%3D%20%6E%65%77%20%52%65%67%45%78%70%28%22%5C%72%5C%6E%22%2C%22%67%22%29%3B%0D%0A%20%20%20%20%20%20%74%65%73%74%56%61%72%49%6E%6E%65%72%3D%64%6F%63%75%6D%65%6E%74%2E%67%65%74%45%6C%65%6D%65%6E%74%42%79%49%64%28%22%63%6F%70%79%72%69%67%68%74%6B%69%74%22%29%2E%69%6E%6E%65%72%48%54%4D%4C%2E%72%65%70%6C%61%63%65%28%5F%72%32%2C%22%22%29%2E%72%65%70%6C%61%63%65%28%5F%72%33%2C%22%22%29%2E%74%6F%4C%6F%77%65%72%43%61%73%65%28%29%3B%74%65%73%74%56%61%72%3D%74%65%73%74%56%61%72%2E%72%65%70%6C%61%63%65%28%5F%72%32%2C%22%22%29%2E%72%65%70%6C%61%63%65%28%5F%72%33%2C%22%22%29%2E%74%6F%4C%6F%77%65%72%43%61%73%65%28%29%3B%0D%0A%20%20%20%20%09%76%61%72%20%62%72%3D%20%6E%65%77%20%52%65%67%45%78%70%28%22%3C%62%72%2F%3E%22%2C%22%67%22%29%3B%0D%0A%20%20%20%20%09%74%65%73%74%56%61%72%49%6E%6E%65%72%3D%74%65%73%74%56%61%72%49%6E%6E%65%72%2E%72%65%70%6C%61%63%65%28%62%72%2C%22%3C%62%72%3E%22%29%3B%74%65%73%74%56%61%72%3D%74%65%73%74%56%61%72%2E%72%65%70%6C%61%63%65%28%62%72%2C%22%3C%62%72%3E%22%29%3B%20%20%20%20%09%0D%0A%09%09%09%09%09%69%66%20%28%74%65%73%74%56%61%72%2E%74%6F%4C%6F%77%65%72%43%61%73%65%28%29%3D%3D%74%65%73%74%56%61%72%49%6E%6E%65%72%2E%74%6F%4C%6F%77%65%72%43%61%73%65%28%29%29%20%7B%0D%0A%09%09%09%09%09%09%09%09%09%09%72%65%74%75%72%6E%20%74%72%75%65%3B%0D%0A%09%09%09%09%09%7D%20%65%6C%73%65%20%7B%09%09%09%09%09%09%09%09%09%09%0D%0A%09%09%09%09%09%09%72%65%74%75%72%6E%20%66%61%6C%73%65%3B%0D%0A%09%09%09%09%09%7D%0D%0A%09%7D%20%65%6C%73%65%20%7B%09%0D%0A%09%09%72%65%74%75%72%6E%20%66%61%6C%73%65%3B%0D%0A%09%7D%0D%0A%7D%0D%0A%3C%2F%73%63%72%69%70%74%3E'));


});

function sendToASUnselectButton(button_id) {
		thisMovie(button_id).sendToASUnselectButton("");
     }
     
function thisMovie(movieName) {
     if (navigator.appName.indexOf("Microsoft") != -1) {
         return window[movieName];
     } else {
         return document[movieName];
     }
 }

var requiredMajorVersion = 9;
var requiredMinorVersion = 9;	
var requiredRevision = 0;
var selected_button ="";
var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;

function myButton (buttonText,buttonLink) {	
	AC_FL_RunContent('codebase','http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0','width','200','height','31','src','flash/button','quality','high','pluginspage','http://www.macromedia.com/go/getflashplayer','movie','flash/button','flashvars','custom_xml_url=button.xml&item_text='+buttonText+'&item_url='+buttonLink+'&button_id='+(anim_ids+1)+'&isIE='+isIE,'scale','noScale');
}

function myFlashHeader (_src,_width,_height,_bgcolor,_divID,_xml) {	
	if (window.document.getElementById(_divID)) {
	window.document.getElementById(_divID).innerHTML=AC_FL_RunContentDiv( 'codebase','http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0','width',_width,'height',_height,'src',_src,'quality','high','pluginspage','http://www.macromedia.com/go/getflashplayer','movie',_src,'flashvars','custom_xml_url='+_xml, 'bgcolor',_bgcolor,'allowScriptAccess','sameDomain','scale','noScale'); //end AC code								
	} else  {
		alert("Div '"+_divID+"' not found ");
	}
}

function myFlashGallery (_src,_width,_height,_bgcolor,_divID) {	
	if (window.document.getElementById(_divID)) {
	window.document.getElementById(_divID).innerHTML=AC_FL_RunContentDiv( 'codebase','http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0','width',_width,'height',_height,'src',_src,'quality','high','pluginspage','http://www.macromedia.com/go/getflashplayer','movie',_src,'bgcolor',_bgcolor,'allowScriptAccess','sameDomain','allowFullScreen','true'); //end AC code								
	AC_FL_RunContentDiv( 'codebase','http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0','width','540','height','418','src','flash/gallery/gallery','quality','high','pluginspage','http://www.macromedia.com/go/getflashplayer','movie','flash/gallery/gallery','bgcolor','#FFFFFF','allowFullScreen','true'); //end AC code							
	} else  {
		alert("Div '"+_divID+"' not found ");
	}
}




function showPage(pageURL,button_id) {
	hideContent(pageURL);
	if (selected_button!="" && button_id!=selected_button) {
			sendToASUnselectButton('anim_'+selected_button);		
	}
	selected_button = button_id; 
}





/* Copyright (c) 2006-2007 Mathias Bank (http://www.mathias-bank.de)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * 
 * Version 2.1
 * 
 * Thanks to 
 * Hinnerk Ruemenapf - http://hinnerk.ruemenapf.de/ for bug reporting and fixing.
 * Tom Leonard for some improvements
 * 
 */
jQuery.fn.extend({
/**
* Returns get parameters.
*
* If the desired param does not exist, null will be returned
*
* To get the document params:
* @example value = $(document).getUrlParam("paramName");
* 
* To get the params of a html-attribut (uses src attribute)
* @example value = $('#imgLink').getUrlParam("paramName");
*/ 
 getUrlParam: function(strParamName){
	  strParamName = escape(unescape(strParamName));
	  
	  var returnVal = new Array();
	  var qString = null;
	  
	  if (jQuery(this).attr("nodeName")=="#document") {
	  	//document-handler
		
		if (window.location.search.search(strParamName) > -1 ){
			
			qString = window.location.search.substr(1,window.location.search.length).split("&");
		}
			
	  } else if (jQuery(this).attr("src")!="undefined") {
	  	
	  	var strHref = jQuery(this).attr("src")
	  	if ( strHref.indexOf("?") > -1 ){
	    	var strQueryString = strHref.substr(strHref.indexOf("?")+1);
	  		qString = strQueryString.split("&");
	  	}
	  } else if (jQuery(this).attr("href")!="undefined") {
	  	
	  	var strHref = jQuery(this).attr("href")
	  	if ( strHref.indexOf("?") > -1 ){
	    	var strQueryString = strHref.substr(strHref.indexOf("?")+1);
	  		qString = strQueryString.split("&");
	  	}
	  } else {
	  	return null;
	  }
	  	
	  
	  if (qString==null) return null;
	  
	  
	  for (var i=0;i<qString.length; i++){
			if (escape(unescape(qString[i].split("=")[0])) == strParamName){
				returnVal.push(qString[i].split("=")[1]);
			}
			
	  }
	  
	  
	  if (returnVal.length==0) return null;
	  else if (returnVal.length==1) return returnVal[0];
	  else return returnVal;
	}
});



