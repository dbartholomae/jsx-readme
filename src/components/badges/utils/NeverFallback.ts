export type NeverFallback<Type, Fallback> = [Type] extends [never]
  ? Fallback
  : Type;
