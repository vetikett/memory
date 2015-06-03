<?php
namespace App;
use Illuminate\Database\Eloquent\Model;


class Highscore extends Model
{

    protected $fillable = [
        'id',
        'highscore',
        'user_id'
    ];

    public function scopeBestScore($query)
    {
        return $query->orderBy('highscore','ASC')->first()->pluck('highscore');
    }
}