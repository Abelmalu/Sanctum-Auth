<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BlogController extends Controller
{
    public function index(){


        return Blog::all();
    }

    public function show($id)
    {

        return Blog::find($id);
    }


    public function store(Request $request)
    {


        $validator = Validator::make($request->all(), [
            'category_id' => 'exists:\App\Models\Category,id|integer|required',
            'title' => 'required|string',
            'body' => 'required|string',
            'image' => 'nullable|file|mimes:jpeg,png,jpg'

        ]);



        if ($validator->fails()) {

            return $validator->errors();
        } else {
            $imageUpload = $request->file('image')->store('blogs', 'public');
            $task = new Blog();
            $task->category_id = $request->get('category_id');
            $task->title = $request->get('title');
            $task->body = $request->get('body');
            $task->image = ($request->file('image'))  ? $imageUpload : '';


            $result = $task->save();
            if ($result) {
                return ['success' => "task successfully saved"];
            } else {

                return ['error' => "not saved to the db"];
            }

    }
}



    public function update(Request $request,  $id)
    {
        $validator = Validator::make($request->all(), [
            'category_id' => 'exists:\App\Models\Category,id|integer|nullable',
            'title' => 'required|string|nullable',
            'body' => 'required|string|nullable',
            'image' => 'file|nullable|mimes:jpeg,png,jpg|'

        ]);

        if ($validator->fails()) {

            return $validator->errors();
        } else {


            $blog = Blog::find($id);
            // return $blog;
            $imageUpload = $request->file('image')->store('blogs', 'public');



            // $blog->update([
            //     'category_id' => ($request->get('category_id')) ? $request->get('category_id') : $blog->category_id,
            //     'title' => ($request->get('title')) ? $request->get('title') : $blog->title,
            //     'body' => ($request->get('body')) ? $request->get('body') : $blog->body,
            //     'image' => ($request->file('image'))  ?$imageUpload : $blog->image
            // ]);

            $blog->category_id =($request->get('category_id')) ? $request->get('category_id') : $blog->category_id;
            $blog->title = ($request->get('title')) ? $request->get('title') : $blog->title;
            $blog->body =($request->get('body')) ? $request->get('body') : $blog->body;
            $blog->image = ($request->file('image'))  ? $imageUpload : $blog->image;

            // $flag ='hellow';

            // if ($flag) {

            //     return $blog;
            // } else {

            //     return 'something went wrong couldn not update ';
            // }

            return 'succesfully Updated!';




        }


    }


    public function destroy($id)
    {

        $blog = Blog::find($id);

        $flag = $blog->delete();

        if ($flag) {

            return 'blog successfuly deleted';
        } else {

            return 'could not delete the blog';
        }
    }


}
