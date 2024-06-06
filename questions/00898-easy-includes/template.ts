// type Includes<T extends readonly any[], U> = NoInfer<U> extends NoInfer<T[number]> ? true : false

type Includes<T extends readonly any[], U> = {
  [P in T[number]]: true
}[U] extends true ? true : false
