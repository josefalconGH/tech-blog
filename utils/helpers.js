module.exports = {
  format_date: (date) => {
    return date.toLocaleDateString();
  },
  format_author_timestamp: (author, timestamp) => {
    return `${author.username} - ${timestamp.toLocaleDateString()}`;
  },
};
