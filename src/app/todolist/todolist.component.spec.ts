import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoList } from './todolist.component';

describe('DashboardComponent', () => {
  let component: TodoList;
  let fixture: ComponentFixture<TodoList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
