import { useAuth } from '@workos-inc/authkit-react';
import { UserSecurity, WorkOsWidgets } from '@workos-inc/widgets';

export function SecurityWidget() {
  const { isLoading, user, getAccessToken } = useAuth();
  if (isLoading) {
    return '...';
  }
  if (!user) {
    return 'Logged in user is required';
  }

  return (
    <WorkOsWidgets>
      <UserSecurity authToken={getAccessToken} />
    </WorkOsWidgets>
  );
}