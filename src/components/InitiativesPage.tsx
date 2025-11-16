import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Plus, Users, Target, Calendar, Heart, Leaf } from 'lucide-react';
import { motion } from 'motion/react';
import { Initiative, CharityUser } from '../types/charity';
import { mockInitiatives } from '../lib/charity-data';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface InitiativesPageProps {
  currentUser: CharityUser;
}

export function InitiativesPage({ currentUser }: InitiativesPageProps) {
  const [initiatives, setInitiatives] = useState<Initiative[]>(mockInitiatives);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newInitiative, setNewInitiative] = useState({
    title: '',
    description: '',
    category: 'health' as 'health' | 'social' | 'environment',
    goal: '',
  });

  const handleCreateInitiative = () => {
    if (!newInitiative.title || !newInitiative.description) return;

    const initiative: Initiative = {
      id: `init-${Date.now()}`,
      userId: currentUser.id,
      userName: currentUser.name,
      title: newInitiative.title,
      description: newInitiative.description,
      category: newInitiative.category,
      goal: newInitiative.goal,
      participants: 1,
      createdAt: new Date(),
      status: 'active',
    };

    setInitiatives([initiative, ...initiatives]);
    setNewInitiative({
      title: '',
      description: '',
      category: 'health',
      goal: '',
    });
    setIsDialogOpen(false);
  };

  const handleJoinInitiative = (id: string) => {
    setInitiatives(initiatives.map(init =>
      init.id === id ? { ...init, participants: init.participants + 1 } : init
    ));
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'health':
        return <Heart className="w-5 h-5" />;
      case 'social':
        return <Users className="w-5 h-5" />;
      case 'environment':
        return <Leaf className="w-5 h-5" />;
      default:
        return <Heart className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'health':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'social':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'environment':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
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
    return date.toLocaleDateString('ar', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 ml-2" />
                إنشاء مبادرة
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>إطلاق مبادرة جديدة</DialogTitle>
                <DialogDescription>
                  أنشئ مشروعًا يحدث فرقًا في مجتمعك
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="title">عنوان المبادرة</Label>
                  <Input
                    id="title"
                    placeholder="مثلاً: مشروع حديقة مجتمعية"
                    value={newInitiative.title}
                    onChange={(e) => setNewInitiative({ ...newInitiative, title: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">الوصف</Label>
                  <Textarea
                    id="description"
                    placeholder="صف مبادرتك وتأثيرها..."
                    value={newInitiative.description}
                    onChange={(e) => setNewInitiative({ ...newInitiative, description: e.target.value })}
                    className="min-h-[100px]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">الفئة</Label>
                    <Select
                      value={newInitiative.category}
                      onValueChange={(value: 'health' | 'social' | 'environment') =>
                        setNewInitiative({ ...newInitiative, category: value })
                      }
                    >
                      <SelectTrigger id="category">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="health">الصحة والعافية</SelectItem>
                        <SelectItem value="social">الخدمات الاجتماعية</SelectItem>
                        <SelectItem value="environment">البيئة</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="goal">الهدف (اختياري)</Label>
                    <Input
                      id="goal"
                      placeholder="مثلاً: زراعة ١٠٠ شجرة"
                      value={newInitiative.goal}
                      onChange={(e) => setNewInitiative({ ...newInitiative, goal: e.target.value })}
                    />
                  </div>
                </div>

                <Button
                  onClick={handleCreateInitiative}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  إطلاق المبادرة
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          
          <div>
            <h1 className="text-3xl md:text-4xl mb-2 text-gray-900">المبادرات المجتمعية</h1>
            <p className="text-gray-600">انضم أو أنشئ مشاريع مؤثرة</p>
          </div>
        </motion.div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="h-full border-2 hover:shadow-xl transition-all hover:border-green-200">
                {initiative.imageUrl && (
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback
                      src={initiative.imageUrl}
                      alt={initiative.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {initiative.status === 'active' ? 'نشط' : 'مكتمل'}
                    </Badge>
                    <Badge className={getCategoryColor(initiative.category)}>
                      <span className="flex items-center gap-1">
                        {getCategoryLabel(initiative.category)}
                        {getCategoryIcon(initiative.category)}
                      </span>
                    </Badge>
                  </div>
                  <CardTitle className="line-clamp-2 text-right">{initiative.title}</CardTitle>
                  <CardDescription className="line-clamp-3 text-right">
                    {initiative.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {initiative.goal && (
                      <div className="flex items-start gap-2 text-sm">
                        <span className="text-gray-700 text-right flex-1">{initiative.goal}</span>
                        <Target className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                      </div>
                    )}

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 flex items-center gap-1">
                          {formatDate(initiative.createdAt)}
                          <Calendar className="w-4 h-4" />
                        </span>
                        <span className="text-gray-600 flex items-center gap-1">
                          {initiative.participants} مشارك
                          <Users className="w-4 h-4" />
                        </span>
                      </div>
                      <Progress value={Math.min((initiative.participants / 100) * 100, 100)} className="h-2" />
                    </div>

                    <div className="pt-2">
                      <p className="text-sm text-gray-600 mb-3 text-right">
                        بواسطة <span className="text-gray-900">{initiative.userName}</span>
                      </p>
                      <Button
                        onClick={() => handleJoinInitiative(initiative.id)}
                        className="w-full bg-green-600 hover:bg-green-700"
                        size="sm"
                      >
                        انضم للمبادرة
                      </Button>
                    </div>
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
