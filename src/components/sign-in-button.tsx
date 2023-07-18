'use client';

import type { FC } from 'react';
import { SignInButton, SignOutButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs';

const SignIn: FC = async () => {
  const user = await currentUser();

  return <div>{!user ? <SignInButton /> : <SignOutButton />}</div>;
};

export default SignIn;
