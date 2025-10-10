export const getYaoTypeName = (yaoType: string): string => {
  const names = {
    old_yin: '老阴',
    young_yang: '少阳',
    young_yin: '少阴',
    old_yang: '老阳',
  };
  return names[yaoType as keyof typeof names] || yaoType;
};
