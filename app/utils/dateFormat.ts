export const formatDateStable = (dateString: string): string => {
  // Return a stable date format that doesn't change between server and client
  const [year, month, day] = dateString.split('-');
  return `${year}.${month}.${day}`;
};

export const formatDateKorean = (dateString: string): string => {
  // Return Korean format without using Date object to avoid hydration issues
  const [year, month, day] = dateString.split('-');
  return `${year}년 ${parseInt(month)}월 ${parseInt(day)}일`;
};