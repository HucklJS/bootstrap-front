import React from 'react';
import Link from 'next/link'
import styled from 'styled-components';

import { TextSecondary } from '../../../../lib/elements/text';
import { spacing } from '../../../../lib/theme';

export function LoginFooterComponent(props) {
  return (
    <div>
      <Link href="/signup">
        <ToSignUpLink>
          <Title tid={props.tid}/>
        </ToSignUpLink>
      </Link>
    </div>
  );
}

const ToSignUpLink = styled.a`
  cursor: pointer;
`;

const Title = styled(TextSecondary)`
  margin-top: ${spacing(1)};
`;