import { UserModel } from './auth.model';

export interface ClientModel extends Omit<UserModel, 'id' | 'createdAt'> {
    id: string,
    createdAt: Date,
    partner: '0' | '1'
}
