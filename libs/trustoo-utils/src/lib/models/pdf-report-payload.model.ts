import { ColorEnum } from '../enums/color.enum';
import { ComponentTypeEnum } from '../enums/component-type.enum';
import { DefectModel } from '../models/defect.model';
import { InspectionErrorModel } from '../models/inspection-error.model';

export interface PdfReportPayloadModel {
    mission: PdfReportMissionModel,
    sections: PdfReportSectionModel[]
}

export interface PdfMonkeyRequestModel {
    document: {
        document_template_id: string,
        status: 'pending',
        payload: PdfReportPayloadModel,
        meta: {
            _filename: string,
            inspectionId: string,
            version: number
        }
    }
}

export interface PdfReportMissionModel {
    label: string,
    client: PdfReportPersonModel,
    vehicle: PdfReportVehicleModel,
    inspector: PdfReportPersonModel
}

interface PdfReportStaticDataModel {
    label: string,
    value: string
}

interface PdfReportPersonModel {
    label: string,
    firstName: PdfReportStaticDataModel,
    lastName: PdfReportStaticDataModel,
    birthDate: PdfReportStaticDataModel,
    phone: PdfReportStaticDataModel,
    email: PdfReportStaticDataModel
}

interface PdfReportVehicleModel {
    label: string,
    model: PdfReportStaticDataModel,
    carYear: PdfReportStaticDataModel,
    brand: PdfReportStaticDataModel,
    carLocation: {
        label: string,
        city: PdfReportStaticDataModel,
        country: PdfReportStaticDataModel,
        zip: PdfReportStaticDataModel
    }
}

export interface PdfReportSectionModel {
    sectionName: string,
    subsections: PdfReportSubsectionModel[]
}

export interface PdfReportSubsectionModel {
    subsectionName: string,
    components: PdfReportComponentModel[]
}

export interface PdfReportComponentModel {
    componentName: string,
    type: ComponentTypeEnum,
    color?: ColorEnum,
    value: string | string[],
    errors: PdfReportErrorModel[]
}

export interface PdfReportErrorModel extends Omit<InspectionErrorModel, 'defect' | 'createdAt'> {
    defect: PdfReportDefectModel
}

interface PdfReportDefectModel extends Omit<DefectModel, 'key'> {
    defectName: string
}
