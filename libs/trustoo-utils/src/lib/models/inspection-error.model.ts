import { ResponseActions } from '../enums/response-actions.enum';
import { DefectModel } from './defect.model';

export interface InspectionErrorModel {
    createdAt: Date;
    defect: DefectModel;
    comment?: string;
    pictureUrl?: string[];
    cost?: number;
  }

export interface ResponseInspectionErrorModel {
  action: ResponseActions;
  error: InspectionErrorModel;
}
