export interface ClientModel {
    id: string,
    firstName: string,
    lastName: string,
    token: string,
    type: string,
    createdAt: Date,
    age: number,
    email: string,
    phone: number,
    partner: '0' | '1'
}