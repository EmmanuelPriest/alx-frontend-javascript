var Teacher = /** @class */ (function () {
    function Teacher(firstName, lastName, location) {
        this.fullTimeEmployee_ = true;
        this.firstName_ = firstName;
        this.lastName_ = lastName;
        this.location_ = location;
    }
    Object.defineProperty(Teacher.prototype, "firstName", {
        get: function () {
            return this.firstName_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "lastName", {
        get: function () {
            return this.lastName_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "fullTimeEmployee", {
        get: function () {
            return this.fullTimeEmployee_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "yearsOfExperience", {
        get: function () {
            return this.yearsOfExperience_;
        },
        set: function (value) {
            this.yearsOfExperience_ = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "location", {
        get: function () {
            return this.location_;
        },
        enumerable: false,
        configurable: true
    });
    return Teacher;
}());
