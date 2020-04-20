<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'auth'], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::get('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});

Route::group(['prefix' => 'user'], function ($router) {
   Route::get('/', 'UserController@getAllUsers');
   Route::post('/delete', 'UserController@deleteUser');
   Route::get('/books', 'UserController@books');
});