import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerList} from './player-list.component'
import { Player } from '../../models/player.model';


describe('PlayerList', () => {
  let component: Player;
  let fixture: ComponentFixture<PlayerList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
