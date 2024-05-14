type MyPick<T, K extends Partial<keyof T>> = {[key in K]: T[key]}
