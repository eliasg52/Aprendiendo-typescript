(() => {
  const fullName = (firstName: string, lastName: string): string => {
    return `${firstName}, ${lastName}`;
  };

  const name = fullName('Elias', 'Garcia');

  console.log(name);
})();
