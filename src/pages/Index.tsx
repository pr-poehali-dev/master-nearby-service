import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                📍 Поселок Российский
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Ваш мастер
                <span className="text-primary block">на районе</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Решу любую бытовую задачу быстро и по честной цене. 
                Работаю только в посёлке Российский → приезжаю в день обращения.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                  <Icon name="Phone" size={20} />
                  Вызвать мастера
                </Button>
                <Button variant="outline" size="lg" className="border-green-500 text-green-700 hover:bg-green-50 px-8 py-6 text-lg">
                  <Icon name="MessageCircle" size={20} />
                  WhatsApp
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/31bd957b-5475-4dcf-aaf6-df1e1200984d.jpg" 
                alt="Мастер на районе" 
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-gray-700">Всегда на связи</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Знакомые проблемы?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "Clock",
                title: "Нет времени",
                description: "Некогда самим чинить и собирать мебель"
              },
              {
                icon: "AlertTriangle", 
                title: "Поломки тянутся",
                description: "Мелкие неисправности месяцами не устраняются"
              },
              {
                icon: "MapPin",
                title: "Далеко мастера",
                description: "Сложно найти надёжного мастера поблизости"
              },
              {
                icon: "Users",
                title: "Сомнительные советы",
                description: "Соседи советуют знакомых, но качество под вопросом"
              }
            ].map((pain, index) => (
              <Card key={index} className="border-2 border-red-100 hover:border-red-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={pain.icon} size={32} className="text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{pain.title}</h3>
                  <p className="text-gray-600 text-sm">{pain.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Как я работаю
            </h2>
            <p className="text-xl text-gray-600">Простая схема работы без лишних сложностей</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                icon: "Phone",
                title: "Вызов мастера",
                description: "Звоните или пишите в WhatsApp"
              },
              {
                step: "2", 
                icon: "MapPin",
                title: "Быстрый приезд",
                description: "Приезжаю только по району — без долгих ожиданий"
              },
              {
                step: "3",
                icon: "Calculator",
                title: "Честная цена", 
                description: "Чёткие цены без накруток"
              },
              {
                step: "4",
                icon: "CheckCircle",
                title: "Работа под ключ",
                description: "От сборки мебели до замены розеток"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <Icon name={step.icon} size={32} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                {index < 3 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full">
                    <div className="w-full border-t-2 border-dashed border-primary/30"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Почему выбирают меня
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "📍",
                title: "Локально",
                description: "Всегда рядом в поселке",
                color: "bg-green-100 text-green-800"
              },
              {
                icon: "⏱",
                title: "Быстро", 
                description: "Не ждёте неделями",
                color: "bg-blue-100 text-blue-800"
              },
              {
                icon: "🔧",
                title: "Универсально",
                description: "Один мастер — разные задачи",
                color: "bg-purple-100 text-purple-800"
              },
              {
                icon: "💸",
                title: "Экономно",
                description: "Без лишних расходов",
                color: "bg-orange-100 text-orange-800"
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <Badge className={`${benefit.color} mb-3`}>{benefit.title}</Badge>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-primary/10 to-blue-100 rounded-2xl p-12">
            <div className="text-6xl font-bold text-primary mb-4">50+</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Довольных соседей
            </h3>
            <p className="text-gray-600 text-lg">
              в посёлке Российский уже доверяют мне свои бытовые задачи
            </p>
            
            <div className="flex justify-center items-center mt-8 space-x-2">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={24} />
              ))}
              <span className="ml-2 text-gray-600 font-medium">4.9 из 5.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Частые вопросы
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Сколько стоят ваши услуги?",
                answer: "Цена зависит от конкретной задачи. Называю точную стоимость сразу при звонке — никаких скрытых доплат."
              },
              {
                question: "Можете приехать срочно?",
                answer: "Да, могу приехать в тот же день. Работаю только в поселке Российский, поэтому быстро реагирую на вызовы."
              },
              {
                question: "Работаете ли за пределами поселка?",
                answer: "Нет, работаю только в поселке Российский. Это позволяет мне быстро приезжать и не брать лишнего за дорогу."
              },
              {
                question: "Какие работы выполняете?",
                answer: "Сборка мебели, мелкий ремонт, замена розеток и выключателей, установка полок, ремонт сантехники и другие бытовые задачи."
              },
              {
                question: "Даете ли гарантию на работы?",
                answer: "Конечно! На все выполненные работы даю гарантию. Если что-то пойдет не так — исправлю бесплатно."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Нужен мастер прямо сейчас?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Звоните или пишите в WhatsApp → приеду сегодня!
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="bg-white/10 border-white/20 backdrop-blur">
              <CardHeader className="pb-4">
                <CardTitle className="text-white flex items-center justify-center gap-3">
                  <Icon name="Phone" size={24} />
                  Телефон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-white text-primary hover:bg-gray-100 font-semibold py-3">
                  +7 (XXX) XXX-XX-XX
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur">
              <CardHeader className="pb-4">
                <CardTitle className="text-white flex items-center justify-center gap-3">
                  <Icon name="MessageCircle" size={24} />
                  WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3">
                  Написать в WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 p-6 bg-white/10 rounded-xl backdrop-blur">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="Clock" size={20} />
              <span className="font-semibold">Режим работы</span>
            </div>
            <p className="opacity-90">Ежедневно с 8:00 до 20:00</p>
            <p className="text-sm opacity-75 mt-2">Экстренные вызовы принимаю круглосуточно</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-400">
            © 2024 Ваш мастер на районе • Поселок Российский
          </p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <Badge variant="outline" className="border-gray-600 text-gray-300">
              <Icon name="MapPin" size={16} className="mr-1" />
              Поселок Российский
            </Badge>
            <Badge variant="outline" className="border-gray-600 text-gray-300">
              <Icon name="Shield" size={16} className="mr-1" />
              Гарантия качества
            </Badge>
          </div>
        </div>
      </footer>
    </div>
  );
}