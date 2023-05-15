<?php

/**
 * Plugin Name:       Cover Letter Generator
 * Plugin URI:        https://www.jumpcoast.com/
 * Description:       A cover letter Generator for Namebounce.
 * Version:           1.0.0
 * Requires at least: 5.9
 * Requires PHP:      7.2
 * Author:            Gabriel Coronado
 * Author URI:        https://gabecode.com
 * Text Domain:       nb-clg
 * Domain Path:       /languages
 */

if (!function_exists('add_action')) {
    echo 'Seems like you stumbled here by accident. 😛';
    exit;
}

// Setup
define('NB_CLG_DIR', plugin_dir_path(__FILE__));
define('NB_CLG_URI', plugin_dir_url(__FILE__));

// Include 
$rootFiles = glob(NB_CLG_DIR . 'includes/*.php');
$subDirectoryFiles = glob(NB_CLG_DIR . 'includes/**/*.php');
$allFiles = array_merge($rootFiles, $subDirectoryFiles);

foreach ($allFiles as $filename) {
    include_once($filename);
}

// Hooks
add_action('wp_enqueue_scripts', 'nb_clg_enqueue_scripts');
add_shortcode('nb-cover-letter-generator', 'nb_cover_letter_gen_cb');
