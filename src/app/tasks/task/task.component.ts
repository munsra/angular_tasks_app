import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Task } from './task.model';
import { DatePipe } from '@angular/common';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [CardComponent, DatePipe]
})
export class TaskComponent {

  @Input({ required : true}) task!: Task;

  constructor(private tasksService: TasksService){

  }

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id)
  }
}
