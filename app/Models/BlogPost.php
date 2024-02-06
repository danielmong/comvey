<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class BlogPost extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'user_id',
        'author_id',
        'blog_post_category_id',
        'title',
        'slug',
        'body',
        'is_published',
        'published_at',
    ];

    protected static function booted()
    {
        static::creating(function ($blogPost) {
            $blogPost->user_id = auth()->user()->id;
        });
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function blogPostCategory(): BelongsTo
    {
        return $this->belongsTo(BlogPostCategory::class);
    }
}
