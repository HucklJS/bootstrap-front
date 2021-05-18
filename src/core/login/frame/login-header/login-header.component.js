import React from 'react';
import styled from 'styled-components';
import { TextSecondary } from '../../../../lib/elements/text';
import { spacing } from '../../../../lib/theme';

export function LoginHeaderComponent(props) {
  return (
    <Title tid={props.tid}/>
  );
}

const Title = styled(TextSecondary)`
  margin-bottom: ${spacing(1)};
`;