import { Component, Input } from '@angular/core';

import { Todo } from './todo';
import { TodoItemComponent } from './todo-item.component';

@Component({
    selector: 'todo-list',
    templateUrl: './app/todo/todo-list.component.html',
    styleUrls: ['./app/todo/todo-list.component.css'],
    directives: [TodoItemComponent]
})
export class TodoListComponent {
    @Input() todos: Todo[];

    onTodoDeleted(todo: Todo) {
        if (todo) {
            let index = this.todos.indexOf(todo);

            if (index > -1) {
                this.todos.splice(index, 1);
            }
        }
    }
}