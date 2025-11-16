import { useState, useEffect } from 'react';
import { Route, Switch } from 'wouter';
import { ScoutsHeader } from './components/ScoutsHeader';
import { ScoutsHomePage } from './components/ScoutsHomePage';
import { ScoutsActivitiesPage } from './components/ScoutsActivitiesPage';
import { ScoutsEducationPage } from './components/ScoutsEducationPage';
import { ScoutsMembersPage } from './components/ScoutsMembersPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  useEffect(() => {
    // Set RTL direction
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, []);

  return (
    <>
      <ScoutsHeader />
      <Switch>
        <Route path="/">
          <ScoutsHomePage />
        </Route>

        <Route path="/scouts">
          <ScoutsHomePage />
        </Route>

        <Route path="/scouts/activities">
          <ScoutsActivitiesPage />
        </Route>

        <Route path="/scouts/education">
          <ScoutsEducationPage />
        </Route>

        <Route path="/scouts/members">
          <ScoutsMembersPage />
        </Route>

        <Route path="/scouts/contact">
          <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
            <div className="container mx-auto max-w-3xl">
              <div className="text-center mb-8">
                <h1 className="text-4xl mb-4 text-gray-900">اتصل بنا</h1>
                <p className="text-xl text-gray-600">نحن هنا للإجابة على استفساراتك</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-xl p-8 border-2">
                <div className="space-y-6 text-right">
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                    <h3 className="text-xl mb-4 text-green-800">معلومات الاتصال</h3>
                    <div className="space-y-3 text-gray-700">
                      <p>📍 العنوان: مديونة، الجزائر العاصمة</p>
                      <p>📞 الهاتف: 0550 12 34 56</p>
                      <p>✉️ البريد الإلكتروني: contact@foujelfath.dz</p>
                      <p>🕒 أوقات العمل: كل يوم من 14:00 إلى 18:00</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl mb-4 text-blue-800">تابعنا على وسائل التواصل</h3>
                    <div className="space-y-2 text-gray-700">
                      <p>📘 Facebook: /FoujElfathMediouna</p>
                      <p>📷 Instagram: @foujelfath_mediouna</p>
                      <p>▶️ YouTube: Fouj El Fath Mediouna</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
                    <h3 className="text-xl mb-4 text-yellow-800">للانضمام إلى الفوج</h3>
                    <p className="text-gray-700 mb-4">
                      إذا كنت مهتمًا بالانضمام إلى فوج الفتح مديونة، يرجى التواصل معنا عبر الهاتف أو زيارة مقرنا خلال أوقات العمل.
                    </p>
                    <p className="text-sm text-gray-600">
                      الشروط: العمر من 8 إلى 25 سنة، الالتزام بالقيم الكشفية، والرغبة في خدمة المجتمع.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Route>

        {/* Default route */}
        <Route>
          <ScoutsHomePage />
        </Route>
      </Switch>
      <Toaster />
    </>
  );
}
