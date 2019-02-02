import { Observable } from 'rxjs';

export abstract class UserApi {
    singIn: (username: string, password: string, rememberMe: boolean) => Observable<any>;
    signout: () => Observable<any>;
    //changePassword
}