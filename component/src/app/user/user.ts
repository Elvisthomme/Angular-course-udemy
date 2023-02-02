export class User {
  constructor(
    public name: string,
    public jop: string,
    public company: string,
    public about: string | undefined,
    public image: string | undefined
  ) {}
}
