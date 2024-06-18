
import { readToken } from '../../config'
import { getClient } from '../getClient'

export type MakeGroqQueryParamValue = {
  isReference?: boolean
  as?: string
  fetchAllFields?: boolean
  children?: MakeGroqQueryParam
  isArray?: boolean
  filters?: string
}
export type MakeGroqQueryParam = {
  [key: string]: MakeGroqQueryParamValue
}
export type FetchSanityQuery = {
  groqQuery: string
  makeGroqQuery?: (p: MakeGroqQueryParam, filters?: string) => string
  handleError: (err: Error, mockData: unknown) => unknown
}
type FetchSanityQueryParams = { [key: string]: unknown }
type FetchSanityParams = {
  query: FetchSanityQuery
  queryParams?: FetchSanityQueryParams
  makeGroqQueryParams?: MakeGroqQueryParam
  makeGroqQueryFilters?: string
  mockData?: unknown
  isPreview?: boolean
  defaultQuery?: boolean
}
export const fetchDataFromSanity = async <T = unknown>({
  query,
  queryParams = {},
  makeGroqQueryParams = {},
  makeGroqQueryFilters,
  mockData,
  isPreview = false,
  defaultQuery = true,
}: FetchSanityParams): Promise<T> => {
  const { groqQuery, makeGroqQuery, handleError } = query
  const client = getClient(isPreview ? readToken : undefined)

  try {
    let clientGroqQuery = ''
    if (!defaultQuery && !!makeGroqQuery) {
      clientGroqQuery = makeGroqQuery(makeGroqQueryParams, makeGroqQueryFilters)
    } else if (groqQuery) {
      clientGroqQuery = groqQuery
    } else if (makeGroqQuery) {
      clientGroqQuery = makeGroqQuery(makeGroqQueryParams, makeGroqQueryFilters)
    } else {
      throw new Error('Please define "groqQuery" or "makeGroqQuery"')
    }
    const data = await client.fetch(clientGroqQuery, queryParams)
    return data
  } catch (error) {
    return handleError(error as Error, mockData) as T
  }
}
