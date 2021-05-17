import React from 'react';

import {TextSecondary} from '../text'
import {spacing, THEME_COLOR, THEME_SIZE} from '../../theme'
import {FieldPrimaryPropsType} from './field.type'

import {text} from '../../common/text'
import styled from 'styled-components';

export function FieldPrimary(props: FieldPrimaryPropsType) {
  const {
    titleTid,
    onChange,
    onBlur,
    value,
    name,
    placeholderTid,
    error,
    type
  } = props;

  return (
    <Container>
      <Title tid={titleTid}/>
      <Input
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={text(value)}
        name={name}
        placeholder={text(placeholderTid)}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  )
}

const Title = styled(TextSecondary)`
  margin-bottom: ${spacing(1)};
`;

const Input = styled.input`
  background: ${THEME_COLOR.INPUT_BACKGROUND};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  padding: ${spacing(1.25)} ${spacing(2.5)};
`;

const Container: React.FC = styled.div`
  display: flex;
  flex-direction: column;
`;

const ErrorMessage = styled.span`
  color: ${THEME_COLOR.ERROR};
  font-size: ${THEME_SIZE.FONT.SMALL};
`;