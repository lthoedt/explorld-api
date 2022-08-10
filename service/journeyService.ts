import Point from "../database/Point";
import Explorer from "../database/Explorer";
import { getJourneyFromExplorer, syncJourneyToExplorer } from "./explorerService";

export async function syncJourney(explorer: typeof Explorer, pts: [typeof Point]): Promise<boolean> {
    const points = pts.map((point: object) => new Point(point));

    return await syncJourneyToExplorer(explorer, points);
}

export async function getJourney(explorer: typeof Explorer): Promise<[[typeof Point]]> {
    const points: [typeof Point] = await getJourneyFromExplorer(explorer);

    return splitJourney(points);
}

const splitJourney = (points: [typeof Point]) : [[typeof Point]]=> {
    const splitJourneys = [];

    let pointsOnDay = [];

    for (const point of points) {
        if (pointsOnDay.length == 0) {
            pointsOnDay.push(point);
            continue;
        }

        const lastAddedElementDate = new Date(
            pointsOnDay[pointsOnDay.length - 1].time
        );
        const currentPointDate = new Date(point.time);

        const lastDateSeperated = {
            day: lastAddedElementDate.getDate(),
            month: lastAddedElementDate.getMonth(),
            year: lastAddedElementDate.getFullYear(),
            second: lastAddedElementDate.getSeconds(),
            minute: lastAddedElementDate.getMinutes(),
            hour: lastAddedElementDate.getHours(),
        };

        const currentDateSeperated = {
            day: currentPointDate.getDate(),
            month: currentPointDate.getMonth(),
            year: currentPointDate.getFullYear(),
            second: currentPointDate.getSeconds(),
            minute: currentPointDate.getMinutes(),
            hour: currentPointDate.getHours(),
        };

        const filters = ["day", "month", "year"];

        let isDifferent = false;

        for (const filter of filters) {
            // @ts-ignore
            if (lastDateSeperated[filter] != currentDateSeperated[filter])
                isDifferent = true;
        }

        if (isDifferent) {
            splitJourneys.push(pointsOnDay);
            pointsOnDay = [point];
            continue;
        }

        pointsOnDay.push(point);
    }

    splitJourneys.push(pointsOnDay);

    // @ts-ignore
    return splitJourneys;
}