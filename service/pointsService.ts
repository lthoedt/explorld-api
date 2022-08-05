import Point from "../database/Point";
import { syncJourneyToExplorer } from "./explorerService";

export async function syncPoints(exploredId : String, pts : [Object]) : Promise<boolean> {
    const points = pts.map((point: object) => new Point(point));

    return await syncJourneyToExplorer(exploredId, points);
}