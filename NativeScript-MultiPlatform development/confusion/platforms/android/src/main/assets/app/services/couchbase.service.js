"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_couchbase_1 = require("nativescript-couchbase");
var CouchbaseService = (function () {
    function CouchbaseService() {
        this.database = new nativescript_couchbase_1.Couchbase("confusion");
    }
    CouchbaseService.prototype.getDatabase = function () {
        return this.database;
    };
    CouchbaseService.prototype.getDocument = function (docId) {
        return this.database.getDocument(docId);
    };
    CouchbaseService.prototype.createDocument = function (data, docId) {
        return this.database.createDocument(data, docId);
    };
    CouchbaseService.prototype.updateDocument = function (docId, data) {
        return this.database.updateDocument(docId, data);
    };
    CouchbaseService.prototype.deleteDocument = function (docId) {
        return this.database.deleteDocument(docId);
    };
    CouchbaseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CouchbaseService);
    return CouchbaseService;
}());
exports.CouchbaseService = CouchbaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291Y2hiYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3VjaGJhc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxpRUFBbUQ7QUFHbkQ7SUFJSTtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxrQ0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSxzQ0FBVyxHQUFsQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxzQ0FBVyxHQUFsQixVQUFtQixLQUFhO1FBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0seUNBQWMsR0FBckIsVUFBc0IsSUFBUyxFQUFFLEtBQWE7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0seUNBQWMsR0FBckIsVUFBc0IsS0FBYSxFQUFFLElBQVM7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0seUNBQWMsR0FBckIsVUFBc0IsS0FBYTtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQTFCUSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTs7T0FDQSxnQkFBZ0IsQ0EyQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ291Y2hiYXNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNvdWNoYmFzZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb3VjaGJhc2VTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGRhdGFiYXNlOiBhbnk7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBuZXcgQ291Y2hiYXNlKFwiY29uZnVzaW9uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREYXRhYmFzZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhYmFzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RG9jdW1lbnQoZG9jSWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFiYXNlLmdldERvY3VtZW50KGRvY0lkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlRG9jdW1lbnQoZGF0YTogYW55LCBkb2NJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YWJhc2UuY3JlYXRlRG9jdW1lbnQoZGF0YSwgZG9jSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVEb2N1bWVudChkb2NJZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhYmFzZS51cGRhdGVEb2N1bWVudChkb2NJZCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZURvY3VtZW50KGRvY0lkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhYmFzZS5kZWxldGVEb2N1bWVudChkb2NJZCk7XHJcbiAgICB9XHJcbn0iXX0=