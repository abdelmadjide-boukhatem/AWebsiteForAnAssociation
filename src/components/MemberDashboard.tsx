import { Link } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { Heart, Users, Leaf, TestTube, MessageSquare, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { CharityUser } from '../types/charity';

interface MemberDashboardProps {
  currentUser: CharityUser;
}

export function MemberDashboard({ currentUser }: MemberDashboardProps) {
  const stats = [
    { label: 'المنشورات المشاركة', value: '12', icon: MessageSquare, color: 'bg-blue-100 text-blue-700' },
    { label: 'المبادرات المنضمة', value: '5', icon: Sparkles, color: 'bg-purple-100 text-purple-700' },
    { label: 'نقاط التأثير', value: '850', icon: Heart, color: 'bg-red-100 text-red-700' },
    { label: 'الاختبارات المكتملة', value: '3', icon: TestTube, color: 'bg-green-100 text-green-700' },
  ];

  const activities = [
    {
      id: 1,
      type: 'post',
      title: 'شارك منشورًا عن تنظيف مجتمعي',
      date: 'منذ يومين',
      category: 'environment',
    },
    {
      id: 2,
      type: 'initiative',
      title: 'انضم إلى "شهر التوعية بالصحة النفسية"',
      date: 'منذ ٥ أيام',
      category: 'health',
    },
    {
      id: 3,
      type: 'test',
      title: 'أكمل اختبار الوعي البيئي',
      date: 'منذ أسبوع',
      category: 'environment',
    },
  ];

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
    return date.toLocaleDateString('ar', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-1">
                  <h1 className="text-3xl mb-2 text-gray-900 text-right">{currentUser.name}</h1>
                  <p className="text-gray-600 mb-3 text-right">
                    {currentUser.bio || 'أحدث فرقًا، عمل واحد في كل مرة'}
                  </p>
                  <div className="flex items-center justify-end gap-2 text-sm text-gray-500">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      عضو منذ {formatDate(currentUser.joinedDate)}
                    </Badge>
                  </div>
                </div>
                <Avatar className="w-24 h-24">
                  <AvatarFallback className="bg-gradient-to-br from-green-500 to-blue-500 text-white text-3xl">
                    {currentUser.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="border-2">
              <CardContent className="pt-6">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-3`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl mb-1 text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2"
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-right">النشاط الأخير</CardTitle>
                <CardDescription className="text-right">أحدث مساهماتك في المجتمع</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex-1 text-right">
                        <p className="text-gray-900 mb-1">{activity.title}</p>
                        <p className="text-sm text-gray-500">{activity.date}</p>
                      </div>
                      <Badge className={getCategoryColor(activity.category)}>
                        {getCategoryLabel(activity.category)}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-right">إجراءات سريعة</CardTitle>
                <CardDescription className="text-right">ماذا تريد أن تفعل؟</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/community">
                  <a className="block">
                    <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700" size="lg">
                      <MessageSquare className="w-5 h-5 ml-2" />
                      شارك منشورًا
                    </Button>
                  </a>
                </Link>
                <Link href="/initiatives">
                  <a className="block">
                    <Button className="w-full justify-start bg-green-600 hover:bg-green-700" size="lg">
                      <Sparkles className="w-5 h-5 ml-2" />
                      أنشئ مبادرة
                    </Button>
                  </a>
                </Link>
                <Link href="/tests">
                  <a className="block">
                    <Button className="w-full justify-start bg-purple-600 hover:bg-purple-700" size="lg">
                      <TestTube className="w-5 h-5 ml-2" />
                      خذ اختبارًا
                    </Button>
                  </a>
                </Link>
              </CardContent>
            </Card>

            {/* Impact Areas */}
            <Card className="border-2 mt-6">
              <CardHeader>
                <CardTitle className="text-right">مجالات تركيزك</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-red-50">
                  <div>
                    <p className="text-sm text-gray-900 text-right">الصحة</p>
                    <p className="text-xs text-gray-600 text-right">٤ أنشطة</p>
                  </div>
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-red-600" />
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50">
                  <div>
                    <p className="text-sm text-gray-900 text-right">الخدمات الاجتماعية</p>
                    <p className="text-xs text-gray-600 text-right">٦ أنشطة</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50">
                  <div>
                    <p className="text-sm text-gray-900 text-right">البيئة</p>
                    <p className="text-xs text-gray-600 text-right">٧ أنشطة</p>
                  </div>
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
