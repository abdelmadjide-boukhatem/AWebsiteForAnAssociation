import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Progress } from './ui/progress';
import { Heart, Users, Leaf, ArrowRight, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { mockTests } from '../lib/charity-data';
import { Test } from '../types/charity';

export function InteractiveTests() {
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleTestSelect = (test: Test) => {
    setSelectedTest(test);
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null || !selectedTest) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (currentQuestion < selectedTest.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      const finalScore = newAnswers.reduce((acc, answer, index) => {
        return acc + (answer === selectedTest.questions[index].correctAnswer ? 1 : 0);
      }, 0);
      setScore(finalScore);
      setShowResult(true);
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  const handleBackToTests = () => {
    setSelectedTest(null);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'health':
        return <Heart className="w-6 h-6" />;
      case 'social':
        return <Users className="w-6 h-6" />;
      case 'environment':
        return <Leaf className="w-6 h-6" />;
      default:
        return <Heart className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'health':
        return 'from-red-500 to-pink-500';
      case 'social':
        return 'from-blue-500 to-indigo-500';
      case 'environment':
        return 'from-green-500 to-emerald-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  if (!selectedTest) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">التقييمات التفاعلية</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              اختبر معرفتك واكتشف كيف يمكنك إحداث تأثير أكبر في مجتمعك
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {mockTests.map((test, index) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer border-2 hover:border-green-200">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${getCategoryColor(test.category)} rounded-xl flex items-center justify-center mb-4 text-white`}>
                      {getCategoryIcon(test.category)}
                    </div>
                    <CardTitle>{test.title}</CardTitle>
                    <CardDescription>{test.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{test.questions.length} أسئلة</span>
                        <span>~٥ دقائق</span>
                      </div>
                      <Button
                        onClick={() => handleTestSelect(test)}
                        className={`w-full bg-gradient-to-r ${getCategoryColor(test.category)} hover:opacity-90`}
                      >
                        <ArrowRight className="w-4 h-4 ml-2" />
                        ابدأ الاختبار
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

  if (showResult) {
    const percentage = (score / selectedTest.questions.length) * 100;
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <Card className="border-2">
              <CardHeader>
                <div className={`w-24 h-24 bg-gradient-to-br ${getCategoryColor(selectedTest.category)} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                  {percentage >= 70 ? (
                    <CheckCircle2 className="w-12 h-12" />
                  ) : (
                    <XCircle className="w-12 h-12" />
                  )}
                </div>
                <CardTitle className="text-3xl">اكتمل الاختبار!</CardTitle>
                <CardDescription className="text-lg">
                  لقد حصلت على {score} من {selectedTest.questions.length}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-8">
                  <div className="text-5xl mb-2 text-green-600">
                    {percentage.toFixed(0)}%
                  </div>
                  <Progress value={percentage} className="h-3" />
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="text-right text-gray-900">راجع إجاباتك:</h3>
                  {selectedTest.questions.map((question, index) => {
                    const userAnswer = answers[index];
                    const isCorrect = userAnswer === question.correctAnswer;
                    return (
                      <div key={question.id} className="text-right p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-start gap-3 mb-2">
                          <div className="flex-1">
                            <p className="text-gray-900 mb-2">{question.question}</p>
                            {!isCorrect && (
                              <div className="space-y-1 text-sm">
                                <p className="text-red-600">
                                  إجابتك: {question.options[userAnswer]}
                                </p>
                                <p className="text-green-600">
                                  الإجابة الصحيحة: {question.options[question.correctAnswer]}
                                </p>
                              </div>
                            )}
                            {question.explanation && (
                              <p className="text-sm text-gray-600 mt-2 italic">
                                💡 {question.explanation}
                              </p>
                            )}
                          </div>
                          {isCorrect ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-4 justify-center">
                  <Button onClick={handleRetake} variant="outline">
                    <RotateCcw className="w-4 h-4 ml-2" />
                    إعادة الاختبار
                  </Button>
                  <Button onClick={handleBackToTests} className="bg-green-600 hover:bg-green-700">
                    العودة للاختبارات
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  const question = selectedTest.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / selectedTest.questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">
              {currentQuestion + 1} / {selectedTest.questions.length}
            </span>
            <h2 className="text-2xl text-gray-900">{selectedTest.title}</h2>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl text-right">{question.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={selectedAnswer?.toString()}
                  onValueChange={(value) => handleAnswerSelect(parseInt(value))}
                >
                  <div className="space-y-3">
                    {question.options.map((option, index) => (
                      <div
                        key={index}
                        className={`flex items-center space-x-3 space-x-reverse p-4 rounded-lg border-2 transition-all cursor-pointer ${
                          selectedAnswer === index
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-green-200 hover:bg-gray-50'
                        }`}
                        onClick={() => handleAnswerSelect(index)}
                      >
                        <Label
                          htmlFor={`option-${index}`}
                          className="flex-1 cursor-pointer text-gray-900 text-right"
                        >
                          {option}
                        </Label>
                        <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      </div>
                    ))}
                  </div>
                </RadioGroup>

                <div className="mt-6 flex justify-between">
                  <Button
                    onClick={handleNext}
                    disabled={selectedAnswer === null}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <ArrowRight className="w-4 h-4 ml-2" />
                    {currentQuestion < selectedTest.questions.length - 1 ? 'التالي' : 'إنهاء'}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleBackToTests}
                  >
                    الخروج من الاختبار
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
