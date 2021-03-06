export interface AuthModel {
    email: string,
    password: string
}

export interface UserModel {
    id: number,
    firstName: string,
    lastName: string,
    token: string,
    type: string,
    createdAt: string,
    birthDate: string,
    email: string,
    phone: number
}
