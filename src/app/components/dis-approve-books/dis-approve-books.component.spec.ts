import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DisApproveBooksComponent } from "./dis-approve-books.component";

xdescribe("DisApproveBooksComponent", () => {
  let component: DisApproveBooksComponent;
  let fixture: ComponentFixture<DisApproveBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisApproveBooksComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisApproveBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
