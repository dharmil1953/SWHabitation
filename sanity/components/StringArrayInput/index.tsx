import { Box, Button, Flex, Stack, TextInput } from '@sanity/ui'
import { ArrayOfObjectsInputProps, PatchEvent, setIfMissing, insert } from 'sanity'
import { useCallback, useState } from 'react'
import { AddIcon } from '@sanity/icons'

export function StringArrayInput(props: ArrayOfObjectsInputProps) {
  const { onChange, value, } = props
  const [textValue, setTextValue] = useState('')
  // When a department button is clicked
  const handleClick = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      const newItems = textValue
        .split(',')
        .map((item) => item.trim())
        .filter((i) => !(value as unknown as string[])?.find((v) => v.trim() === i) && i.length > 0)
      const patches = insert(newItems, 'after', [-1])
      const patchFrom = PatchEvent.from(patches).prepend(setIfMissing([]))

      onChange(patchFrom)
      setTextValue('')
    },
    [onChange, textValue, value],
  )
  const isButtonDisabled =
    textValue.trim().length === 0 ||
    textValue
      .split(',')
      .map((item) => item.trim())
      .filter((i) => !(value as unknown as string[])?.find((v) => v.trim() === i)).length < 1

  return (
    <Stack space={3}>
      <Flex align="center">
        <Box flex={1} paddingRight={2}>
          <TextInput
            fontSize={0.05}
            onChange={(e) => {
              setTextValue(e.currentTarget.value ?? '')
            }}
            value={textValue}
            placeholder='Enter comma separated values (e.g. "article,blog")'
          />
        </Box>
        <Button
          onClick={handleClick}
          icon={AddIcon}
          style={{ cursor: 'pointer' }}
          mode="ghost"
          text="Add"
          disabled={isButtonDisabled}
        />
      </Flex>
      {props.renderDefault({ ...props, arrayFunctions: () => null })}
    </Stack>
  )
}
