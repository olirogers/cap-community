/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/security/encodeXML"],function(t){"use strict";var e=5;var a={apiVersion:2};a.render=function(t,a){var i=sap.ui.getCore().getConfiguration().getLocale().getLanguage();var n=a.getTooltip_AsString();var s=a.getId();var l={};var o=sap.ui.getCore().getLibraryResourceBundle("sap.ui.unified").getText("CALENDAR_BTN_NEXT");var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.unified").getText("CALENDAR_BTN_PREV");t.openStart("div",a);t.class("sapUiCalHead");if(n){t.attr("title",n)}t.accessibilityState(a);t.openEnd();t.openStart("button",s+"-prev");t.attr("title",r);t.accessibilityState(null,{label:r});t.class("sapUiCalHeadPrev");if(!a.getEnabledPrevious()){t.class("sapUiCalDsbl");t.attr("disabled","disabled")}t.attr("tabindex","-1");t.openEnd();t.icon("sap-icon://slim-arrow-left",null,{title:null});t.close("button");var u=-1;var d=-1;var c=0;var g;for(c=0;c<e;c++){if(this.getVisibleButton(a,c)){if(u<0){u=c}d=c}}for(c=0;c<e;c++){if(i.toLowerCase()==="ja"||i.toLowerCase()==="zh"){g=e-1-c;if(this._isTwoMonthsCalendar(a)){switch(c){case 0:g=2;break;case 2:g=4;break;case 1:g=1;break;case 3:g=3;break}}}else{g=c}if(this._isTwoMonthsCalendar(a)){u=2;d=3}this.renderCalendarButtons(t,a,s,u,d,l,g)}t.openStart("button",s+"-next");t.attr("title",o);t.accessibilityState(null,{label:o});t.class("sapUiCalHeadNext");if(!a.getEnabledNext()){t.class("sapUiCalDsbl");t.attr("disabled","disabled")}t.attr("tabindex","-1");t.openEnd();t.icon("sap-icon://slim-arrow-right",null,{title:null});t.close("button");t.close("div")};a.renderCalendarButtons=function(t,e,a,i,n,s,l){if(this.getVisibleButton(e,l)){t.openStart("button",a+"-B"+l);t.class("sapUiCalHeadB");t.class("sapUiCalHeadB"+l);if(i===l){t.class("sapUiCalHeadBFirst")}if(n===l){t.class("sapUiCalHeadBLast")}t.attr("tabindex","-1");if(this.getAriaLabelButton(e,l)){s["label"]=this.getAriaLabelButton(e,l)}t.accessibilityState(null,s);s={};t.openEnd();var o=this.getTextButton(e,l)||"";var r=this.getAdditionalTextButton(e,l)||"";if(r){t.openStart("span",a+"-B"+l+"-Text");t.class("sapUiCalHeadBText");t.openEnd();t.text(o);t.close("span");t.openStart("span",a+"-B"+l+"-AddText");t.class("sapUiCalHeadBAddText");t.openEnd();t.text(r);t.close("span")}else{t.text(o)}t.close("button")}};a.getVisibleButton=function(t,e){var a=false;if(t["getVisibleButton"+e]){a=t["getVisibleButton"+e]()}else if(t["_getVisibleButton"+e]){a=t["_getVisibleButton"+e]()}return a};a.getAriaLabelButton=function(t,e){var a;if(t["getAriaLabelButton"+e]){a=t["getAriaLabelButton"+e]()}else if(t["_getAriaLabelButton"+e]){a=t["_getAriaLabelButton"+e]()}return a};a.getTextButton=function(t,e){var a;if(t["getTextButton"+e]){a=t["getTextButton"+e]()}else if(t["_getTextButton"+e]){a=t["_getTextButton"+e]()}return a};a.getAdditionalTextButton=function(t,e){var a;if(t["getAdditionalTextButton"+e]){a=t["getAdditionalTextButton"+e]()}else if(t["_getAdditionalTextButton"+e]){a=t["_getAdditionalTextButton"+e]()}return a};a._isTwoMonthsCalendar=function(t){return t.getParent()instanceof sap.ui.unified.Calendar&&t.getParent().getMonths()>=2};return a},true);