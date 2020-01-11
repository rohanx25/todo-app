import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoForm: FormGroup;
  todoList = [];

  constructor(
    formBuilder: FormBuilder
  ) {
    this.todoForm = formBuilder.group({
      item: [''],
      isChecked: ['']
    });
  }

  ngOnInit() {
  }

  // On submitting an item in input field
  onSubmit(todoItem) {
    this.todoList.push(todoItem);
    this.todoForm.reset();
  }

  // On hitting the X button
  delete(index) {
    this.todoList.splice(index, 1);
  }

  // On checking the checkbox
  checkboxCheck(e, index) {
    this.todoList[index].isChecked = e.target.checked
  }
}
