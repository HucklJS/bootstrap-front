import React from 'react';
import styled from 'styled-components'
import { text } from '../../common/text';


export const SubmitButton = props => {
  return (
    <Button {...props}>
      {text(props.children)}
    </Button>
  );
};

const Button = styled.button`
  background: #ddd;
  border-radius: 15px;
`;