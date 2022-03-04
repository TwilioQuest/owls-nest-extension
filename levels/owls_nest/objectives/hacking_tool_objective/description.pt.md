<%
const worldState = levelState['com.twilioquest.owls_nest'];
%>

# Aprender a interface Hack

<div class="aside">
<h3>Lista de tarefas</h3>
<ul>
  <li>Obtenha a ferramenta de hacking do pedestal nesta sala.</li>
  <li>Localize a senha secreta na guia "Objetivo" (esta tela).</li>
  <li>Digite a senha no campo à direita e clique em <em>HACK</em>.</li>
</ul>
</div>
O mundo do TwilioQuest está cheio de **objetos hackable** como este terminal. Usando a ferramenta de hacking de última geração desenvolvida pelo programa TwilioQuest, você poderá hack esses objetos completando desafios técnicos (e não técnicos). Esses desafios podem envolver responder perguntas, escrever códigos em um arquivo no seu computador e muito mais.

Para concluir este desafio, você deve **adquirir o dispositivo de hacking encontrado no pedestal desta sala**. A senha necessária para contornar a barreira do laser aparecerá na caixa abaixo. Digite a senha no campo de texto à direita e clique em *HACK* para derrubar a barreira de laser.

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
<h3>SENHA DISPONÍVEL</h3>
<p>
O código de desvio do laser é: <b>LEVEL UP</b>
</p>
<p>
<i>Digite esse código no campo de texto à direita e clique em "HACK".</i>
</p>
</div>
<% } else { %>
<div class="passcode passcode-locked">
<h3>SENHA BLOQUEADA</h3>
<p>
A ferramenta de hackeamento é necessária para derrubar este sistema e ver a senha. <b>Encontre-a no pedestal
nesta sala</b>.
</p>
</div>
<% } %>
