
function createRange (start, end) {
  if (
    !Number.isInteger(start) ||
    !Number.isInteger(end)
  ) {
    return [];
  }
  return Array.from(
    {length: end - start + 1},
    (_, key) => key + start
  );
}

module.exports = createRange;
