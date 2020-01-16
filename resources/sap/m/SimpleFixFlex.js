/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Control","sap/ui/core/ResizeHandler","sap/base/Log","./SimpleFixFlexRenderer"],function(e,t,i){"use strict";var n=e.extend("sap.m.SimpleFixFlex",{metadata:{library:"sap.m",aggregations:{fixContent:{type:"sap.ui.core.Control",multiple:false},flexContent:{type:"sap.ui.core.Control",multiple:true}},properties:{fitParent:{type:"boolean",group:"Appearance",defaultValue:true}}}});n.FIX_AREA_CHARACTER_COUNT_RECOMMENDATION=200;n.FIX_AREA_CHARACTERS_ABOVE_RECOMMENDED_WARNING="It is recommended to use less than "+n.FIX_AREA_CHARACTER_COUNT_RECOMMENDATION+" characters as a value state text.";n.prototype.onBeforeRendering=function(){this._deregisterFixContentResizeHandler();var e=this.getFixContent();if(e&&e.isA("sap.m.Text")&&e.getText().length>n.FIX_AREA_CHARACTER_COUNT_RECOMMENDATION){i.warning(n.FIX_AREA_CHARACTERS_ABOVE_RECOMMENDED_WARNING,"",this.getId())}};n.prototype.onAfterRendering=function(){if(this.getFitParent()){this._registerFixContentResizeHandler()}};n.prototype._registerFixContentResizeHandler=function(){var e=this.getFixContent();if(!this._sResizeListenerId&&e&&e.getDomRef()){this._sResizeListenerId=t.register(e.getDomRef(),this._onFixContentResize.bind(this));this._onFixContentResize()}};n.prototype._deregisterFixContentResizeHandler=function(){if(this._sResizeListenerId){t.deregister(this._sResizeListenerId);this._sResizeListenerId=null}};n.prototype._onFixContentResize=function(){var e=this.$(),t=this.getFixContent().$(),i=t.get(0);if(!i||!i.clientHeight){return null}e.css("padding-top",i.clientHeight);t.addClass("sapUiSimpleFixFlexFixedWrap")};n.prototype.exit=function(){this._deregisterFixContentResizeHandler()};return n});