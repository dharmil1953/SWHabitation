import React from 'react'
import {BlockDecoratorProps} from 'sanity'

const SectionHeading = (props: BlockDecoratorProps) => (
  <h2 style={{background: 'gray'}}>{props.children}</h2>
)

export default SectionHeading
