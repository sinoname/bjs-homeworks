function getAnimalSound(animal) {
    if (animal === undefined) {
        return null;
    }

    let sound = animal.sound;
    return sound;
}

function getAverageMark(marks) {
    let average = 0;
	let roundedAverage = 0;
	if (marks.length == 0) {
		return 0;
	}
	for (let i = 0; i < marks.length; i++) {
	   average += Number(marks[i]);	   
	   roundedAverage = average / marks.length;
	}
	
	return Math.round(roundedAverage);
}

function checkBirthday(birthday) {
    let now = Date.now();
    let InfoDate = Date.parse(birthday);
    let diff = now - InfoDate;
    let milliSecondsYear = 1000 * 60 * 60 * 24 * 365.25;
    let age = diff / milliSecondsYear;
    let ageYears = Math.floor(age);
    let verdict;
    if (ageYears >= 18) {
        verdict = true;
    } else {
        verdict = false;
    }
   
    return verdict;
}