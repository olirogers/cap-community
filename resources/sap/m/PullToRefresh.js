/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","./library","sap/ui/core/Control","sap/ui/Device","./PullToRefreshRenderer","sap/ui/events/KeyCodes","sap/base/security/encodeXML"],function(t,e,o,i,s,r,l){"use strict";var a=e.ImageHelper;var n=o.extend("sap.m.PullToRefresh",{metadata:{library:"sap.m",properties:{description:{type:"string",group:"Misc",defaultValue:null},showIcon:{type:"boolean",group:"Appearance",defaultValue:false},customIcon:{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null},iconDensityAware:{type:"boolean",group:"Appearance",defaultValue:true}},events:{refresh:{}}}});n.prototype.init=function(){this._bTouchMode=i.support.touch&&!i.system.combi||t.sap.simulateMobileOnDesktop;this._iState=0};n.prototype._loadBI=function(){if(this.getVisible()&&!this._oBusyIndicator){var t=sap.ui.requireSync("sap/m/BusyIndicator");this._oBusyIndicator=new t({size:"1.7rem",design:"auto"});this._oBusyIndicator.setParent(this)}};n.prototype.onBeforeRendering=function(){this._loadBI();if(this._bTouchMode){t(window).off("resize.sapMP2R",this.calculateTopTrigger);var e=this.getParent();this._oScroller=e&&e.getScrollDelegate?e.getScrollDelegate():null;if(this._oScroller){this._oScroller.setBounce(true);this._oScroller.setPullDown(this.getVisible()?this:null)}}};n.prototype.calculateTopTrigger=function(){this._iTopTrigger=1;if(this._oDomRef&&this._oDomRef.parentNode&&this._oDomRef.parentNode.parentNode&&this._oDomRef.parentNode.parentNode.offsetHeight<this._oDomRef.offsetHeight*1.5){this._iTopTrigger=this.getDomRef("T").offsetTop}};n.prototype.onAfterRendering=function(){this._oDomRef=this.getDomRef();if(this._bTouchMode){if(this._oScroller){this._oScroller.refresh()}if(this.getVisible()&&this._oScroller&&this._oScroller._bIScroll){t(window).on("resize.sapMP2R",t.proxy(this.calculateTopTrigger,this));this.calculateTopTrigger()}}};n.prototype.exit=function(){if(this._bTouchMode&&this._oScroller&&this._oScroller._bIScroll){t(window).off("resize.sapMP2R",this.calculateTopTrigger)}if(this._oScroller){this._oScroller.setPullDown(null);this._oScroller=null}if(this._oCustomImage){this._oCustomImage.destroy();this._oCustomImage=null}if(this._oBusyIndicator){this._oBusyIndicator.destroy();this._oBusyIndicator=null}};n.prototype.doScrollMove=function(){if(!this._oScroller){return}var t=this._oDomRef;var e=this._oScroller._scroller;if(e.y>-this._iTopTrigger&&this._iState<1){this.setState(1);e.minScrollY=0}else if(e.y<-this._iTopTrigger&&this._iState===1){this.setState(0);e.minScrollY=-t.offsetHeight}};n.prototype.doPull=function(t){if(this._bTouchMode&&this._iState<2){this.setState(t>=-1?1:0)}};n.prototype.doRefresh=function(){this.setState(0)};n.prototype.doScrollEnd=function(){if(this._iState===1){this.setState(2);this.fireRefresh()}};n.prototype.setState=function(t){if(this._iState===t){return}this._iState=t;if(!this._oDomRef){return}var e=this.$();var o=e.find(".sapMPullDownText");var i=this._getRB();switch(t){case 0:e.toggleClass("sapMFlip",false).toggleClass("sapMLoading",false);o.html(i.getText(this._bTouchMode?"PULL2REFRESH_PULLDOWN":"PULL2REFRESH_REFRESH"));e.removeAttr("aria-live");e.find(".sapMPullDownInfo").html(l(this.getDescription()));break;case 1:e.toggleClass("sapMFlip",true);o.html(i.getText("PULL2REFRESH_RELEASE"));e.removeAttr("aria-live");break;case 2:e.toggleClass("sapMFlip",false).toggleClass("sapMLoading",true);this._oBusyIndicator.setVisible(true);o.html(i.getText("PULL2REFRESH_LOADING"));e.attr("aria-live","assertive");e.find(".sapMPullDownInfo").html(this._bTouchMode?i.getText("PULL2REFRESH_LOADING_LONG"):"");break}};n.prototype.getCustomIconImage=function(){var t={src:this.getCustomIcon(),densityAware:this.getIconDensityAware(),useIconTooltip:false};var e=["sapMPullDownCIImg"];this._oCustomImage=a.getImageControl(null,this._oCustomImage,this,t,e);return this._oCustomImage};n.prototype.onclick=function(){if(!this._bTouchMode){this.setState(2);this.fireRefresh()}};n.prototype.onkeydown=function(t){if(t.which===r.F5){this.onclick();t.stopPropagation();t.preventDefault()}};n.prototype.onsapenter=function(t){if(this._iState<1){this.setState(2);this.fireRefresh()}};n.prototype.onsapspace=function(t){t.preventDefault();if(this._iState<1){this.setState(2);this.fireRefresh()}};n.prototype.hide=function(){this.setState(0);if(this._oScroller){this._oScroller.refresh()}};n.prototype.setVisible=function(t){if(this.getVisible()===t){return this}if(this._oDomRef&&this._oScroller&&this._oScroller._oControl){this._oScroller._oControl.invalidate()}return this.setProperty("visible",t)};n.prototype._getRB=function(){return sap.ui.getCore().getLibraryResourceBundle("sap.m")};return n});