import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Mail, Phone, Calendar, Users, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { members } from '../lib/scouts-data';

export function ScoutsMembersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
            <Users className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">أعضاء الفوج</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تعرّف على فريقنا المتفاني ومساهماتهم في خدمة المجتمع
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-1 text-right">
                      <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                      <Badge className="bg-purple-100 text-purple-700">
                        {member.role}
                      </Badge>
                      <CardDescription className="mt-3 text-base">
                        {member.bio}
                      </CardDescription>
                    </div>
                    <Avatar className="w-20 h-20">
                      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-purple-600 text-white text-2xl">
                        {member.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Contact Info */}
                    {(member.email || member.phone) && (
                      <div className="space-y-2 text-sm text-gray-600 pb-3 border-b">
                        {member.email && (
                          <div className="flex items-center justify-end gap-2">
                            <span>{member.email}</span>
                            <Mail className="w-4 h-4" />
                          </div>
                        )}
                        {member.phone && (
                          <div className="flex items-center justify-end gap-2">
                            <span>{member.phone}</span>
                            <Phone className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    )}

                    {/* Join Date */}
                    <div className="flex items-center justify-end gap-2 text-sm text-gray-600">
                      <span>عضو منذ {member.joinDate.toLocaleDateString('ar', { year: 'numeric', month: 'long' })}</span>
                      <Calendar className="w-4 h-4" />
                    </div>

                    {/* Skills */}
                    {member.skills.length > 0 && (
                      <div className="text-right">
                        <p className="text-sm text-gray-700 mb-2">المهارات:</p>
                        <div className="flex flex-wrap gap-2 justify-end">
                          {member.skills.map((skill, idx) => (
                            <Badge key={idx} variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Contributions */}
                    {member.contributions.length > 0 && (
                      <div className="text-right">
                        <div className="flex items-center justify-end gap-2 mb-2">
                          <p className="text-sm text-gray-700">المساهمات الرئيسية:</p>
                          <Award className="w-4 h-4 text-yellow-600" />
                        </div>
                        <ul className="space-y-1">
                          {member.contributions.map((contribution, idx) => (
                            <li key={idx} className="text-sm text-gray-600">
                              • {contribution}
                            </li>
                          ))}
                        </ul>
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
