"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subjects;
(function (Subjects) {
    var Subject = /** @class */ (function () {
        function Subject() {
        }
        Object.defineProperty(Subject.prototype, "teacher", {
            get: function () {
                return this._teacher;
            },
            set: function (teacher) {
                this._teacher = teacher;
            },
            enumerable: false,
            configurable: true
        });
        return Subject;
    }());
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
