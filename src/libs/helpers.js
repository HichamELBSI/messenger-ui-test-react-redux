// @flow
// Simulate the authorization to see a private message

const cantAccessMessage =
  "Ce message est privé, vous ne pouvez pas le voir en tant que simple utilisateur.";

const canAccessMessage = (hasRights: boolean, message: string): string =>
  hasRights ? message : cantAccessMessage;

export { canAccessMessage, cantAccessMessage };
