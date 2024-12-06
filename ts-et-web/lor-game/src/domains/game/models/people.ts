export interface Person {
    name: string
    height: number
}

export type ApiResult<T> = {
    results: T[]
}

export type PersonApiResult = ApiResult<Person>