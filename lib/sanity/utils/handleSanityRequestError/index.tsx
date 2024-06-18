type HandleSanityRequestErrorParams = {
  error: Error
  mockData?: unknown
}

export const handleSanityRequestError = ({
  error,
  mockData = undefined,
}: HandleSanityRequestErrorParams) => {
  const errorMessage = error?.message
    ? error?.message
    : 'Unknown error of Sanity client'

  if (mockData) {
    return mockData
  }

  console.log(errorMessage)
}
