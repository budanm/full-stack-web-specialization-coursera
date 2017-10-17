Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("tns-core-modules/platform");
var commonModule = require("./feedback-common");
var RadFeedback = (function (_super) {
    __extends(RadFeedback, _super);
    function RadFeedback() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadFeedback.init = function (apiKey, serviceUri, uid) {
        var source = TKPlatformFeedbackSource.alloc().initWithKeyUid(apiKey, uid || platform_1.device.uuid);
        TKFeedback.setDataSource(source);
    };
    RadFeedback.show = function () {
        TKFeedback.showFeedback();
    };
    return RadFeedback;
}(commonModule.RadFeedback));
exports.RadFeedback = RadFeedback;
