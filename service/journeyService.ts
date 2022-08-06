import Point from "../database/Point";
import Explorer from "../database/Explorer";
import { getJourneyFromExplorer, syncJourneyToExplorer } from "./explorerService";

export async function syncJourney(explorer : typeof Explorer, pts : [typeof Point]) : Promise<boolean> {
    const points = pts.map((point: object) => new Point(point));

    return await syncJourneyToExplorer(explorer, points);
}

export function getJourney(explorer : typeof Explorer) : Promise<[typeof Point]> {
    return getJourneyFromExplorer(explorer);
}