import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { Heart, MessageCircle, Share2, Image as ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Post, CharityUser } from '../types/charity';
import { mockPosts } from '../lib/charity-data';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CommunityFeedProps {
  currentUser: CharityUser;
}

export function CommunityFeed({ currentUser }: CommunityFeedProps) {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [newPostContent, setNewPostContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'health' | 'social' | 'environment'>('health');

  const handleCreatePost = () => {
    if (!newPostContent.trim()) return;

    const newPost: Post = {
      id: `post-${Date.now()}`,
      userId: currentUser.id,
      userName: currentUser.name,
      content: newPostContent,
      category: selectedCategory,
      likes: 0,
      createdAt: new Date(),
    };

    setPosts([newPost, ...posts]);
    setNewPostContent('');
  };

  const handleLike = (postId: string) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'health':
        return 'bg-red-100 text-red-700';
      case 'social':
        return 'bg-blue-100 text-blue-700';
      case 'environment':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'health':
        return 'الصحة';
      case 'social':
        return 'اجتماعي';
      case 'environment':
        return 'البيئة';
      default:
        return category;
    }
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'اليوم';
    if (days === 1) return 'أمس';
    if (days < 7) return `منذ ${days} أيام`;
    return date.toLocaleDateString('ar');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-8 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl mb-2 text-gray-900">موجز المجتمع</h1>
          <p className="text-gray-600">شارك تأثيرك وألهم الآخرين</p>
        </motion.div>

        {/* Create Post Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="mb-8 border-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div>
                  <p className="text-gray-900">{currentUser.name}</p>
                  <p className="text-sm text-gray-500">شارك قصتك</p>
                </div>
                <Avatar>
                  <AvatarFallback className="bg-green-100 text-green-700">
                    {currentUser.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>

              <Textarea
                placeholder="ما التغيير الإيجابي الذي أحدثته اليوم؟"
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                className="min-h-[100px] resize-none text-right"
              />

              <div className="flex items-center justify-between mt-4">
                <Button
                  onClick={handleCreatePost}
                  disabled={!newPostContent.trim()}
                  className="bg-green-600 hover:bg-green-700"
                >
                  نشر
                </Button>
                <div className="flex gap-2">
                  {(['health', 'social', 'environment'] as const).map((category) => (
                    <Badge
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'outline'}
                      className={`cursor-pointer ${selectedCategory === category ? getCategoryColor(category) : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {getCategoryLabel(category)}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Badge className={getCategoryColor(post.category)}>
                      {getCategoryLabel(post.category)}
                    </Badge>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-gray-900">{post.userName}</p>
                        <p className="text-sm text-gray-500">{formatDate(post.createdAt)}</p>
                      </div>
                      <Avatar>
                        <AvatarFallback className="bg-blue-100 text-blue-700">
                          {post.userName.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 whitespace-pre-wrap text-right">{post.content}</p>
                  
                  {post.imageUrl && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={post.imageUrl}
                        alt="صورة المنشور"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-6 pt-4 border-t">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(post.id)}
                      className="gap-2 text-gray-600 hover:text-red-600"
                    >
                      <span>{post.likes}</span>
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2 text-gray-600 hover:text-blue-600">
                      <span>تعليق</span>
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2 text-gray-600 hover:text-green-600">
                      <span>مشاركة</span>
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
