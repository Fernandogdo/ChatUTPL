import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionesChatComponent } from './configuraciones-chat.component';

describe('ConfiguracionesChatComponent', () => {
  let component: ConfiguracionesChatComponent;
  let fixture: ComponentFixture<ConfiguracionesChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionesChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionesChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
