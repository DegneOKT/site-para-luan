import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, GraduationCap, User, Calendar } from "lucide-react"

export default function Entrevista() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-primary">
            <GraduationCap className="h-6 w-6" />
            <Link href="/" className="font-bold text-lg">
              Programa Menor Aprendiz
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/#sobre" className="transition-colors hover:text-foreground/80">
              Sobre o Programa
            </Link>
            <Link href="/direitos" className="transition-colors hover:text-foreground/80">
              Direitos e Deveres
            </Link>
            <Link href="/como-participar" className="transition-colors hover:text-foreground/80">
              Como Participar
            </Link>
            <Link href="/entrevista" className="transition-colors hover:text-foreground/80 text-primary font-bold">
              Entrevista
            </Link>
            <Link href="/#faq" className="transition-colors hover:text-foreground/80">
              Perguntas Frequentes
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <Link href="/" className="inline-flex items-center gap-1 mb-6 text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" />
              Voltar para página inicial
            </Link>

            <div className="mx-auto max-w-4xl">
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                  Entrevista: De Aprendiz a Profissional
                </h1>
                <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>Entrevistado: João Silva</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Publicado em 08/05/2025</span>
                  </div>
                </div>
              </div>

              <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted mb-8">
                <Image
                  src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1000&auto=format&fit=crop"
                  alt="João durante a entrevista"
                  width={900}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <p className="italic text-muted-foreground mb-4">
                      João Silva, 19 anos, participou do programa Menor Aprendiz na empresa ABC Tecnologia durante 2
                      anos. Hoje, ele está efetivado como assistente administrativo na mesma empresa e compartilha sua
                      experiência nesta entrevista exclusiva.
                    </p>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="font-bold text-primary">Luan:</h3>
                        <p>
                          Olá, João! Obrigado por participar desta entrevista. Para começar, conte-nos como você
                          conheceu o programa Menor Aprendiz e o que te motivou a participar.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold">João:</h3>
                        <p>
                          Olá, Luan! Eu conheci o programa através da minha escola. Uma representante do CIEE foi até lá
                          e apresentou as oportunidades. Na época, eu estava no segundo ano do ensino médio e queria
                          muito começar a trabalhar, mas não tinha experiência nenhuma. O programa pareceu perfeito
                          porque oferecia formação e a chance de entrar no mercado de trabalho com todos os direitos
                          garantidos.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold text-primary">Luan:</h3>
                        <p>E como foi o processo seletivo? Você se preparou de alguma forma especial?</p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold">João:</h3>
                        <p>
                          O processo teve várias etapas. Primeiro, fiz uma prova de conhecimentos gerais, depois
                          participei de uma dinâmica de grupo e, por fim, tive uma entrevista individual. Me preparei
                          estudando um pouco sobre a empresa e praticando possíveis perguntas da entrevista com meus
                          pais. Acho que o que me ajudou muito foi demonstrar interesse genuíno em aprender e crescer
                          profissionalmente. Mesmo sem experiência, mostrei que estava disposto a me dedicar e absorver
                          conhecimento.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold text-primary">Luan:</h3>
                        <p>Quais foram os maiores desafios que você enfrentou durante o programa?</p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold">João:</h3>
                        <p>
                          O maior desafio foi conciliar o trabalho com os estudos. No início, foi difícil administrar o
                          tempo, mas com organização e planejamento, consegui me adaptar. Outro desafio foi superar a
                          timidez, já que precisava interagir com muitas pessoas no ambiente de trabalho. Eu era muito
                          tímido e tinha medo de cometer erros, mas aos poucos fui ganhando confiança. Os supervisores
                          foram muito pacientes e me ajudaram muito nesse processo.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold text-primary">Luan:</h3>
                        <p>
                          Quais habilidades você desenvolveu durante o programa que considera mais importantes para sua
                          carreira?
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold">João:</h3>
                        <p>
                          Desenvolvi muitas habilidades técnicas, como usar sistemas administrativos, elaborar
                          planilhas, redigir documentos e organizar arquivos. Mas as habilidades comportamentais foram
                          as mais valiosas: aprendi a me comunicar melhor, a trabalhar em equipe, a gerenciar meu tempo
                          e a resolver problemas. Também desenvolvi muito minha responsabilidade e comprometimento.
                          Essas habilidades são fundamentais em qualquer área e me ajudaram a conquistar a efetivação na
                          empresa.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold text-primary">Luan:</h3>
                        <p>
                          Como foi a transição de aprendiz para funcionário efetivo? O que você acha que fez a diferença
                          para conseguir essa oportunidade?
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold">João:</h3>
                        <p>
                          A transição foi muito natural porque eu já conhecia bem a empresa e as rotinas. Acho que o que
                          fez a diferença foi meu comprometimento durante todo o programa. Sempre procurei ir além do
                          que era pedido, demonstrei interesse em aprender coisas novas e nunca deixei de cumprir minhas
                          responsabilidades, tanto no trabalho quanto nos cursos teóricos. Também construí bons
                          relacionamentos com a equipe e sempre pedi feedback para melhorar. Três meses antes do fim do
                          meu contrato como aprendiz, meu supervisor me chamou para conversar sobre a possibilidade de
                          efetivação, e foi uma alegria enorme receber essa proposta.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold text-primary">Luan:</h3>
                        <p>
                          Que conselhos você daria para jovens que estão pensando em se inscrever no programa Menor
                          Aprendiz?
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold">João:</h3>
                        <p>
                          Eu diria para aproveitarem ao máximo essa oportunidade! É uma chance única de entrar no
                          mercado de trabalho com apoio e aprendizado. Alguns conselhos específicos: sejam pontuais e
                          responsáveis; não tenham medo de fazer perguntas quando não entenderem algo; busquem aprender
                          com todos na empresa; mantenham boas notas na escola; e encarem cada tarefa, mesmo as mais
                          simples, como uma oportunidade de aprendizado. Ah, e mantenham um caderno de anotações para
                          registrar o que aprendem - isso me ajudou muito! O programa pode ser o primeiro passo para uma
                          carreira de sucesso, como foi para mim.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold text-primary">Luan:</h3>
                        <p>
                          Para finalizar, como você vê o impacto do programa Menor Aprendiz na sua vida pessoal e
                          profissional?
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold">João:</h3>
                        <p>
                          O impacto foi transformador. Profissionalmente, me deu a base para iniciar minha carreira e
                          conquistar um emprego estável. Pessoalmente, me ajudou a amadurecer, a ter mais confiança em
                          mim mesmo e a valorizar a educação. Também me permitiu ajudar financeiramente minha família e
                          planejar melhor meu futuro. Hoje estou cursando faculdade de Administração, com planos de
                          crescer na empresa, e isso só foi possível graças ao programa. Sou muito grato pela
                          oportunidade e sempre recomendo para outros jovens. O Menor Aprendiz mudou minha vida e pode
                          mudar a de muitos outros jovens também.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold text-primary">Luan:</h3>
                        <p>
                          Muito obrigado por compartilhar sua experiência, João! Tenho certeza que seu depoimento vai
                          inspirar muitos jovens a buscarem essa oportunidade.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold">João:</h3>
                        <p>
                          Eu que agradeço a oportunidade, Luan! Espero realmente que minha história possa motivar outros
                          jovens a participarem do programa e aproveitarem ao máximo essa experiência.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="rounded-lg bg-muted p-6 mt-8">
                  <h3 className="text-xl font-bold mb-4">Pontos destacados da entrevista:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Processo seletivo:</strong> Inclui prova de conhecimentos gerais, dinâmica de grupo e
                      entrevista individual.
                    </li>
                    <li>
                      <strong>Principais desafios:</strong> Conciliar trabalho e estudos, superar a timidez no ambiente
                      profissional.
                    </li>
                    <li>
                      <strong>Habilidades desenvolvidas:</strong> Técnicas (sistemas administrativos, planilhas) e
                      comportamentais (comunicação, trabalho em equipe, gestão de tempo).
                    </li>
                    <li>
                      <strong>Fatores para efetivação:</strong> Comprometimento, proatividade, bons relacionamentos com
                      a equipe e busca constante por feedback.
                    </li>
                    <li>
                      <strong>Conselhos para novos aprendizes:</strong> Pontualidade, responsabilidade, curiosidade para
                      aprender e manter bom desempenho escolar.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de fotos de jovens aprendizes */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Galeria de Aprendizes</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça alguns jovens que participam do programa Menor Aprendiz em diferentes empresas.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop"
                    alt="Jovem aprendiz em escritório"
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=1000&auto=format&fit=crop"
                    alt="Jovem aprendiz em reunião"
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1000&auto=format&fit=crop"
                    alt="Jovem aprendiz estudando"
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop"
                    alt="Grupo de aprendizes"
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
                    alt="Aprendiz em treinamento"
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop"
                    alt="Aprendiz em laboratório"
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <GraduationCap className="h-6 w-6" />
            <p className="text-center text-sm leading-loose md:text-left">
              &copy; {new Date().getFullYear()} Programa Menor Aprendiz. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm underline underline-offset-4">
              Termos de Uso
            </Link>
            <Link href="#" className="text-sm underline underline-offset-4">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
