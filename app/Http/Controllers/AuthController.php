<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request){



        $validator = Validator::make($request->all(),[

            'name' => 'required|max:255',
            'email' => 'unique:users|email|required',
            'password' => 'required|confirmed'


        ]);

        if($validator->fails()){

            return $validator->errors();
        }

        else{



            $user = new User([
                'name' => $request->get('name'),
                'email' => $request->get('email'),
                'password' => Hash::make($request->get('password'))


            ]);

            $user->save();


            $token = $user->createToken($request->name);



            return [
                'user' => $user,
                'token' => $token->plainTextToken


            ];

        }



    }
    public function login(Request $request){

        Validator::make($request->all(),[

            'email'=>'required|email|exists:users',
            'password'=>'required'

        ]);



        $user = User::where('email',$request->email)->first();

        if(!$user || !Hash::check($request->password,$user->password)){

            return ['message'=>'The provided credentials are incorrect'];




        }

        $token = $user->createToken($user->name);



        return [
            'user' => $user,
            'token' => $token->plainTextToken


        ];




    }


    public function logout(Request $request) {




    $request->user()->tokens()->delete();

     return ['message'=>'You are logged Out'];
}
}
