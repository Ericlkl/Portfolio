import { NextRoute as INextRoute, NextRouteParams } from './interfaces';
export class NextRoute implements INextRoute {
	params: NextRouteParams;

	constructor(params: NextRouteParams) {
		this.params = { ...params };
	}
}
