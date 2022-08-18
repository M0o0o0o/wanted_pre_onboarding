export class NoExistCompany extends Error {
  constructor(field, message) {
    super(message);
    this.name = field;
  }
}

export class NoExistJob extends Error {
  constructor(field, message) {
    super(message);
    this.name = field;
  }
}
