import React from 'react';
import Link from 'next/link'
import styled from 'styled-components';

import { text } from '../../../../lib/common/text';

export function LoginFooterComponent(props) {
  return (
    <div>
      <Link href="/signup">
        <ToSignUpLink>
          {text(props.tid)}
        </ToSignUpLink>
      </Link>
    </div>
  );
}

const ToSignUpLink = styled.a`
  cursor: pointer;
`;