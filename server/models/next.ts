import { HashMap } from '../interfaces';

export interface NextRoute {
  params: HashMap<string>;
}

export interface NextRouteParams extends HashMap<string> {}

export class NextRoute implements NextRoute {
  params: NextRouteParams;

  constructor(params: NextRouteParams) {
    this.params = { ...params };
  }
}
