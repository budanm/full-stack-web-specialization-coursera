"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dish_service_1 = require("../services/dish.service");
var Observable_1 = require("rxjs/Observable");
var couchbase_service_1 = require("../services/couchbase.service");
var LocalNotifications = require("nativescript-local-notifications");
require("rxjs/add/operator/map");
var FavoriteService = (function () {
    function FavoriteService(dishservice, couchbaseService) {
        this.dishservice = dishservice;
        this.couchbaseService = couchbaseService;
        this.docId = "favorites";
        this.favorites = [];
        var doc = this.couchbaseService.getDocument(this.docId);
        if (doc == null) {
            this.couchbaseService.createDocument({ "favorites": [] }, this.docId);
        }
        else {
            this.favorites = doc.favorites;
        }
    }
    FavoriteService.prototype.isFavorite = function (id) {
        return this.favorites.some(function (el) { return el === id; });
    };
    FavoriteService.prototype.addFavorite = function (id) {
        if (!this.isFavorite(id)) {
            this.favorites.push(id);
            this.couchbaseService.updateDocument(this.docId, { "favorites": this.favorites });
            LocalNotifications.schedule([{
                    id: id,
                    title: "ConFusion Favorites",
                    body: 'Dish' + id + ' added successfully'
                }]).then(function () { return console.log('Notification scheduled'); }, function (error) { return console.log('Error showing notification ' + error); });
        }
        return true;
    };
    FavoriteService.prototype.getFavorites = function () {
        var _this = this;
        return this.dishservice.getDishes()
            .map(function (dishes) { return dishes.filter(function (dish) { return _this.favorites.some(function (el) { return el === dish.id; }); }); });
    };
    FavoriteService.prototype.deleteFavorite = function (id) {
        var index = this.favorites.indexOf(id);
        if (index >= 0) {
            this.favorites.splice(index, 1);
            this.couchbaseService.updateDocument(this.docId, { "favorites": this.favorites });
            return this.getFavorites();
        }
        else {
            console.log('Deleting non-existant favorite', id);
            return Observable_1.Observable.throw('Deleting non-existant favorite');
        }
    };
    FavoriteService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [dish_service_1.DishService,
            couchbase_service_1.CouchbaseService])
    ], FavoriteService);
    return FavoriteService;
}());
exports.FavoriteService = FavoriteService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm9yaXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MseURBQXVEO0FBQ3ZELDhDQUE2QztBQUM3QyxtRUFBaUU7QUFDakUscUVBQXVFO0FBQ3ZFLGlDQUErQjtBQUcvQjtJQUtJLHlCQUFvQixXQUF3QixFQUNoQyxnQkFBa0M7UUFEMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUg5QyxVQUFLLEdBQVcsV0FBVyxDQUFDO1FBSXhCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRXBCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hELEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUUsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ25DLENBQUM7SUFDTCxDQUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLEVBQVU7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxLQUFLLEVBQUUsRUFBVCxDQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLEVBQVU7UUFDbEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDbEYsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3pCLEVBQUUsRUFBRSxFQUFFO29CQUNOLEtBQUssRUFBRSxxQkFBcUI7b0JBQzVCLElBQUksRUFBRSxNQUFNLEdBQUcsRUFBRSxHQUFHLHFCQUFxQjtpQkFDNUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLEVBQXJDLENBQXFDLEVBQUUsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixHQUFHLEtBQUssQ0FBQyxFQUFsRCxDQUFrRCxDQUFDLENBQUM7UUFDekgsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHNDQUFZLEdBQVo7UUFBQSxpQkFHQztRQUZHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTthQUM5QixHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsRUFBZCxDQUFjLENBQUMsRUFBekMsQ0FBeUMsQ0FBQyxFQUFoRSxDQUFnRSxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxFQUFVO1FBQ3JCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUNsRixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQy9CLENBQUM7UUFFRCxJQUFJLENBQUMsQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEQsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDOUQsQ0FBQztJQUNMLENBQUM7SUFwRFEsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQU13QiwwQkFBVztZQUNkLG9DQUFnQjtPQU5yQyxlQUFlLENBcUQzQjtJQUFELHNCQUFDO0NBQUEsQUFyREQsSUFxREM7QUFyRFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERpc2ggfSBmcm9tICcuLi9zaGFyZWQvZGlzaCc7XHJcbmltcG9ydCB7IERpc2hTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZGlzaC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IENvdWNoYmFzZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb3VjaGJhc2Uuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIExvY2FsTm90aWZpY2F0aW9ucyBmcm9tICduYXRpdmVzY3JpcHQtbG9jYWwtbm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZhdm9yaXRlU2VydmljZSB7XHJcblxyXG4gICAgZmF2b3JpdGVzOiBBcnJheTxudW1iZXI+O1xyXG4gICAgZG9jSWQ6IHN0cmluZyA9IFwiZmF2b3JpdGVzXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkaXNoc2VydmljZTogRGlzaFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjb3VjaGJhc2VTZXJ2aWNlOiBDb3VjaGJhc2VTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5mYXZvcml0ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGRvYyA9IHRoaXMuY291Y2hiYXNlU2VydmljZS5nZXREb2N1bWVudCh0aGlzLmRvY0lkKTtcclxuICAgICAgICBpZiAoZG9jID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VjaGJhc2VTZXJ2aWNlLmNyZWF0ZURvY3VtZW50KHsgXCJmYXZvcml0ZXNcIjogW10gfSwgdGhpcy5kb2NJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZhdm9yaXRlcyA9IGRvYy5mYXZvcml0ZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzRmF2b3JpdGUoaWQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZhdm9yaXRlcy5zb21lKGVsID0+IGVsID09PSBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRmF2b3JpdGUoaWQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0Zhdm9yaXRlKGlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZhdm9yaXRlcy5wdXNoKGlkKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VjaGJhc2VTZXJ2aWNlLnVwZGF0ZURvY3VtZW50KHRoaXMuZG9jSWQsIHsgXCJmYXZvcml0ZXNcIjogdGhpcy5mYXZvcml0ZXMgfSk7XHJcbiAgICAgICAgICAgIExvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZShbe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29uRnVzaW9uIEZhdm9yaXRlc1wiLFxyXG4gICAgICAgICAgICAgICAgYm9keTogJ0Rpc2gnICsgaWQgKyAnIGFkZGVkIHN1Y2Nlc3NmdWxseSdcclxuICAgICAgICAgICAgfV0pLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ05vdGlmaWNhdGlvbiBzY2hlZHVsZWQnKSwgKGVycm9yKSA9PiBjb25zb2xlLmxvZygnRXJyb3Igc2hvd2luZyBub3RpZmljYXRpb24gJyArIGVycm9yKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZhdm9yaXRlcygpOiBPYnNlcnZhYmxlPERpc2hbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpc2hzZXJ2aWNlLmdldERpc2hlcygpXHJcbiAgICAgICAgICAgIC5tYXAoZGlzaGVzID0+IGRpc2hlcy5maWx0ZXIoZGlzaCA9PiB0aGlzLmZhdm9yaXRlcy5zb21lKGVsID0+IGVsID09PSBkaXNoLmlkKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZhdm9yaXRlKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPERpc2hbXT4ge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZmF2b3JpdGVzLmluZGV4T2YoaWQpO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmF2b3JpdGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuY291Y2hiYXNlU2VydmljZS51cGRhdGVEb2N1bWVudCh0aGlzLmRvY0lkLCB7IFwiZmF2b3JpdGVzXCI6IHRoaXMuZmF2b3JpdGVzIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGYXZvcml0ZXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRGVsZXRpbmcgbm9uLWV4aXN0YW50IGZhdm9yaXRlJywgaWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdygnRGVsZXRpbmcgbm9uLWV4aXN0YW50IGZhdm9yaXRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19