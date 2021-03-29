import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'mayusculas', // nombre con el cual se llamará al Pipe
})
export class MayusculasPipe implements PipeTransform {

    transform(value: string, enMayusculas: boolean = true): string {
        // console.log(value);
        // if (enMayusculas) {
        //     return value.toUpperCase();
        // } else {
        //     return value.toLowerCase();
        // }
        return ( enMayusculas ) ? value.toUpperCase() : value.toLowerCase();
    }
}
