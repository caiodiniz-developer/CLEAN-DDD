export class slug {
  public value: string;

  constructor(value: string) {
    this.value = value;
  }

  static createFromText(text: string) {
    const slugText = text.normalize("NFKD");
  }
}
