<?php

function nb_cover_letter_gen_cb()
{
    ob_start(); ?>

    <div class="nb-clg__container">
        <h1>Cover Letter Generator</h1>

        <label for="companyName">Company Name:</label>
        <input type="text" id="companyName" placeholder="Company Name:">
        <br><br>

        <label for="positionTitle">Position Title:</label>
        <input type="text" id="positionTitle" placeholder="Position Title:">
        <br><br>

        <label for="hiringManager">Hiring Manager:</label>
        <input type="text" id="hiringManager" placeholder="Hiring Manager:">
        <br><br>

        <button id="generate">Generate Cover Letter</button>
        <div id="coverLetter" style="display:none;"></div>

    </div>

<?php
    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}
