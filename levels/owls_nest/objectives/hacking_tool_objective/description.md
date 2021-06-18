<%
const worldState = levelState['com.twilioquest.owls_nest'];
%>

# Learning the Hack Interface

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Get the hacking tool from the pedestal in this room.</li>
  <li>Find the secret passcode in the "Objective" tab (this screen).</li>
  <li>Enter the passcode in the field on the right, then click <em>HACK</em>.</li>
</ul>
</div>

The world of TwilioQuest is full of **hackable objects** like this terminal. Using the cutting edge hacking tool developed by the TwilioQuest program, you will be able to hack these objects by completing technical (and non-technical) challenges. These challenges could involve answering questions, writing code in a file on your computer, and much more.

To complete this challenge, you must **acquire the hacking device found on the pedestal in this room**. The passcode required to bypass the laser barrier will then appear in the box below. Type the passcode into the text field on the right and click *HACK* to bring down the laser barrier.

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
<h3>PASSCODE AVAILABLE</h3>
<p>
Laser bypass code is: <b>LEVEL UP</b>
</p>
<p>
<i>Enter this code in the text field on the right and click "HACK".</i>
</p>
</div>
<% } else { %>
<div class="passcode passcode-locked">
<h3>PASSCODE LOCKED</h3>
<p>
The hacking tool is required to bypass this system and see the passcode. <b>Find it on the pedestal in
this room</b>.
</p>
</div>
<% } %>
