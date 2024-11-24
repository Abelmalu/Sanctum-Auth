<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;




Route::get('/blogs',[BlogController::class,'index']);
Route::post('/add/blog',[BlogController::class,'store']);
Route::get('/blog/{id}',[BlogController::class,'show'])->middleware('auth:sanctum');
Route::put('/update/blog/{id}',[BlogController::class,'update'])->middleware('auth:sanctum');
Route::delete('/delete/blog/{id}',[BlogController::class,'destroy'])->middleware('auth:sanctum');
Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);
Route::post('/logout',[AuthController::class, 'logout'])->middleware('auth:sanctum');
