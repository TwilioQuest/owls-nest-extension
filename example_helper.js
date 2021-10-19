// これは、客観的な検証ヘルパーをどのように使用するかの一例です。
// 必ずしも使わなければならないわけではありませんが、使いたくなることも多いでしょう。
function isTwilio(testString = '') {
  return testString.toLowerCase() === 'twilio';
}

module.exports = {
  isTwilio
};
