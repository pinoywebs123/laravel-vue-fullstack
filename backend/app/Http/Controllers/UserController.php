<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    
    public function getAllUsers()
    {
    	$users = User::all();

    	return response()->json($users);
    }
    public function deleteUser(Request $request)
    {
    	$listOfUsers = $request->all();
    	$deletedUser = [];
    	foreach ($listOfUsers as $key => $user) {
    		$find = User::find($user['id']);
    		if($find)
    		{
    			$find->delete();
    			array_push($deletedUser,$find->id);
    		}
    	}
    	return response()->json($deletedUser);
    }
}
