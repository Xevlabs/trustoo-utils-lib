import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from '../../models/auth.model';

@Pipe({
  name: 'userName'
})
export class UserNamePipe implements PipeTransform {

    transform(user: UserModel, ...args: unknown[]): string {
        return `${user.firstName} ${user.lastName}`
    }

}
