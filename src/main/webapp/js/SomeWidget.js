define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_OnDijitClickMixin",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/SomeWidget.html"
], function (declare, _WidgetBase, _OnDijitClickMixin, _TemplatedMixin, template) {

    "use strict";

    return declare([_WidgetBase, _OnDijitClickMixin, _TemplatedMixin], {
        //	set our template
        templateString: template,
        //	some properties
        baseClass: "someWidget",
        title: "", //	we'll set this from the widget def

        //	hidden counter
        _counter: 1,
        _firstClicked: false,
        //	define an onClick handler
        _onClick: function () {
            console.log('onClick');
            if (this._firstClicked) {
                this.titleNode.innerHTML = this.title + " was clicked " + (++this._counter) + " times.";
            } else {
                this.titleNode.innerHTML = this.title + " was clicked!";
                this._firstClicked = true;
            }
        },
        postCreate: function () {
            console.log('postCreate');
            this.titleNode.innerHTML = this.title;
        }
    });
});

