/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BlockLayerUtils","sap/ui/thirdparty/jquery"],function(a,i){"use strict";var e=function(){};e.getElement=function(i){var e="sapUiLocalBusyIndicatorSizeMedium";if(i==="Large"){e="sapUiLocalBusyIndicatorSizeBig"}var r=document.createElement("div");r.className="sapUiLocalBusyIndicator "+e+" sapUiLocalBusyIndicatorFade";a.addAriaAttributes(r);t(r);return r};function t(a,i){i=i||"sapUiLocalBusyIndicatorAnimStandard";var e=sap.ui.getCore().getLibraryResourceBundle("sap.ui.core"),t=e.getText("BUSY_TEXT");a.setAttribute("title",t);var r=document.createElement("div");r.className="sapUiLocalBusyIndicatorAnimation "+i;r.appendChild(document.createElement("div"));r.appendChild(document.createElement("div"));r.appendChild(document.createElement("div"));a.appendChild(r)}function r(a,i){var e=a.$parent.get(0),t=a.$blockLayer.get(0);var r=t.children[0],c=r.offsetWidth;if(e.offsetWidth<c){r.className="sapUiLocalBusyIndicatorAnimation sapUiLocalBusyIndicatorAnimSmall"}}e.addHTML=function(a,e){var c=sap.ui.require("sap/ui/core/library").BusyIndicatorSize,n="sapUiLocalBusyIndicatorSizeMedium",s;switch(e){case c.Small:n="sapUiLocalBusyIndicatorSizeMedium";s="sapUiLocalBusyIndicatorAnimSmall";break;case c.Large:n="sapUiLocalBusyIndicatorSizeBig";s="sapUiLocalBusyIndicatorAnimStandard";break;case c.Auto:n="sapUiLocalBusyIndicatorSizeMedium";s="sapUiLocalBusyIndicatorAnimStandard";break;default:n="sapUiLocalBusyIndicatorSizeMedium";s="sapUiLocalBusyIndicatorAnimStandard";break}if(!a){return}var o=a.$parent.get(0),d=a.$blockLayer.get(0);o.className+=" sapUiLocalBusy";d.className+=" sapUiLocalBusyIndicator "+n+" sapUiLocalBusyIndicatorFade";t(d,s);if(e===c.Auto){r(a)}i(o).attr("aria-busy",true)};e.animateIE9={start:function(){},stop:function(){}};return e},true);