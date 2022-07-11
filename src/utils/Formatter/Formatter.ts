const formatStringTruncate = (str: string, num: number): string => {
  if (str.length <= num) {
    return str;
  }
  return `${str.slice(0, num)}...`;
};

export const Formatter = {
  truncate: formatStringTruncate,
};
