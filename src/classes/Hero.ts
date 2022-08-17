import powers from '../data/powers';

export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public alterEgo?: string
  ) {}

  get power(): string {
    return (
      powers.find((power) => power.id === this.powerId)?.description ||
      'No power'
    );
  }
}
