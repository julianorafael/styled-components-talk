import React from 'react'
import styled from 'styled-components'

const Button = styled.TouchableOpacity`
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  background: ${props => (props.primary ? 'palevioletred' : 'white')};
`

const Text = styled.Text`
  font-size: 1em;
  color: ${props => props.primary ? 'white' : 'palevioletred'};
`

export default ({ children, ...props }) => (
  <Button {...props}>
    <Text primary={props.primary}>{children}</Text>
  </Button>
)
