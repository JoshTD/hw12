import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';


@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {
  
  myWorkerType = MyWorkerType;
 
  @Output() addWorker = new EventEmitter<MyWorker>();
  @Input() worker: MyWorker;

  constructor() { }

  ngOnInit(): void {}

  onAddWorker() {
    if (this.worker.name != undefined && this.worker.surname != undefined) {
      let worker: MyWorker = {
        name: this.worker.name,
        surname: this.worker.surname,
        type: this.worker.type
      }
      if (this.worker.id != undefined)
        worker.id = this.worker.id; 
      this.addWorker.emit(worker);
      this.worker.name = undefined;
      this.worker.surname = undefined;
      this.worker.type = 0;
      this.worker.id = undefined;
    } else alert('Введите имя и фамилию работника');
  }
}
