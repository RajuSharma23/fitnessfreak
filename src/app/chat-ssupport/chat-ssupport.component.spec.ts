import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSsupportComponent } from './chat-ssupport.component';

describe('ChatSsupportComponent', () => {
  let component: ChatSsupportComponent;
  let fixture: ComponentFixture<ChatSsupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatSsupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatSsupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
