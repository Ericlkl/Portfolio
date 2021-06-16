import { HashMap } from '../common';

export interface NextRoute {
	params: HashMap<string>;
}

export interface NextRouteParams extends HashMap<string> {}
