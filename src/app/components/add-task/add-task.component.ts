import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  textName!: string;
  dayName!: string;
  reminderName: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.textName) {
      alert("Please add a task!");
      return;
    }

    const newTask: Task = {
      text: this.textName,
      day: this.dayName,
      reminder: this.reminderName,
    };

    this.onAddTask.emit(newTask);

    this.textName = '';
    this.dayName = '';
    this.reminderName = false;
  }
}
