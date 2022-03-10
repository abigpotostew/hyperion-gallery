export const formatAccount = (account: string | undefined): string => {
  if (!account || account.length <= 15) return 'stars...';
  return account.slice(0, 13) + '...' + account.slice(-6);
}