import React from 'react';
import styled from 'styled-components'
import { THEME_COLOR, THEME_SIZE } from '../../theme';
import { TextSecondary } from '../text';


export const SubmitButton = props => {
  return (
    <Button {...props}>
      <Title tid={props.titleTid}/>
    </Button>
  );
};

const Button = styled.button`
  background: ${THEME_COLOR.SUBMIT_BUTTON_BACKGROUND};
  border-radius: ${THEME_SIZE.RADIUS.BIG};
`;

const Title = styled(TextSecondary)``;