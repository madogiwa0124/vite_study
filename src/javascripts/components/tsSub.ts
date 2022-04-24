export class Hey {
  msg: string;

  constructor() {
    this.msg = "hey!!";
  }

  call(): void {
    console.log(this.msg);
  }
}
