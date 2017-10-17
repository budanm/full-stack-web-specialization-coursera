"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Couchbase = (function () {
    function Couchbase(databaseName) {
        this.manager = CBLManager.sharedInstance();
        if (!this.manager) {
            console.log("MANAGER ERROR:Can not create share instance of CBLManager");
        }
        var errorRef = new interop.Reference();
        this.database = this.manager.databaseNamedError(databaseName, errorRef);
        if (!this.database) {
            console.log(errorRef.value);
        }
    }
    Couchbase.prototype.createDocument = function (data, documentId) {
        var doc = documentId == null ? this.database.createDocument() : this.database.documentWithID(documentId);
        var documentId = doc.documentID;
        var errorRef = new interop.Reference();
        var revision = doc.putPropertiesError(data, errorRef);
        if (!errorRef) {
            console.log("DOCUMENT ERROR:" + errorRef.value);
        }
        return documentId;
    };
    Couchbase.prototype.getDocument = function (documentId) {
        var document = this.database.documentWithID(documentId);
        if (document && document.properties) {
            return JSON.parse(this.mapToJson(document.properties));
        }
        return null;
    };
    Couchbase.prototype.updateDocument = function (documentId, data) {
        var document = this.database.documentWithID(documentId);
        var temp = this.getDocument(documentId);
        data._id = temp._id;
        data._rev = temp._rev;
        var errorRef = new interop.Reference();
        var revision = document.putPropertiesError(data, errorRef);
        if (!errorRef) {
            console.error("DOCUMENT ERROR", errorRef.value);
        }
    };
    Couchbase.prototype.deleteDocument = function (documentId) {
        var document = this.database.documentWithID(documentId);
        var errorRef = new interop.Reference();
        document.deleteDocument(errorRef);
        if (!errorRef) {
            return false;
        }
        return true;
    };
    Couchbase.prototype.createView = function (viewName, viewRevision, callback) {
        var self = this;
        var view = this.database.viewNamed(viewName);
        view.setMapBlockVersion(function (document, emit) {
            callback(JSON.parse(self.mapToJson(document)), {
                emit: emit
            });
        }, viewRevision);
    };
    Couchbase.prototype.executeQuery = function (viewName, options) {
        var view = this.database.viewNamed(viewName);
        var query = view.createQuery();
        if (options != null) {
            if (options.descending) {
                query.descending = options.descending;
            }
            if (options.limit) {
                query.limit = options.limit;
            }
            if (options.skip) {
                query.skip = options.skip;
            }
            if (options.startKey) {
                query.startKey = options.startKey;
            }
            if (options.endKey) {
                query.endKey = options.endKey;
            }
        }
        var errorRef = new interop.Reference();
        var resultSet = query.run(errorRef);
        var row = resultSet.nextRow();
        var results = [];
        while (row) {
            if (row.value !== null) {
                if (typeof row.value === "object") {
                    results.push(JSON.parse(this.mapToJson(row.value)));
                }
                else {
                    results.push(row.value);
                }
            }
            row = resultSet.nextRow();
        }
        if (!errorRef) {
            console.log(errorRef.value);
        }
        return results;
    };
    Couchbase.prototype.createPullReplication = function (remoteUrl) {
        var url = NSURL.URLWithString(remoteUrl);
        var replication = this.database.createPullReplication(url);
        if (!replication) {
            console.error("PULL ERROR");
        }
        return new Replicator(replication);
    };
    Couchbase.prototype.createPushReplication = function (remoteUrl) {
        var url = NSURL.URLWithString(remoteUrl);
        var replication = this.database.createPushReplication(url);
        if (!replication) {
            console.error("PUSH ERROR");
        }
        return new Replicator(replication);
        ;
    };
    Couchbase.prototype.addDatabaseChangeListener = function (callback) {
        var self = this;
        function getter(_this, property) {
            if (typeof property === "function") {
                return property.call(_this);
            }
            else {
                return property;
            }
        }
        var defaultCenter = getter(NSNotificationCenter, NSNotificationCenter.defaultCenter);
        var mainQueue = getter(NSOperationQueue, NSOperationQueue.mainQueue);
        defaultCenter.addObserverForNameObjectQueueUsingBlock("CBLDatabaseChange", this.database, mainQueue, function (notification) {
            var changesList = [];
            if (notification.userInfo) {
                var changes = notification.userInfo.objectForKey("changes");
                if (changes != null) {
                    for (var i = 0; i < changes.count; i++) {
                        changesList.push(new DatabaseChange(changes[i]));
                    }
                    callback(changesList);
                }
            }
        });
    };
    Couchbase.prototype.destroyDatabase = function () {
        var errorRef = new interop.Reference();
        this.database.deleteDatabase(errorRef);
        if (!errorRef) {
            console.error("DESTROY", errorRef.value);
        }
    };
    Couchbase.prototype.mapToJson = function (properties) {
        var errorRef = new interop.Reference();
        var result = "";
        if (NSJSONSerialization.isValidJSONObject(properties)) {
            var data = NSJSONSerialization.dataWithJSONObjectOptionsError(properties, NSJSONWritingPrettyPrinted, errorRef);
            result = NSString.alloc().initWithDataEncoding(data, NSUTF8StringEncoding);
        }
        else {
            result = JSON.stringify(properties);
        }
        return result;
    };
    return Couchbase;
}());
exports.Couchbase = Couchbase;
var Replicator = (function () {
    function Replicator(replicator) {
        this.replicator = replicator;
    }
    Replicator.prototype.start = function () {
        this.replicator.start();
    };
    Replicator.prototype.stop = function () {
        this.replicator.stop();
    };
    Replicator.prototype.isRunning = function () {
        this.replicator.isRunning;
    };
    Replicator.prototype.setContinuous = function (isContinuous) {
        this.replicator.continuous = isContinuous;
    };
    Replicator.prototype.setCookie = function (name, value, path, expirationDate, secure) {
        this.replicator.setCookieNamedWithValuePathExpirationDateSecure(name, value, path, expirationDate, secure);
    };
    ;
    Replicator.prototype.deleteCookie = function (name) {
        this.replicator.deleteCookieNamed(name);
    };
    return Replicator;
}());
exports.Replicator = Replicator;
var DatabaseChange = (function () {
    function DatabaseChange(change) {
        this.change = change;
    }
    DatabaseChange.prototype.getDocumentId = function () {
        return this.change.documentID;
    };
    DatabaseChange.prototype.getRevisionId = function () {
        return this.change.revisionID;
    };
    return DatabaseChange;
}());
exports.DatabaseChange = DatabaseChange;
