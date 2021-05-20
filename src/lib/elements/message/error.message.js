import React from 'react';
import styled from 'styled-components';
import { THEME_COLOR } from '../../theme';
import { text } from '../../common/text';


export function ErrorMessage(props) {
  const {
    isError,
    errorMessage
  } = props;

  return (
    isError &&
    <Error>
      {/*?????*/}
      {text(errorMessage)}
    </Error>
  );
}

const Error = styled.div`
  color: ${THEME_COLOR.ERROR};
`;