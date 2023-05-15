<?php

function nb_clg_enqueue_scripts()
{

    /* CSS FILES */
    wp_enqueue_style('nb-clg-style', NB_CLG_URI . 'assets/css/nb-clg-style.css', [], null, 'all');

    /* JS FILES */
    wp_enqueue_script('html2pdf', 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js', [], null, true);
    wp_enqueue_script('nb-glgen-script', NB_CLG_URI . 'assets/js/nb-clg-app.js', ['html2pdf'], null, true);
}
