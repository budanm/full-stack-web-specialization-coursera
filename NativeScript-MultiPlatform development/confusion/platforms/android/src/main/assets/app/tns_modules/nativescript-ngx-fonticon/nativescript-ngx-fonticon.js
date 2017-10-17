"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require("@angular/core");
var fonticon_pipe_1 = require("./src/app/pipes/fonticon.pipe");
var fonticon_service_1 = require("./src/app/services/fonticon.service");
// for manual imports
__export(require("./src/app/pipes/fonticon.pipe"));
__export(require("./src/app/services/fonticon.service"));
var TNSFontIconModule = TNSFontIconModule_1 = (function () {
    function TNSFontIconModule() {
    }
    TNSFontIconModule.forRoot = function (providedConfig) {
        if (providedConfig === void 0) { providedConfig = {}; }
        return {
            ngModule: TNSFontIconModule_1,
            providers: [
                { provide: fonticon_service_1.USE_STORE, useValue: providedConfig },
                fonticon_service_1.TNSFontIconService
            ]
        };
    };
    return TNSFontIconModule;
}());
TNSFontIconModule = TNSFontIconModule_1 = __decorate([
    core_1.NgModule({
        declarations: [
            fonticon_pipe_1.TNSFontIconPipe,
            fonticon_pipe_1.TNSFontIconPurePipe
        ],
        exports: [
            fonticon_pipe_1.TNSFontIconPipe,
            fonticon_pipe_1.TNSFontIconPurePipe
        ]
    })
], TNSFontIconModule);
exports.TNSFontIconModule = TNSFontIconModule;
var TNSFontIconModule_1;
