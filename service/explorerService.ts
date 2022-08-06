import Explorer from "../database/Explorer";
import Point from "../database/Point";

export async function getExplorer(explorerId: String) {
	return await Explorer.findOne({ id: explorerId });
}

/**
 *
 * @param explorer
 * Explorer (mongoose model)
 * @param points
 * array of Points [Point (mongoose model)]
 */
export async function syncJourneyToExplorer(
	explorer: typeof Explorer,
	points: any[]
): Promise<boolean> {
	const result = await Explorer.findOneAndUpdate(
		{ id: explorer.id },
		{
			$push: { journey: points },
		}
	);

	return result != null;
}

export async function getJourneyFromExplorer(
	explorer: typeof Explorer
): Promise<[typeof Point]> {
	const result = await Explorer.findOne({ id: explorer.id }, { journey: 1, _id: 0 });
	return (result == null) ? null : result.journey;
}
