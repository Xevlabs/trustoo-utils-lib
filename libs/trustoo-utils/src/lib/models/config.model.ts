import { CountryEnum } from '../enums/country.enum';
import { MenuParamsModel } from './menu-params.model';
import { ConfigPageParamsModel } from './pages-params.model';
import { ComponentConfig } from './component-config.model';

export interface ConfigModel {
  id: string;
  version: string;
  lastUpdate: string;
  country: CountryEnum;
  menuParams: MenuParamsModel[];
  pages: ConfigPageParamsModel[];
  components: ComponentConfig[];
}
