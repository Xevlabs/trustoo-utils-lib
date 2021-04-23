import { AskModel } from './ask.model';

export interface MissionModel {
    id: number,
    createdAt: Date,
    specialist?: {
        id: number,
        firstName: string,
        lastName: string,
        token: string,
        type: string,
        createdAt: Date,
        age: number,
        email: string,
        phone: number
    },
    status: string,
    ask: AskModel
}