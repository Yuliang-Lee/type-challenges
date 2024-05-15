// 看答案的
type TupleToObject<T extends readonly PropertyKey[]> = { [key in T[number]]: key }
