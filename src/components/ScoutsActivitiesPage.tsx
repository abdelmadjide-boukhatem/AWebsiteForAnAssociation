import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Users, TreePine } from 'lucide-react';
import { motion } from 'motion/react';
import { activities } from '../lib/scouts-data';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ScoutsActivitiesPage() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'camping': return 'bg-green-100 text-green-700';
      case 'training': return 'bg-blue-100 text-blue-700';
      case 'environment': return 'bg-emerald-100 text-emerald-700';
      case 'community': return 'bg-purple-100 text-purple-700';
      case 'education': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'camping': return 'مخيمات';
      case 'training': return 'تكوين';
      case 'environment': return 'بيئة';
      case 'community': return 'مجتمع';
      case 'education': return 'تربوي';
      default: return category;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
            <TreePine className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">أنشطتنا الكشفية</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            مخيمات، تكوينات، مبادرات بيئية، وأنشطة مجتمعية متنوعة
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:shadow-xl transition-all">
                {activity.imageUrl && (
                  <div className="h-56 overflow-hidden rounded-t-lg">
                    <ImageWithFallback
                      src={activity.imageUrl}
                      alt={activity.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getCategoryColor(activity.category)}>
                      {getCategoryLabel(activity.category)}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-right">{activity.title}</CardTitle>
                  <CardDescription className="text-right text-base">
                    {activity.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center justify-end gap-2">
                      <span>{activity.location}</span>
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <span>{activity.date.toLocaleDateString('ar', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                      <Calendar className="w-5 h-5" />
                    </div>
                    {activity.participants && (
                      <div className="flex items-center justify-end gap-2 text-green-700">
                        <span className="font-semibold">{activity.participants} مشارك</span>
                        <Users className="w-5 h-5" />
                      </div>
                    )}
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
