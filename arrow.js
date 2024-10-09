const calculateAverageScore = (scores) => {
    if (scores.length === 0) {
        return 0;
    }

    const sum = scores.reduce((accumulator, score) => accumulator + score, 0);

    return sum / scores.length;
};
