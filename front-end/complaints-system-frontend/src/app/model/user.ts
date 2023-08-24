export class User {
  emailid: string = '';
  fullname: string = '';
  role: string = '';
  password: string = '';

  constructor(emailid: string, fullname: string, role: string, password: string) {
    this.emailid = emailid;
    this.fullname = fullname;
    this.role = role;
    this.password = password;
  }
}
