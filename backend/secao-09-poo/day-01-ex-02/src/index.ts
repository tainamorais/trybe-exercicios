class Email {
  private _from: string;
  private _to: string;
  private _subject: string | undefined;
  private _message: string;

  constructor(f: string, t: string, s: string, m: string) {
    this._from = f;
    this._to = t;
    this.subject = s;
    this._message = m;
  }

  get from() { return this._from }
  get to() { return this._to }
  get subject() { return this._subject || '' }
  get message() { return this._message }

  // só vou alterar o subject se o tamanho for até 40, do contrário nada muda
  set subject(newValue: string) {
    if (newValue.length <= 40)
      this._subject = newValue
  }

  get content() {
    return `
    From ${this.from} to ${this.to}
    ${this.subject}

    ${this.message}
    `
  }
}

class MailList {
  constructor(private mailList: Email[] = []) {}

  get all(): Email[] { return [...this.mailList]; }

  addEmail(newMail: Email): void { this.mailList.push(newMail); }

  removeEmail(mailToRemove: Email): void {
    this.mailList = this.mailList.filter((mail) =>
    (mail.from !== mailToRemove.from) &&
    (mail.to !== mailToRemove.to) &&
    (mail.subject !== mailToRemove.subject) &&
    (mail.message !== mailToRemove.message));
  }

  getByEmailFrom(mailAddress: string): Email[] {
    return this.mailList.filter((mail) => mail.from === mailAddress);
  }

  getByEmailTo(mailAddress: string): Email[] {
    return this.mailList.filter((mail) => mail.to === mailAddress);
  }

  getBySubject(searchString: string): Email[] {
    return this.mailList
      .filter((mail) => mail.subject.indexOf(searchString) !== -1);
  }
}

const email1 = new Email(
  'me@personalmail.com',
  'friend@personalmail.com',
  'Car wash',
  'There\'s a ew car wash in town. Did you know?'
);

const email2 = new Email(
  'friend@personalmail.com',
  'me@personalmail.com',
  'Reply - Car wash',
  'Great! My car is really dirty. How much do they charge?',
);
const email3 = new Email(
  'me@personalmail.com',
  'friend@personalmail.com',
  'Reply - Reply - Car wash',
  '$5.00, and you get a free polishing cloth',
);

const email4 = new Email(
  'me@companymail.com',
  'ceo@companymail.com',
  'Day off monday',
  `Next Tuesday is a holiday.
  Are we going to work on Monday?`,
);

const email5 = new Email(
  'ceo@companymail.com',
  'me@companymail.com',
  'Reply - Day off monday',
  'The entire company will have a day off on monday =D',
);

const personalMailList = new MailList([email1, email2, email3]);

const professionalMailList = new MailList([email4, email5]);

console.log('------ personalMailList.getByEmailFrom(\'me@personalmail.com\'):');
personalMailList.getByEmailFrom('me@personalmail.com').forEach(
  (mail) => console.log(mail.content),
);
console.log('------ ACABOU 01');

personalMailList.addEmail(email5);

console.log('------ personalMailList.getEmailsBySubject(\'Day off\'):');
personalMailList.getBySubject('Day off').forEach(
  (mail) => console.log(mail.content),
);
console.log('------ ACABOU 02');

personalMailList.removeEmail(email5);
console.log('------ professionalMailList.all:');
professionalMailList.all.forEach(
  (mail) => console.log(mail.content),
);
console.log('------ ACABOU 03');


console.log('------ professionalMailList.all:');
professionalMailList.all.forEach(
  (mail) => console.log(mail.content),
);
console.log('------ ACABOU 04');
