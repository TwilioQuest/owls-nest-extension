module.exports = async function (helper) {
  // まず、ヘルパーからユーザーの入力を得ることから始める。
  const passcode = helper.getNormalizedInput('passcode');
  const worldState = helper.context.levelState['com.twilioquest.owls_nest'];

  if (!worldState.hackingToolAcquired) {
    return helper.fail(`
      このシステムをバイパスするには、<strong>ハッキングツール</strong>が必要です。この部屋の台座まで歩き、スペースキーを押してハッキングツールを入手する。
    `);
  }

  if (!passcode) {
    return helper.fail('バ〜ズ！レーザーオーバーライドのパスコードが必要です。');
  }

  if (passcode !== 'level up') {
    return helper.fail(`
      パスコードが認識されません。ハックインターフェースの「Objective」タブを読んで、正しいパスコードを確認してください。
    `);
  }

  // 私たちがバリデータを書くときによく使う方法は、早く失敗して、
  // 最後までたどり着けば、ユーザーがすべての答えを正解したことになるというものです。
  helper.success(`
    レーザーを回避するためのパスコードを入力する。すぐにレーザーが引っ込んで、Fog Owlへの道が開ける。
  `);
};
