import { ColorEnum } from '../enums/color.enum';
import { DefectModel } from './defect.model';

export interface OptionModel {
  key:  string,
  defaultValue: string | boolean | number,
  color: ColorEnum,
  triggerError: boolean,
  errorModel?: DefectModel[],
  triggers?: ComponentTriggersModel[],
}

export interface ComponentTriggersModel {
  id: number,
  optionKey: string,
  disable: boolean,
  value: string
}
