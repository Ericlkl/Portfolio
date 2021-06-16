import { NextRoute as INextRoute, NextRouteParams } from 'interfaces/models/nextjs';
export class NextRoute implements INextRoute {
	params: NextRouteParams;

	constructor(params: NextRouteParams) {
		this.params = { ...params };
	}
}
