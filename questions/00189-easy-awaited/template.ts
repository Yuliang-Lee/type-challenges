type MyAwaited<T extends Promise<any> | object & { then(onfulfilled: (args: any) => any): any }> = T extends Promise<infer R> ? R extends Promise<any> ?
  MyAwaited<R> : R
  : T extends object & { then(onfulfilled: (args: infer F) => any): any } ? F : T
