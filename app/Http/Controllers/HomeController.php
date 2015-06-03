<?php

namespace App\Http\Controllers;


use App\Highscore;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function storeHighscore(Request $request)
    {

        $highscore = json_decode($request->input('highscore'));
        Highscore::create([
            'highscore' => $highscore,
            'user_id' => 1
        ]);

        return $highscore;
    }

    public function getHighscore()
    {
        $highscore = Highscore::bestScore();

        return ['highscore' => $highscore];
    }
}