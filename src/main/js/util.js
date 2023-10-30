function getPoint(input) {

    if ("AEIOULNSTR".includes(input)) {
        return 1;
    }else if ("DG".includes(input)) {
        return 2;
    }else if ("BCMP".includes(input)) {
        return 3;
    }else if ("FHVWY".includes(input)) {
        return 4;
    }else if (input === "K") {
        return 6;
    }else if ("JX".includes(input)) {
        return 8;
    }else if ("QZ".includes(input)) {
        return 10;
    }else {
        return 0;
    }
}

export function getScoreMap() {
    const scoreMap = new Map(); // Map<String, Number>
    scoreMap.set('', 0);
    for (let i = 1; i <=26 ; i++) {
        const currentAlphabet = String.fromCharCode(i+64);
        scoreMap.set(currentAlphabet, getPoint(currentAlphabet));
    }
    return scoreMap;
}
