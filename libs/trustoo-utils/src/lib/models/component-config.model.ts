import { ComponentTypeEnum } from '../enums/component-type.enum';
import { OptionModel } from './option.model';
import { InspectionErrorModel } from './inspection-error.model';
import { TagListEnum } from '../enums/tag-list.enum';

export interface ComponentConfig {
  id: number,
  type: ComponentTypeEnum,
  key: string,
  tag?: TagListEnum;
  required: boolean,
  options: OptionModel[],
  overlayImage?: string
}

export interface ComponentValueModel extends ComponentConfig {
  value: any,
  errors: InspectionErrorModel[]
}
