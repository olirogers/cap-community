/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","sap/ui/unified/Calendar","sap/ui/unified/CalendarRenderer","sap/ui/unified/calendar/Header","sap/ui/unified/DateRange"],function(e,t,i,n,r){"use strict";var a=e.extend(i);a.apiVersion=2;var s=t.extend("sap.ui.unified.internal.CustomYearPicker",{renderer:a});s.prototype._initializeHeader=function(){var e=new n(this.getId()+"--Head",{visibleButton1:false});e.attachEvent("pressPrevious",this._handlePrevious,this);e.attachEvent("pressNext",this._handleNext,this);e.attachEvent("pressButton2",this._handleButton2,this);this.setAggregation("header",e)};s.prototype.onBeforeRendering=function(){var e=this.getAggregation("header");t.prototype.onBeforeRendering.call(this,arguments);e.setVisibleButton1(false);e.setVisibleButton2(true)};s.prototype.onAfterRendering=function(){t.prototype.onAfterRendering.apply(this,arguments);this._showYearPicker()};s.prototype.onThemeChanged=function(){t.prototype.onThemeChanged.apply(this,arguments)};s.prototype._selectYear=function(){var e=this.getSelectedDates()[0];if(!e){e=new r}e.setStartDate(this.getAggregation("yearPicker").getDate());this.addSelectedDate(e);this.fireSelect()};s.prototype.onsapescape=function(e){this.fireCancel()};s.prototype._shouldFocusB2OnTabPrevious=function(e){return false};return s});