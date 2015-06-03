<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

$app->get('/', ['uses' => 'App\Http\Controllers\HomeController@index']);
$app->get('highscore', ['uses' => 'App\Http\Controllers\HomeController@getHighscore']);
$app->post('highscore', ['uses' => 'App\Http\Controllers\HomeController@storeHighscore']);
