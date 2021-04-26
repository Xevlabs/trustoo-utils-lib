import { PageTypeEnum } from '../enums/page-type.enum';
import { ComponentConfig, ComponentValueModel } from './component-config.model';
import { MenuParamsModel } from './menu-params.model';

export interface PagesParamsModel {
  titleKey: string,
  pageSlug: string,
  type: PageTypeEnum,
  components?: ComponentValueModel[] | ComponentConfig[],
  menuParams?: MenuParamsModel[],
}

export interface PageValues extends Omit<PagesParamsModel, 'components'> {
  createdAt: number;
  updatedAt: number;
  components: ComponentValueModel[];
  checked?: boolean;
}

export interface FormPageValues extends Omit<PageValues, 'createdAt' | 'updatedAt'> {}

export interface ConfigPageParamsModel {
  titleKey: string,
  pageSlug: string,
  type: PageTypeEnum,
  components?: number[],
}
