Object.defineProperty(exports, "__esModule", { value: true });
var application = require("tns-core-modules/application");
var platform_1 = require("tns-core-modules/platform");
var commonModule = require("./feedback-common");
var RadFeedback = (function (_super) {
    __extends(RadFeedback, _super);
    function RadFeedback() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadFeedback.init = function (apiKey, serviceUri, uid) {
        com.telerik.widget.feedback.RadFeedback.instance().init(apiKey, serviceUri, uid || platform_1.device.uuid);
    };
    RadFeedback.show = function () {
        // var context = application.android.context;
        var context = application.android.foregroundActivity;
        console.log("show(" + context + ")");
        com.telerik.widget.feedback.RadFeedback.instance().show(context);
    };
    return RadFeedback;
}(commonModule.RadFeedback));
exports.RadFeedback = RadFeedback;
