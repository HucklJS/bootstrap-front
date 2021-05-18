import React from 'react';
import styled from 'styled-components'
import { text } from '../../common/text';
import { THEME_COLOR, THEME_SIZE } from '../../theme';


export const SubmitButton = props => {
  return (
    <Button {...props}>
      {text(props.children)}
    </Button>
  );
};

const Button = styled.button`
  background: ${THEME_COLOR.SUBMIT_BUTTON_BACKGROUND};
  border-radius: ${THEME_SIZE.RADIUS.BIG};
`;