import { HashMap } from '../../common/interfaces';

export interface NextRoute {
	params: HashMap<string>;
}

export interface NextRouteParams extends HashMap<string> {}
