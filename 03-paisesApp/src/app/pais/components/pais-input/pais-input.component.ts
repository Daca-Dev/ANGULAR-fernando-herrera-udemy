import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Input() placeholder: string = 'Buscar...';

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  dbouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit(): void {
    // se dispara solo una vez cunado el componente es creado
    this.dbouncer
      .pipe(debounceTime(300))
      .subscribe(valor => {
        this.onDebounce.emit(valor);
      });
  }

  buscar(): void {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(): void {
    this.dbouncer.next(this.termino);
  }
}
