import React from 'react';
import {LoginContainer} from './login.container'
import { ContentLayout, PageLayout, LoginLayout } from '../../lib/elements/layout';

export function LoginPage() {
  return <ContentLayout>
    <PageLayout>
      <LoginLayout>
        <LoginContainer/>
      </LoginLayout>
    </PageLayout>
  </ContentLayout>;
}