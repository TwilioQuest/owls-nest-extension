<%
const worldState = levelState['com.twilioquest.owls_nest'];
%>

# ハッキングインターフェイスの使い方

<div class="aside">
<h3>To-Doリスト</h3>
<ul>
  <li>この部屋の台座からハッキングツールを手に入れます。</li>
  <li>［Objective］タブ（この画面）で秘密のパスコードを確認します。</li>
  <li>右側のフィールドにパスコードを入力し、［<em>HACK</em>］をクリックします。</li>
</ul>
</div>
TwilioQuestの世界には、このターミナルのような**ハッキング可能なオブジェクト**がたくさんあります。TwilioQuestプログラムにより開発された最先端のハッキングツールを使用して、技術的課題（と技術的ではない課題）を達成することにより、こうしたオブジェクトをハッキングできます。質問に回答する、コンピューター上でファイルにコードを記述するといった課題があります。

この課題を達成するには、**この部屋の台座にあるハッキングデバイスを手に入れる**必要があります。そうすれば、レーザーバリアを解除するためのパスコードが下のボックスに表示されます。このパスコードを右側のテキストフィールドに入力し、［*HACK*］をクリックすると、レーザーバリアが解除されます。

<style>
.passcode {
  color: #eee;
  padding: 10px;
  text-align: center;
}

.passcode h3 {
  font-size: 1.5em;
  border-bottom: none;
  padding: 0;
  margin: 0 0 10px 0;
  font-weight: bold;
  text-transform: uppercase;
}

.passcode p {
  margin: 0 0 5px 0;
  padding: 0;
}

.passcode-locked {
  border: 5px solid #8B0000;
  background-color: #DC143C;
}

.passcode-open {
  border: 5px solid #8FBC8F;
  background-color: #7FFF00;
  color: #232323;
}
</style>
<% if (worldState.hackingToolAcquired) { %>

<div class="passcode passcode-open">
<h3>パスコード: 利用可能</h3>
<p>
レーザーを解除するためのコード: <b>LEVEL UP</b>
</p>
<p>
<i>このコードを右側のテキストフィールドに入力し、［HACK］をクリックしてください。</i>
</p>
</div>
<% } else { %>
<div class="passcode passcode-locked">
<h3>パスコード: ロック状態</h3>
<p>
このシステムを回避し、パスコードを表示するには、ハッキングツールが必要です。<b>ツールはこの部屋の台座の上に
あります</b>。
</p>
</div>
<% } %>
