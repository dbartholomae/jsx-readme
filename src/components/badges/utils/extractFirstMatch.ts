export function extractFirstMatch(
  str: string,
  extractionRegexes: RegExp[]
): Record<string, string> | undefined {
  const extractions = extractionRegexes.map((regex) => regex.exec(str));
  const regexResult = extractions.filter(isNotNull)[0];
  return regexResult?.groups;
}

const isNotNull = (val: unknown) => val !== null;
