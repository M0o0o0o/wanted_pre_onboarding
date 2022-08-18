export class NoExistCompany extends Error {
  constructor(field, message) {
    super(message);
    this.name = field;
  }
}
