<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use App\Models\Codepen;
use App\Models\UsageLimit;
use App\Models\Product;

class CodepenController extends Controller
{
    public function home()
    {
        if (auth()->check()) {
            return redirect()->route('codepen.list');
        } else {
            $codepens = Codepen::inRandomOrder()->take(20)->get();
            return view('home', compact("codepens"));
        }
    }

    public function list()
    {
        $codepens = Codepen::paginate(10);

        return view('/codepen/list', compact('codepens'));
    }

    public function create()
    {
        return view('/codepen/create');
    }

    public function save(Request $request)
    {
        $usage = UsageLimit::where('user_id', auth()->id())->first();
        if($usage && $usage->current_usage >= 5) {
            return response()->json(['message' => 'exceed']);
        }
        $codepen = new Codepen;

        $codepen->user_id = auth()->id();
        $codepen->title = $request->title;
        $codepen->description = $request->description;
        $codepen->content_html = $request->content_html;
        $codepen->content_css = $request->content_css;
        $codepen->content_js = $request->content_js;
        $codepen->status = $request->status ?: 'public';

        $codepen->save();

        if($usage) {
            $usage->current_usage = $usage->current_usage + 1;
            $usage->save();
        } else {
            $product = Product::where('name', 'Codepen')->first();
            if(!$product) {
                $product = new Product;
                $product->name = 'Codepen';
                $product->slug = 'Codepen';
                $product->is_popular = 1;
                $product->is_default = 1;
                $product->save();
            }
            $usage = new UsageLimit;
            $usage->product_id = $product->id;
            $usage->user_id = auth()->id();
            $usage->current_usage = 1;
            $usage->save();
        }

        return response()->json(['message' => 'success', 'id' => $codepen->id]);
    }

    public function edit($id)
    {
        $codepen = Codepen::find($id);
        return view('/codepen/edit', compact('codepen'));
    }

    public function update(Request $request, $id)
    {
        $codepen = Codepen::find($id);

        if ($request->title) {
            $codepen->title = $request->title;
        }
        if ($request->description) {
            $codepen->description = $request->description;
        }
        if ($request->content_html) {
            $codepen->content_html = $request->content_html;
        }
        if ($request->content_css) {
            $codepen->content_css = $request->content_css;
        }
        if ($request->content_js) {
            $codepen->content_js = $request->content_js;
        }
        if ($request->status) {
            $codepen->status = $request->status;
        }

        $codepen->save();

        return response()->json(['message' => 'success']);
    }

    public function delete($id)
    {
        $codepen = Codepen::findOrfail($id);

        $codepen->delete();

        return response()->json(['message' => 'success']);
    }

    public function preview($id)
    {
        $codepen = Codepen::find($id);

        return response()->json(['message' => 'success', 'content_html' => $codepen->content_html, 'content_css' => $codepen->content_css, 'content_js' => $codepen->content_js]);
    }

    public function welcome()
    {

        if (auth()->check()) {
            return redirect()->route('Codepen');
        } else {
            $randomRows = Codepen::inRandomOrder()->take(20)->get();
            return view('welcome', compact("randomRows"));
        }
    }
}
