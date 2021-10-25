(() => {
  const fullName = (
    firstName: string,
    ...restoDeArgumentos: string[]
  ): string => {
    return `${firstName} ${restoDeArgumentos.join(' ')}`;
  };
})();
