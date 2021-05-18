import React from 'react';
import { text } from '../../../../lib/common/text';

export function LoginHeaderComponent(props) {
  return (
    <div>{text(props.tid)}</div>
  );
}