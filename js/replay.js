let replayData = [];

function buildReplayData(clicks) {

    replayData = [];

    if (clicks.length < 2) {
        return replayData;
    }

    for (let i = 1; i < clicks.length; i++) {

        replayData.push(
            clicks[i] - clicks[i - 1]
        );
    }

    return replayData;
}

function getReplayData() {
    return replayData;
}