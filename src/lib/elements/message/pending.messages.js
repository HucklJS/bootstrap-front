import React from 'react';
import styled from 'styled-components';
import { TextSecondary } from '../text';


export function PendingMessage(props) {
  const {
    isPending,
    pendingMessageTId
  } = props;

  return (
    isPending &&
    <Pending>
      <TextSecondary tid={pendingMessageTId}/>
    </Pending>
  );
}

const Pending = styled.div`
`;