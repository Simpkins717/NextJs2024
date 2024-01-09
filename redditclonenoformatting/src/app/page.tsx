import { Button } from '@nextui-org/react';
import * as actions from '@/actions';
import { auth } from '@/auth';
import Profile from '@/components/profile';

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    return (
      <div>
        <form action={actions.signOut}>
          <Button type='submit'>Sign Out</Button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <Profile />
        <form action={actions.signIn}>
          <Button type='submit'>Sign In</Button>
        </form>
      </div>
    );
  }
}
