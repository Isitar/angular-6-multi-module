import { PlayersModule } from './players.module';

describe('PlayersModule', () => {
  let playersModule: PlayersModule;

  beforeEach(() => {
    playersModule = new PlayersModule();
  });

  it('should create an instance', () => {
    expect(playersModule).toBeTruthy();
  });
});
