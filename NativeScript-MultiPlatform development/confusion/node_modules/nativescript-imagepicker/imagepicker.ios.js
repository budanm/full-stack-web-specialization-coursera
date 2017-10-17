"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_observable = require("tns-core-modules/data/observable");
var data_observablearray = require("tns-core-modules/data/observable-array");
var frame = require("tns-core-modules/ui/frame");
var imageAssetModule = require("tns-core-modules/image-asset");
var image_source = require("tns-core-modules/image-source");
var albumsModule;
if (global.TNS_WEBPACK) {
    albumsModule = require("./albums.ios");
    require("bundle-entry-points");
}
else {
    albumsModule = require("./albums");
}
var IMAGE_WIDTH = 80;
var IMAGE_HEIGHT = 80;
function create(options) {
    if (true) {
        return new ImagePickerPH(options);
    }
}
exports.create = create;
var ImagePicker = (function (_super) {
    __extends(ImagePicker, _super);
    function ImagePicker(options) {
        var _this = _super.call(this) || this;
        _this._selection = new data_observablearray.ObservableArray();
        _this._albums = new data_observablearray.ObservableArray();
        _this._options = options;
        return _this;
    }
    ImagePicker.prototype.authorize = function () {
        return Promise.reject(new Error("Not implemented"));
    };
    ImagePicker.prototype.present = function () {
        var _this = this;
        if (this._resolve || this._reject) {
            return Promise.reject(new Error("Selection is already in progress..."));
        }
        else {
            return new Promise(function (resolve, reject) {
                _this._resolve = resolve;
                _this._reject = reject;
                frame.topmost().navigate({
                    create: albumsModule.albumsPageFactory,
                    context: _this
                });
            });
        }
    };
    Object.defineProperty(ImagePicker.prototype, "albums", {
        get: function () {
            return this._albums;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePicker.prototype, "selection", {
        get: function () {
            return this._selection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePicker.prototype, "doneText", {
        get: function () {
            return this._options && this._options.doneText ? this._options.doneText : "Done";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePicker.prototype, "cancelText", {
        get: function () {
            return this._options && this._options.cancelText ? this._options.cancelText : "Cancel";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePicker.prototype, "albumsText", {
        get: function () {
            return this._options && this._options.albumsText ? this._options.albumsText : "Albums";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePicker.prototype, "mode", {
        get: function () {
            return this._options && this._options.mode && this._options.mode.toLowerCase() === 'single' ? 'single' : 'multiple';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePicker.prototype, "newestFirst", {
        get: function () {
            return this._options && !!this._options.newestFirst;
        },
        enumerable: true,
        configurable: true
    });
    ImagePicker.prototype.cancel = function () {
        this.notifyCanceled();
    };
    ImagePicker.prototype.done = function () {
        this.notifySelection([]);
    };
    ImagePicker.prototype.notifyCanceled = function () {
        if (this._reject) {
            this._reject(new Error("Selection canceled."));
        }
    };
    ImagePicker.prototype.notifySelection = function (results) {
        if (this._resolve) {
            this._resolve(results);
        }
    };
    return ImagePicker;
}(data_observable.Observable));
exports.ImagePicker = ImagePicker;
var Album = (function (_super) {
    __extends(Album, _super);
    function Album(imagePicker, title) {
        var _this = _super.call(this) || this;
        _this._imagePicker = imagePicker;
        _this._title = title;
        _this._assets = new data_observablearray.ObservableArray();
        return _this;
    }
    Object.defineProperty(Album.prototype, "imagePicker", {
        get: function () {
            return this._imagePicker;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "assets", {
        get: function () {
            return this._assets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "thumb", {
        get: function () {
            return this._thumb;
        },
        enumerable: true,
        configurable: true
    });
    Album.prototype.setThumb = function (value) {
        this._thumb = value;
        this.notifyPropertyChange("thumb", value);
    };
    Object.defineProperty(Album.prototype, "thumbAsset", {
        get: function () {
            return this._thumbAsset;
        },
        enumerable: true,
        configurable: true
    });
    Album.prototype.setThumbAsset = function (value) {
        this._thumbAsset = value;
        this.notifyPropertyChange("thumbAsset", value);
    };
    return Album;
}(data_observable.Observable));
exports.Album = Album;
var SelectedAsset = (function (_super) {
    __extends(SelectedAsset, _super);
    function SelectedAsset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SelectedAsset.prototype, "thumb", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectedAsset.prototype, "uri", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectedAsset.prototype, "fileUri", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    SelectedAsset.prototype.getImage = function (options) {
        return Promise.reject(new Error("getImage() is not implemented in SelectedAsset. Derived classes should implement it to be fully functional."));
    };
    SelectedAsset.prototype.getImageData = function () {
        return Promise.reject(new Error("getImageData() is not implemented in SelectedAsset. Derived classes should implement it to be fully functional."));
    };
    return SelectedAsset;
}(imageAssetModule.ImageAsset));
exports.SelectedAsset = SelectedAsset;
var Asset = (function (_super) {
    __extends(Asset, _super);
    function Asset(album, asset) {
        var _this = _super.call(this, asset) || this;
        _this._album = album;
        _this._image = null;
        return _this;
    }
    Object.defineProperty(Asset.prototype, "album", {
        get: function () {
            return this._album;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Asset.prototype, "thumb", {
        get: function () {
            if (!this._thumbRequested) {
                this._thumbRequested = true;
                this.onThumbRequest();
            }
            return this._thumb;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Asset.prototype, "selected", {
        get: function () {
            return !!this._selected;
        },
        set: function (value) {
            if (!!value === this.selected)
                return;
            var index = this.album.imagePicker.selection.indexOf(this);
            if (value) {
                this._selected = true;
                if (this.album.imagePicker.mode === "single") {
                    if (this.album.imagePicker.selection.length > 0) {
                        this.album.imagePicker.selection.getItem(0).selected = false;
                    }
                }
                if (index < 0) {
                    this.album.imagePicker.selection.push(this);
                }
            }
            else {
                delete this._selected;
                if (index >= 0) {
                    this.album.imagePicker.selection.splice(index, 1);
                }
            }
            this.notifyPropertyChange("selected", this.selected);
        },
        enumerable: true,
        configurable: true
    });
    Asset.prototype.toggleSelection = function (args) {
        this.selected = !this.selected;
    };
    Asset.prototype.data = function () {
        return Promise.reject(new Error("Not implemented."));
    };
    Asset.prototype.setThumb = function (value) {
        this._thumb = value;
        this.notifyPropertyChange("thumb", this._thumb);
    };
    Asset.prototype.onThumbRequest = function () {
    };
    return Asset;
}(SelectedAsset));
exports.Asset = Asset;
var ImagePickerPH = (function (_super) {
    __extends(ImagePickerPH, _super);
    function ImagePickerPH(options) {
        var _this = _super.call(this, options) || this;
        _this._thumbRequestOptions = PHImageRequestOptions.alloc().init();
        _this._thumbRequestOptions.resizeMode = 2;
        _this._thumbRequestOptions.synchronous = false;
        _this._thumbRequestOptions.deliveryMode = 0;
        _this._thumbRequestOptions.normalizedCropRect = CGRectMake(0, 0, 1, 1);
        _this._thumbRequestSize = CGSizeMake(80, 80);
        _this._options = options;
        _this._initialized = false;
        return _this;
    }
    ImagePickerPH.prototype.authorize = function () {
        return new Promise(function (resolve, reject) {
            var runloop = CFRunLoopGetCurrent();
            PHPhotoLibrary.requestAuthorization(function (result) {
                if (result === 3) {
                    resolve();
                }
                else {
                    reject(new Error("Authorization failed. Status: " + result));
                }
            });
        });
    };
    ImagePickerPH.prototype.present = function () {
        this.initialize();
        return _super.prototype.present.call(this);
    };
    ImagePickerPH.prototype.addAlbumsForFetchResult = function (result) {
        for (var i = 0; i < result.count; i++) {
            var item = result.objectAtIndex(i);
            if (item.isKindOfClass(PHAssetCollection)) {
                this.addAlbumForAssetCollection(item);
            }
            else {
                console.log("Ignored result: " + item);
            }
        }
    };
    ImagePickerPH.prototype.addAlbumForAssetCollection = function (assetCollection) {
        var album = new AlbumPH(this, assetCollection.localizedTitle);
        var pfAssets = PHAsset.fetchAssetsInAssetCollectionOptions(assetCollection, null);
        album.addAssetsForFetchResult(pfAssets);
        if (album.assets.length > 0) {
            this.albums.push(album);
        }
    };
    ImagePickerPH.prototype.createPHImageThumb = function (target, asset) {
        PHImageManager.defaultManager().requestImageForAssetTargetSizeContentModeOptionsResultHandler(asset, this._thumbRequestSize, 1, this._thumbRequestOptions, function (target, uiImage, info) {
            var imageSource = new image_source.ImageSource();
            imageSource.setNativeSource(uiImage);
            target.setThumb(imageSource);
        }.bind(this, target));
    };
    ImagePickerPH.prototype.createPHImageThumbAsset = function (target, asset) {
        PHImageManager.defaultManager().requestImageForAssetTargetSizeContentModeOptionsResultHandler(asset, this._thumbRequestSize, 1, this._thumbRequestOptions, function (target, uiImage, info) {
            var imageAsset = new imageAssetModule.ImageAsset(uiImage);
            imageAsset.options = {
                width: this._options.maxWidth && this._options.maxWidth < IMAGE_WIDTH ? this._options.maxWidth : IMAGE_WIDTH,
                height: this._options.maxHeight && this._options.IMAGE_HEIGHT < 80 ? this._options.IMAGE_HEIGHT : IMAGE_HEIGHT,
                keepAspectRatio: true
            };
            target.setThumbAsset(imageAsset);
        }.bind(this, target));
    };
    ImagePickerPH.prototype.createPHImage = function (image, options) {
        return new Promise(function (resolve, reject) {
            var size = options ? CGSizeMake(options.maxWidth, options.maxHeight) : PHImageManagerMaximumSize;
            var resizeMode = PHImageRequestOptions.alloc().init();
            resizeMode.resizeMode = 2;
            resizeMode.synchronous = false;
            resizeMode.deliveryMode = 1;
            resizeMode.normalizedCropRect = CGRectMake(0, 0, 1, 1);
            PHImageManager.defaultManager().requestImageForAssetTargetSizeContentModeOptionsResultHandler(image, size, 1, resizeMode, function (createdImage, data) {
                if (createdImage) {
                    var imageSource = new image_source.ImageSource();
                    imageSource.setNativeSource(createdImage);
                    resolve(imageSource);
                }
                else {
                    reject(new Error("The image could not be created."));
                }
            });
        });
    };
    ImagePickerPH.prototype.done = function () {
        var result = [];
        for (var i = 0; i < this.selection.length; ++i) {
            result.push(this.selection.getItem(i));
        }
        this.notifySelection(result);
    };
    ImagePickerPH.prototype.initialize = function () {
        if (this._initialized) {
            return;
        }
        this._initialized = true;
        var smart = PHAssetCollection.fetchAssetCollectionsWithTypeSubtypeOptions(2, 2, null);
        this.addAlbumsForFetchResult(smart);
        var user = PHCollection.fetchTopLevelUserCollectionsWithOptions(null);
        this.addAlbumsForFetchResult(user);
    };
    return ImagePickerPH;
}(ImagePicker));
var AlbumPH = (function (_super) {
    __extends(AlbumPH, _super);
    function AlbumPH(imagePicker, title, options) {
        var _this = _super.call(this, imagePicker, title) || this;
        _this._setThumb = false;
        _this._options = options;
        return _this;
    }
    AlbumPH.prototype.addAssetsForFetchResult = function (result) {
        for (var i = 0; i < result.count; i++) {
            var asset = result.objectAtIndex(i);
            if (asset.isKindOfClass(PHAsset)) {
                this.addAsset(asset);
            }
            else {
                console.log("Ignored asset: " + asset);
            }
        }
    };
    AlbumPH.prototype.addAsset = function (asset) {
        var imagePicker = this.imagePicker;
        var item = new AssetPH(this, asset, this._options);
        if (!this._setThumb && imagePicker) {
            this._setThumb = true;
            imagePicker.createPHImageThumb(this, asset);
            imagePicker.createPHImageThumbAsset(this, asset);
        }
        if (this.imagePicker.newestFirst) {
            this.assets.unshift(item);
        }
        else {
            this.assets.push(item);
        }
    };
    return AlbumPH;
}(Album));
var AssetPH = (function (_super) {
    __extends(AssetPH, _super);
    function AssetPH(album, phAsset, options) {
        var _this = _super.call(this, album, phAsset) || this;
        _this._phAsset = phAsset;
        _this._initializeOptions(options);
        return _this;
    }
    Object.defineProperty(AssetPH.prototype, "ios", {
        get: function () {
            return this._phAsset;
        },
        enumerable: true,
        configurable: true
    });
    AssetPH.prototype.onThumbRequest = function () {
        _super.prototype.onThumbRequest.call(this);
        this.album.imagePicker.createPHImageThumb(this, this._phAsset);
    };
    Object.defineProperty(AssetPH.prototype, "uri", {
        get: function () {
            return this._phAsset.localIdentifier.toString();
        },
        enumerable: true,
        configurable: true
    });
    AssetPH.prototype._initializeOptions = function (options) {
        if (options) {
            this.options = {
                width: options.maxWidth && options.maxWidth < IMAGE_WIDTH ? options.maxWidth : IMAGE_WIDTH,
                height: options.maxHeight && options.maxHeight < IMAGE_HEIGHT ? options.maxHeight : IMAGE_HEIGHT,
                keepAspectRatio: true
            };
        }
        else {
            this.options = {
                width: IMAGE_WIDTH,
                height: IMAGE_HEIGHT,
                keepAspectRatio: true
            };
        }
    };
    AssetPH.prototype.getImage = function (options) {
        return this.album.imagePicker.createPHImage(this._phAsset, options);
    };
    AssetPH.prototype.getImageData = function () {
        return this.data().then(function (data) {
            return interop.bufferFromData(data);
        });
    };
    Object.defineProperty(AssetPH.prototype, "fileUri", {
        get: function () {
            if (!AssetPH._uriRequestOptions) {
                AssetPH._uriRequestOptions = PHImageRequestOptions.alloc().init();
                AssetPH._uriRequestOptions.synchronous = true;
            }
            var uri;
            PHImageManager.defaultManager().requestImageDataForAssetOptionsResultHandler(this._phAsset, AssetPH._uriRequestOptions, function (data, uti, orientation, info) {
                uri = info.objectForKey("PHImageFileURLKey");
            });
            if (uri) {
                return uri.toString();
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    AssetPH.prototype.data = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var runloop = CFRunLoopGetCurrent();
            PHImageManager.defaultManager().requestImageDataForAssetOptionsResultHandler(_this._phAsset, null, function (data, dataUTI, orientation, info) {
                if (data) {
                    resolve(data);
                }
                else {
                    reject(new Error("Failed to get image data."));
                }
            });
        });
    };
    return AssetPH;
}(Asset));
//# sourceMappingURL=imagepicker.ios.js.map