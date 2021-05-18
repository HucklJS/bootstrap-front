import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { TextSecondary } from '../text';
import { spacing } from '../../theme';

export function SignUpLink(props) {
  return (
    <Link href="/signup">
      <ToSignUpLink>
        <Title tid={props.tid}/>
      </ToSignUpLink>
    </Link>
  )
}

const ToSignUpLink = styled.a`
  cursor: pointer;
`;

const Title = styled(TextSecondary)`
  margin-top: ${spacing(1)};
`;