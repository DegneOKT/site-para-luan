import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GraduationCap, Video, CheckCircle2 } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-primary">
            <GraduationCap className="h-6 w-6" />
            <span className="font-bold text-lg">Star Jovem</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#sobre" className="transition-colors hover:text-foreground/80">
              Sobre o Programa
            </Link>
            <Link href="/direitos" className="transition-colors hover:text-foreground/80">
              Direitos e Deveres
            </Link>
            <Link href="/entrevista" className="transition-colors hover:text-foreground/80">
              Entrevista
            </Link>
            <Link href="#contato" className="transition-colors hover:text-foreground/80">
              Contato
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Star Jovem: Seu primeiro passo para o futuro profissional
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Uma oportunidade para jovens de 14 a 24 anos ingressarem no mercado de trabalho com capacitação
                  profissional e direitos garantidos.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/direitos">
                    <Button size="lg">Conheça seus direitos</Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1000&auto=format&fit=crop"
                  alt="Jovens aprendizes em ambiente de trabalho"
                  width={500}
                  height={500}
                  className="rounded-xl object-cover w-full aspect-square"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">O que é o Programa Star Jovem?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  O programa foi criado para promover a inclusão social e profissional de jovens através da
                  aprendizagem, combinando formação teórica e prática.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
                alt="Jovem aprendiz em treinamento"
                width={500}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Formação Técnico-Profissional</h3>
                      <p className="text-muted-foreground">
                        Combina formação teórica e prática, preparando o jovem para o mercado de trabalho.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Público-Alvo</h3>
                      <p className="text-muted-foreground">
                        Jovens de 14 a 24 anos que estejam cursando o ensino fundamental ou médio, ou que já tenham
                        concluído o ensino médio.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="direitos" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Direitos e Deveres</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça os principais direitos e deveres garantidos pela legislação.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6">
                  <h3 className="text-2xl font-bold flex items-center gap-2 mb-4">
                    <span className="text-primary">Direitos do Aprendiz</span>
                  </h3>
                  <div className="space-y-2">
                    <p>Benefícios garantidos por lei aos participantes do programa:</p>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Salário mínimo hora</li>
                      <li>13º salário</li>
                      <li>Férias</li>
                      <li>Vale-transporte</li>
                      <li>FGTS (2% da remuneração)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6">
                  <h3 className="text-2xl font-bold flex items-center gap-2 mb-4">
                    <span className="text-primary">Deveres do Aprendiz</span>
                  </h3>
                  <div className="space-y-2">
                    <p>Responsabilidades que o jovem deve cumprir durante o programa:</p>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Frequentar as aulas teóricas</li>
                      <li>Manter bom desempenho escolar</li>
                      <li>Cumprir a jornada de trabalho estabelecida</li>
                      <li>Executar com zelo as tarefas necessárias à formação</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <Link href="/direitos">
                <Button>Ver mais detalhes</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Seção de entrevista */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Entrevista com Ex-Aprendiz</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça a história de João, que participou do programa e compartilha sua experiência.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted">
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                      <Link href="/entrevista">
                        <Button size="lg" variant="outline" className="bg-background/80 backdrop-blur-sm">
                          <Video className="mr-2 h-5 w-5" />
                          Ler Entrevista Completa
                        </Button>
                      </Link>
                    </div>
                    <Image
                      src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1000&auto=format&fit=crop"
                      alt="Entrevista com ex-aprendiz"
                      width={640}
                      height={360}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Depoimento Inspirador</h3>
                  <p className="text-muted-foreground">
                    João compartilha como o programa transformou sua vida e abriu portas para sua carreira profissional.
                    Ele trabalhou como aprendiz na área administrativa e hoje está efetivado na mesma empresa.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Dicas para o processo seletivo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Como conciliar trabalho e estudos</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link href="/entrevista">
                      <Button>Ler Entrevista Completa</Button>
                    </Link>
                  </div>
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
