import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, GraduationCap, User, Calendar, Info } from "lucide-react"

export default function Entrevista() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-primary">
            <GraduationCap className="h-6 w-6" />
            <Link href="/" className="font-bold text-lg">
              Star Jovem
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/#sobre" className="transition-colors hover:text-foreground/80">
              Sobre o Programa
            </Link>
            <Link href="/direitos" className="transition-colors hover:text-foreground/80">
              Direitos e Deveres
            </Link>
            <Link href="/entrevista" className="transition-colors hover:text-foreground/80 text-primary font-bold">
              Entrevista
            </Link>
            <Link href="/#contato" className="transition-colors hover:text-foreground/80">
              Contato
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
                    <span>Entrevistado: Anderson Santos</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Publicado em 08/05/2025</span>
                  </div>
                </div>
              </div>

              <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted mb-8">
                <Image
                  src="/images/anderson-santos.png"
                  alt="Anderson Santos, ex-aprendiz do programa"
                  width={900}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <p className="italic text-muted-foreground mb-4">
                      Anderson Santos, 19 anos, participou do programa Star Jovem na empresa ABC Tecnologia durante 2
                      anos. Hoje, ele está efetivado como assistente administrativo na mesma empresa e compartilha sua
                      experiência nesta entrevista exclusiva.
                    </p>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="font-bold text-primary">Luan:</h3>
                        <p>
                          Olá, Anderson! Obrigado por participar desta entrevista. Para começar, conte-nos como você
                          conheceu o programa Star Jovem e o que te motivou a participar.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold">Anderson:</h3>
                        <p>
                          Olá, Luan! Eu conheci o programa através da minha escola. Uma representante do CIEE foi até lá
                          e apresentou as oportunidades. Na época, eu estava no terceiro ano do ensino médio e queria
                          muito começar a trabalhar, mas não tinha experiência nenhuma.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold text-primary">Luan:</h3>
                        <p>E como foi o processo seletivo? Você se preparou de alguma forma especial?</p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold">Anderson:</h3>
                        <p>
                          O processo teve várias etapas. Primeiro, fiz uma prova de conhecimentos gerais, depois
                          participei de uma dinâmica de grupo, tive uma entrevista individual. Me preparei estudando um
                          pouco sobre a empresa e praticando possíveis perguntas da entrevista com meus pais.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold text-primary">Luan:</h3>
                        <p>Quais foram os maiores desafios que você enfrentou durante o programa?</p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold">Anderson:</h3>
                        <p>
                          Conciliar trabalho e estudo foi um desafio. No começo, apanhei pra organizar meu tempo, mas
                          com um pouco de planejamento, fui me ajustando. Outro desafio foi lidar com a timidez, porque
                          eu tinha que falar com muita gente no trabalho e isso não era fácil pra mim.
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
                        <h3 className="font-bold">Anderson:</h3>
                        <p>
                          Desenvolvi muitas habilidades técnicas, como elaborar planilhas e documentos. Mas as
                          habilidades de desempenho foram as mais valiosas: aprendi a me comunicar melhor, a trabalhar
                          em equipe, a gerenciar meu tempo e a resolver problemas.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold text-primary">Luan:</h3>
                        <p>
                          Que conselhos você daria para jovens que estão pensando em se inscrever no programa Star
                          Jovem?
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-bold">Anderson:</h3>
                        <p>
                          Eu diria para aproveitarem ao máximo essa oportunidade! É uma chance única de entrar no
                          mercado de trabalho com apoio e aprendizado.
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
                      <strong>Habilidades desenvolvidas:</strong> Técnicas (elaboração de planilhas e documentos) e
                      comportamentais (comunicação, trabalho em equipe, gestão de tempo).
                    </li>
                    <li>
                      <strong>Conselhos para novos aprendizes:</strong> Aproveitar ao máximo a oportunidade de entrar no
                      mercado de trabalho com apoio.
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border bg-card p-6 mt-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Info className="h-5 w-5 text-primary" />
                    Referências
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <strong>Entrevistador:</strong> Luan Oliveira, Coordenador do Programa Star Jovem
                    </li>
                    <li>
                      <strong>Entrevistado:</strong> Anderson Santos, Ex-aprendiz e atual Assistente Administrativo na
                      ABC Tecnologia
                    </li>
                    <li>
                      <strong>Fonte das informações:</strong> Entrevista realizada em 15/04/2025 e pesquisas no Google
                    </li>
                  </ul>
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
              &copy; {new Date().getFullYear()} Star Jovem. Todos os direitos reservados.
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
