import Explorer from "../database/Explorer";

/**
 *
 * @param explorerId
 * @param points
 * array of Points [Point (mongoose model)]
 */
export async function syncJourneyToExplorer(
	explorerId: String,
	points: any[]
) : Promise<boolean> {

	const result = await Explorer.findOneAndUpdate(
		{ id: explorerId },
		{
			$push: { journey: points },
		}
	);

    return result != null;
}
