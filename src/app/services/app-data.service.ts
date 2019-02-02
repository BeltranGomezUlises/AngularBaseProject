import { Injectable } from '@angular/core';
import { Country } from '../view-models/country';
import { UserService } from './user.service';
import { of, Observable } from 'rxjs';
import { delay, tap, filter } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})
export class AppDataService {

    private countries: Array<Country> = [
        { id: 1, name: "México", epiIndex: 789.1 },
        { id: 2, name: "USA", epiIndex: 654 },
        { id: 3, name: "Brazil", epiIndex: 432.1 },
        { id: 4, name: "Perú", epiIndex: 18.6 },
        { id: 5, name: "Colombia", epiIndex: 489 },
        { id: 6, name: "Canada", epiIndex: 321.32 }
    ]

    constructor(private userService: UserService) { }

    createCountry(vm: Country): Observable<Country> {
        let id = 0;
        this.countries.forEach(c => {
            if (c.id >= id) id = c.id + 1;
        });

        vm.id = id;
        this.countries.push(vm);
        return of(vm);
    }

    deleteCountry(id: number) {
        return of({}).pipe(
            delay(2000),
            tap(__ => this.countries.splice(
                this.countries.findIndex(c => c.id == id), 1
            ))
        )
    }

    getCoutries(): Observable<Country[]> {
        return of(this.countries).pipe(
            delay(1000)
        );
    }

    getCountry(id: number): Observable<Country>{
        let country = this.countries.filter(c => c.id = id)[0];
        return of(country).pipe(
            delay(1000)
        );
    }

    updateCountry(updatedCountry: Country) : Observable<any> {
        var country = this.countries.find(c => c.id == updatedCountry.id);
        Object.assign(country, updatedCountry);
        return of(country).pipe(
            delay(2000)
            );        
      }
}