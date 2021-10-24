(() => {
  const batman: string = 'Batman';
  const linternaVerde: string = 'Linterna Verde';
  const volcanNegro: string = `Heroe: Volcan Negro`;

  console.log(`Yo soy ${batman}`);
  console.log(batman.toUpperCase());

  console.log(
    batman[10]?.toUpperCase() ||
      'Si es falso lo de la izquierda, este es mi valor'
  );
})();
