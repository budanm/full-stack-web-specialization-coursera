"use strict";
var app = require("application");
var Toasty = (function () {
    function Toasty(text, duration, position) {
        this.SHORT = 2000;
        this.LONG = 3500;
        this._text = text;
        this.duration = duration;
        this._toast = android.widget.Toast.makeText(app.android.context, text, 2000);
        this.position = position;
    }
    Object.defineProperty(Toasty.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        set: function (value) {
            switch (value) {
                case "short":
                    this._duration = this.SHORT;
                    break;
                case "long":
                    this._duration = this.LONG;
                default:
                    this._duration = this.SHORT;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toasty.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (value) {
            this._text = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Toasty.prototype, "position", {
        set: function (value) {
            switch (value) {
                case "top":
                    this._toast.setGravity(android.view.Gravity.TOP, 0, 0);
                    break;
                case "center":
                    this._toast.setGravity(android.view.Gravity.CENTER, 0, 0);
                    break;
                case "bottom":
                    this._toast.setGravity(android.view.Gravity.BOTTOM, 0, 0);
                    break;
                default:
                    this._toast.setGravity(android.view.Gravity.BOTTOM, 0, 0);
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Toasty.prototype.show = function () {
        if (!this._text) {
            throw new Error("Text is not set");
        }
        else {
            this._toast.setDuration(this.duration);
            this._toast.show();
        }
    };
    Toasty.prototype.cancel = function () {
        if (this._toast) {
            this._toast.cancel();
        }
    };
    return Toasty;
}());
exports.Toasty = Toasty;
