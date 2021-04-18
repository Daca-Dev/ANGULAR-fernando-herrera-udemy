import { FormControl } from '@angular/forms';

export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

export const noPuedeSerStrider = (control: FormControl) => {

    // el retorno de null es que es valido
    const valor = control.value?.trim();

    if (valor === 'daca1953') {
        return {
            noDaca: true
        };
    }

    return null;
};
