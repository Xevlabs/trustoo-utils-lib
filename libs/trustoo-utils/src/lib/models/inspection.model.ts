import { PageValues } from './pages-params.model';
import { InspectionStatusEnum } from '../enums/inspection-status.enum';
import { MissionModel } from './mission.model';
import { UserModel } from './auth.model';

export interface InspectionModel {
  id: string,
  inspector: InspectorModel,
  inspectorId: string,
  configId: string,
  createdAt: number,
  updatedAt: number,
  missionId: number,
  pages: PageValues[],
  mission: MissionModel,
  status: InspectionStatusEnum
}

export interface InspectorModel extends Omit<UserModel, 'token' | 'type'| 'createdAt'| 'age'> {}
