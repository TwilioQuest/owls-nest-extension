<%
const worldState = levelState['com.twilioquest.owls_nest'];
%>

# ハックインターフェースの習得

<div class="aside">
<h3>やることリスト</h3>
<ul>
  <li>この部屋の台座からハッキングツールを入手する。</li>
  <li>この画面のObjectiveタブで秘密のパスコードを見つける。</li>
  <li>右側のフィールドにパスコードを入力し、<em>HACK</em>をクリックする。</li>
</ul>
</div>

TwilioQuestの世界には、この端末のような**ハッキング可能なオブジェクト**がたくさんある。TwilioQuestプログラムが開発した最先端のハッキングツールを使って、技術的なかどうか課題をクリアすることで、これらのオブジェクトをハッキングすることができる。これらの課題には、質問に答えたり、コンピュータ上のファイルにコードを書いたりするものなどがある。

この課題をクリアするには、**この部屋の台座にあるハッキングデバイスを手に入れる必要がある**。レーザーバリアーを回避するためのパスコードが下のボックスに表示される。右側のテキストフィールドにパスコードを入力し、*HACK*をクリックすると、レーザーバリアーが倒される。

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
<h3>パスコード利用可能</h3>
<p>
レーザーのバイパスコードは： <b>LEVEL UP</b>
</p>
<p>
<i>このコードを右のテキストフィールドに入力し、「HACK」をクリックする。</i>
</p>
</div>
<% } else { %>
<div class="passcode passcode-locked">
<h3>パスコードロックされている</h3>
<p>
このシステムを迂回してパスコードを見るには、ハッキングツールが必要です。<b>この部屋の台座の上に置いてある。</b>.
</p>
</div>
<% } %>
