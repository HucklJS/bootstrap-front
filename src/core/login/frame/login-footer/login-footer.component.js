import React from 'react';
import { SignUpLink } from '../../../../lib/elements/link';

export function LoginFooterComponent(props) {
  return (
    <div>
      <SignUpLink tid={props.tid}/>
    </div>
  );
}
