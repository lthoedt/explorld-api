import Point from "../database/Point";
import Explorer from "../database/Explorer";
import { syncJourneyToExplorer } from "./explorerService";

export async function syncJourney(explorer : typeof Explorer, pts : [Object]) : Promise<boolean> {
    const points = pts.map((point: object) => new Point(point));

    return await syncJourneyToExplorer(explorer, points);
}