function sumMajorCredits(subject1, subject2) {
    return {
        brand: "major",
        credits: subject1.credits + subject2.credits,
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        brand: "minor",
        credits: subject1.credits + subject2.credits,
    };
}
