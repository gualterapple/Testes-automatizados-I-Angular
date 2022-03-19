import { LikeWidgetModule } from './like-widget.module';
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';


describe(LikeWidgetComponent.name,() => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {
   await TestBed.configureTestingModule({
      imports: [LikeWidgetModule],
      //change detection automático
      //providers: [{provide: ComponentFixtureAutoDetect, useValue: true}]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;

  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto generate ID when id input property is missing', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should not generate ID when id input property is present', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  it(`${LikeWidgetComponent.prototype.like.name}
  Should trigger emission when called`, () => {
    spyOn(component.liked,'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });

});
