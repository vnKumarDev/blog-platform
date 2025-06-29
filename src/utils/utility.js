export const formatTimestamp = (timestamp, showTime) => {
  const date = new Date(timestamp);

  return date.toLocaleString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
    ...(showTime && {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }),
  });
};
