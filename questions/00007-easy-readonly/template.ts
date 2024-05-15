// 没有想到可以直接使用 readonly
type MyReadonly<T> = { readonly [key in keyof T]: T[key] }
