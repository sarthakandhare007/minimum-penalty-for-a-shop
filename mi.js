var bestClosingTime = function(customers) {
    let penalty = 0;

    // Initial penalty: shop closed all day
    for (let c of customers) {
        if (c === 'Y') penalty++;
    }

    let minPenalty = penalty;
    let bestHour = 0;

    for (let i = 0; i < customers.length; i++) {
        if (customers[i] === 'Y') {
            penalty--;   // opening helps
        } else {
            penalty++;   // opening hurts
        }

        if (penalty < minPenalty) {
            minPenalty = penalty;
            bestHour = i + 1;
        }
    }

    return bestHour;
};
