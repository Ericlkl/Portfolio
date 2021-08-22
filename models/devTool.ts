// library
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// helper
import { quickSort } from 'helper';

// interfaces
import { DevelopmentTool, DevelopmentToolIncludes } from 'interfaces/models/devTools';
import { CompareFunction } from 'interfaces/helper';

const initialInclude: DevelopmentToolIncludes = {
	devField: true,
	projects: false,
};

const compareDevToolFunction: CompareFunction<DevelopmentTool> = (pivot, currentElm) => {
	const pivotId = pivot.devField!.id;
	const currentElmId = currentElm.devField!.id;
	return currentElmId - pivotId;
};

export class DevelopmentToolManager {
	static async getDevelopmentTools({
		rules = {},
		include = initialInclude,
		sortedByField = false,
	}): Promise<DevelopmentTool[]> {
		const devTools = await prisma.developmentTool.findMany({
			where: rules,
			include,
		});
		return sortedByField ? quickSort(devTools, compareDevToolFunction) : devTools;
	}
}
