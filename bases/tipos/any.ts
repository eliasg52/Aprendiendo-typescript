(() => {
  let avenger: any = 123;
  let exists;
  let power;

  avenger = 'Dr strange';

  console.log((avenger as string).charAt(0));

  avenger = 15.243234;

  console.log((<number>avenger).toFixed(2));
})();
