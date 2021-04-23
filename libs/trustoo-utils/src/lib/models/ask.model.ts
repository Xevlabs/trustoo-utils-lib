import { AddressModel } from './address.model';
import { ClientModel } from './client.model';

export interface AskModel {
    id: string,
    createdAt: Date,
    askType: string,
    status: string,
    brand: string,
    model: string,
    carYear: number,
    carLocation: AddressModel,
    client: ClientModel,
    note: string | null
}
