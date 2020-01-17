/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Control","sap/m/Label","sap/m/library","./DraftIndicatorRenderer"],function(e,t,a,i){"use strict";var r=a.DraftIndicatorState;var o=e.extend("sap.m.DraftIndicator",{metadata:{library:"sap.m",designtime:"sap/m/designtime/DraftIndicator.designtime",properties:{state:{type:"sap.m.DraftIndicatorState",group:"Behavior",defaultValue:r.Clear},minDisplayTime:{type:"int",group:"Behavior",defaultValue:1500}},aggregations:{_label:{type:"sap.m.Label",multiple:false,visibility:"hidden"}}}});var s=sap.ui.getCore().getLibraryResourceBundle("sap.m");o._oTEXTS={};o._oTEXTS[r.Saving]=s.getText("DRAFT_INDICATOR_SAVING_DRAFT");o._oTEXTS[r.Saved]=s.getText("DRAFT_INDICATOR_DRAFT_SAVED");o._oTEXTS[r.Clear]="";o.prototype.init=function(){this.aQueue=[];this.iDelayedCallId=null};o.prototype.exit=function(){this._resetDraftTimer()};o.prototype.setState=function(e){this.setProperty("state",e);this._addToQueue(e);if(e===r.Saving){this._addToQueue(r.Clear)}return this};o.prototype._getLabel=function(){var e=this.getAggregation("_label");if(!e){var e=new t({id:this.getId()+"-label"});this.setAggregation("_label",e,true);e=this.getAggregation("_label")}return e};o.prototype.showDraftSaving=function(){this._addToQueue(r.Saving);this._addToQueue(r.Clear)};o.prototype.showDraftSaved=function(){this._addToQueue(r.Saved)};o.prototype.clearDraftState=function(){this._addToQueue(r.Clear)};o.prototype._addToQueue=function(e){this.aQueue.push(e);this._processQueue()};o.prototype._processQueue=function(){if(this.iDelayedCallId){return}var e=this.aQueue.shift();var t=this.getMinDisplayTime();if(!e){return}this._applyState(e);if(e===r.Clear){this._proceed();return}this.iDelayedCallId=setTimeout(this._proceed.bind(this),t)};o.prototype._proceed=function(){this._resetDraftTimer();this._processQueue()};o.prototype._applyState=function(e){this._getLabel().setText(o._oTEXTS[e])};o.prototype._resetDraftTimer=function(){clearTimeout(this.iDelayedCallId);this.iDelayedCallId=null};return o});