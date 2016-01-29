process.stdout.write(
  'module.exports = "' +
    require('fs')
      .readFileSync('/dev/stdin')
      .toString()
      .replace(/[\\"']/g, '\\$&')
      .replace(/\u0000/g, '\\0')
      .replace(/\n/g, '\\n') +
  '"\n')
