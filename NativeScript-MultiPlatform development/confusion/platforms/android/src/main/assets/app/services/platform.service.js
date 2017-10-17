"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var connectivity = require("connectivity");
var Observable_1 = require("rxjs/Observable");
var DeviceInfo = (function () {
    function DeviceInfo(model, deviceType, os, osVersion, sdkVersion, language, manufacturer, uuid) {
        this.model = model;
        this.deviceType = deviceType;
        this.os = os;
        this.osVersion = osVersion;
        this.sdkVersion = sdkVersion;
        this.language = language;
        this.manufacturer = manufacturer;
        this.uuid = uuid;
    }
    return DeviceInfo;
}());
var ScreenInfo = (function () {
    function ScreenInfo(heightDIPs, heightPixels, scale, widthDIPs, widthPixels) {
        this.heightDIPs = heightDIPs;
        this.heightPixels = heightPixels;
        this.scale = scale;
        this.widthDIPs = widthDIPs;
        this.widthPixels = widthPixels;
    }
    return ScreenInfo;
}());
var PlatformService = (function () {
    function PlatformService() {
        this.deviceInformation = new DeviceInfo(platform_1.device.model, platform_1.device.deviceType, platform_1.device.os, platform_1.device.osVersion, platform_1.device.sdkVersion, platform_1.device.language, platform_1.device.manufacturer, platform_1.device.uuid);
        this.screenInformation = new ScreenInfo(platform_1.screen.mainScreen.heightDIPs, platform_1.screen.mainScreen.heightPixels, platform_1.screen.mainScreen.scale, platform_1.screen.mainScreen.widthDIPs, platform_1.screen.mainScreen.widthPixels);
        var connectionType = connectivity.getConnectionType();
        switch (connectionType) {
            case connectivity.connectionType.none:
                this.connectionType = "None";
                break;
            case connectivity.connectionType.wifi:
                this.connectionType = "Wi-Fi";
                break;
            case connectivity.connectionType.mobile:
                this.connectionType = "Mobile";
                break;
            default:
                break;
        }
    }
    PlatformService.prototype.isAndroid = function () {
        return platform_1.isAndroid;
    };
    PlatformService.prototype.isIOS = function () {
        return platform_1.isIOS;
    };
    PlatformService.prototype.screenWidthDIP = function () {
        return this.screenInformation.widthDIPs;
    };
    PlatformService.prototype.networkConnectionType = function () {
        return this.connectionType;
    };
    PlatformService.prototype.startMonitoringNetwork = function () {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            connectivity.startMonitoring(function (newConnectionType) {
                switch (newConnectionType) {
                    case connectivity.connectionType.none:
                        _this.connectionType = "None";
                        observer.next('Connection type changed to none.');
                        break;
                    case connectivity.connectionType.wifi:
                        _this.connectionType = "Wi-Fi";
                        observer.next('Connection type changed to WiFi.');
                        break;
                    case connectivity.connectionType.mobile:
                        _this.connectionType = "Mobile";
                        observer.next('Connection type changed to mobile.');
                        break;
                    default:
                        break;
                }
            });
        });
    };
    PlatformService.prototype.stopMonitoringNetwork = function () {
        connectivity.stopMonitoring();
    };
    PlatformService.prototype.printPlatformInfo = function () {
        console.log('This device model is ' + this.deviceInformation.model);
        console.log('This device OS is ' + this.deviceInformation.os + ' ' + this.deviceInformation.osVersion);
        console.log('This device type is ' + this.deviceInformation.deviceType);
        console.log('This device screen size is ' + this.screenInformation.widthPixels + ' X ' + this.screenInformation.heightPixels + ' pixels');
        console.log('This device is connected to ' + this.connectionType);
    };
    PlatformService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], PlatformService);
    return PlatformService;
}());
exports.PlatformService = PlatformService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsYXRmb3JtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MscUNBQTREO0FBQzVELDJDQUE2QztBQUM3Qyw4Q0FBNkM7QUFFN0M7SUFFSSxvQkFDVyxLQUFhLEVBQ2IsVUFBa0IsRUFDbEIsRUFBVSxFQUNWLFNBQWlCLEVBQ2pCLFVBQWtCLEVBQ2xCLFFBQWdCLEVBQ2hCLFlBQW9CLEVBQ3BCLElBQVk7UUFQWixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQ1YsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUNqQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ2xCLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUNuQixDQUFDO0lBQ1QsaUJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQUVEO0lBRUksb0JBQ1csVUFBa0IsRUFDbEIsWUFBb0IsRUFDcEIsS0FBYSxFQUNiLFNBQWlCLEVBQ2pCLFdBQW1CO1FBSm5CLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDbEIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFDcEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7SUFDMUIsQ0FBQztJQUNULGlCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFHRDtJQU1JO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksVUFBVSxDQUNuQyxpQkFBTSxDQUFDLEtBQUssRUFDWixpQkFBTSxDQUFDLFVBQVUsRUFDakIsaUJBQU0sQ0FBQyxFQUFFLEVBQ1QsaUJBQU0sQ0FBQyxTQUFTLEVBQ2hCLGlC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LEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2RyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDMUksT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQTVGUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7O09BQ0EsZUFBZSxDQTZGM0I7SUFBRCxzQkFBQztDQUFBLEFBN0ZELElBNkZDO0FBN0ZZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TLCBkZXZpY2UsIHNjcmVlbiB9IGZyb20gJ3BsYXRmb3JtJztcclxuaW1wb3J0ICogYXMgY29ubmVjdGl2aXR5IGZyb20gJ2Nvbm5lY3Rpdml0eSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuY2xhc3MgRGV2aWNlSW5mbyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIG1vZGVsOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGRldmljZVR5cGU6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgb3M6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgb3NWZXJzaW9uOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHNka1ZlcnNpb246IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgbGFuZ3VhZ2U6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgbWFudWZhY3R1cmVyOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHV1aWQ6IHN0cmluZ1xyXG4gICAgKSB7IH1cclxufVxyXG5cclxuY2xhc3MgU2NyZWVuSW5mbyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGhlaWdodERJUHM6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgaGVpZ2h0UGl4ZWxzOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHNjYWxlOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHdpZHRoRElQczogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyB3aWR0aFBpeGVsczogbnVtYmVyXHJcbiAgICApIHsgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybVNlcnZpY2Uge1xyXG5cclxuICAgIHB1YmxpYyBkZXZpY2VJbmZvcm1hdGlvbjogRGV2aWNlSW5mbztcclxuICAgIHB1YmxpYyBzY3JlZW5JbmZvcm1hdGlvbjogU2NyZWVuSW5mbztcclxuICAgIHB1YmxpYyBjb25uZWN0aW9uVHlwZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGV2aWNlSW5mb3JtYXRpb24gPSBuZXcgRGV2aWNlSW5mbyhcclxuICAgICAgICAgICAgZGV2aWNlLm1vZGVsLFxyXG4gICAgICAgICAgICBkZXZpY2UuZGV2aWNlVHlwZSxcclxuICAgICAgICAgICAgZGV2aWNlLm9zLFxyXG4gICAgICAgICAgICBkZXZpY2Uub3NWZXJzaW9uLFxyXG4gICAgICAgICAgICBkZXZpY2Uuc2RrVmVyc2lvbixcclxuICAgICAgICAgICAgZGV2aWNlLmxhbmd1YWdlLFxyXG4gICAgICAgICAgICBkZXZpY2UubWFudWZhY3R1cmVyLFxyXG4gICAgICAgICAgICBkZXZpY2UudXVpZFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NyZWVuSW5mb3JtYXRpb24gPSBuZXcgU2NyZWVuSW5mbyhcclxuICAgICAgICAgICAgc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcyxcclxuICAgICAgICAgICAgc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0UGl4ZWxzLFxyXG4gICAgICAgICAgICBzY3JlZW4ubWFpblNjcmVlbi5zY2FsZSxcclxuICAgICAgICAgICAgc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzLFxyXG4gICAgICAgICAgICBzY3JlZW4ubWFpblNjcmVlbi53aWR0aFBpeGVsc1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGxldCBjb25uZWN0aW9uVHlwZSA9IGNvbm5lY3Rpdml0eS5nZXRDb25uZWN0aW9uVHlwZSgpO1xyXG4gICAgICAgIHN3aXRjaCAoY29ubmVjdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUubm9uZTpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvblR5cGUgPSBcIk5vbmVcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS53aWZpOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uVHlwZSA9IFwiV2ktRmlcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5tb2JpbGU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25UeXBlID0gXCJNb2JpbGVcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0FuZHJvaWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGlzQW5kcm9pZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNJT1MoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGlzSU9TO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzY3JlZW5XaWR0aERJUCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjcmVlbkluZm9ybWF0aW9uLndpZHRoRElQcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV0d29ya0Nvbm5lY3Rpb25UeXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvblR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0TW9uaXRvcmluZ05ldHdvcmsoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25uZWN0aXZpdHkuc3RhcnRNb25pdG9yaW5nKChuZXdDb25uZWN0aW9uVHlwZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG5ld0Nvbm5lY3Rpb25UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUubm9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uVHlwZSA9IFwiTm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KCdDb25uZWN0aW9uIHR5cGUgY2hhbmdlZCB0byBub25lLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS53aWZpOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25UeXBlID0gXCJXaS1GaVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KCdDb25uZWN0aW9uIHR5cGUgY2hhbmdlZCB0byBXaUZpLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5tb2JpbGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvblR5cGUgPSBcIk1vYmlsZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KCdDb25uZWN0aW9uIHR5cGUgY2hhbmdlZCB0byBtb2JpbGUuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcE1vbml0b3JpbmdOZXR3b3JrKCkge1xyXG4gICAgICAgIGNvbm5lY3Rpdml0eS5zdG9wTW9uaXRvcmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmludFBsYXRmb3JtSW5mbygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBkZXZpY2UgbW9kZWwgaXMgJysgdGhpcy5kZXZpY2VJbmZvcm1hdGlvbi5tb2RlbCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgZGV2aWNlIE9TIGlzICcgKyB0aGlzLmRldmljZUluZm9ybWF0aW9uLm9zICsgJyAnICsgdGhpcy5kZXZpY2VJbmZvcm1hdGlvbi5vc1ZlcnNpb24pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGRldmljZSB0eXBlIGlzICcgKyB0aGlzLmRldmljZUluZm9ybWF0aW9uLmRldmljZVR5cGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGRldmljZSBzY3JlZW4gc2l6ZSBpcyAnICsgdGhpcy5zY3JlZW5JbmZvcm1hdGlvbi53aWR0aFBpeGVscyArICcgWCAnICsgdGhpcy5zY3JlZW5JbmZvcm1hdGlvbi5oZWlnaHRQaXhlbHMgKyAnIHBpeGVscycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGRldmljZSBpcyBjb25uZWN0ZWQgdG8gJyArIHRoaXMuY29ubmVjdGlvblR5cGUpO1xyXG4gICAgfVxyXG59Il19