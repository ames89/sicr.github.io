export const joinClasses = (
  ...classNames: Array<string | undefined>
): string => {
  return classNames.filter((cn) => cn).join(" ");
};
