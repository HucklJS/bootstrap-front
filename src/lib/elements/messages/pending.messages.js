import React from 'react';
import styled from 'styled-components';
import { THEME_COLOR } from '../../theme';
import { text } from '../../common/text';


export function PendingMessage(props) {
  const {
    isPending,
    pendingMessage
  } = props;

  return (
    isPending &&
    <Pending>
      {text(pendingMessage)}
    </Pending>
  );
}

const Pending = styled.div`
`;