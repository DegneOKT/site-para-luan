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
            <span className="font-bold text-lg">Programa Menor Aprendiz</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#sobre" className="transition-colors hover:text-foreground/80">
              Sobre o Programa
            </Link>
            <Link href="#direitos" className="transition-colors hover:text-foreground/80">
              Direitos e Deveres
            </Link>
            <Link href="#como-participar" className="transition-colors hover:text-foreground/80">
              Como Participar
            </Link>
            <Link href="/entrevista" className="transition-colors hover:text-foreground/80">
              Entrevista
            </Link>
            <Link href="#faq" className="transition-colors hover:text-foreground/80">
              Perguntas Frequentes
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
                  Programa Menor Aprendiz: Seu primeiro passo para o futuro profissional
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  O programa Menor Aprendiz é uma oportunidade para jovens de 14 a 24 anos ingressarem no mercado de
                  trabalho com capacitação profissional, direitos trabalhistas e educação.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/como-participar">
                    <Button size="lg">Saiba como participar</Button>
                  </Link>
                  <Link href="/direitos">
                    <Button variant="outline" size="lg">
                      Conheça seus direitos
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1000&auto=format&fit=crop"
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">O que é o Programa Menor Aprendiz?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  O programa Menor Aprendiz foi criado pela Lei 10.097/2000 e regulamentado pelo Decreto 5.598/2005, com
                  o objetivo de promover a inclusão social e profissional de jovens através da aprendizagem.
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
                        Combina formação teórica e prática, preparando o jovem para o mercado de trabalho com atividades
                        compatíveis com seu desenvolvimento físico, moral e psicológico.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Contrato Especial</h3>
                      <p className="text-muted-foreground">
                        Contrato de trabalho especial, com duração máxima de 2 anos, que garante direitos trabalhistas e
                        previdenciários.
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Direitos e Deveres do Menor Aprendiz
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça os principais direitos e deveres garantidos pela legislação do programa Menor Aprendiz.
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
                      <li>Salário mínimo hora (proporcional às horas trabalhadas)</li>
                      <li>13º salário</li>
                      <li>Férias coincidentes com o período escolar</li>
                      <li>Vale-transporte</li>
                      <li>FGTS (2% da remuneração)</li>
                      <li>Seguro-desemprego (em caso de dispensa involuntária)</li>
                      <li>
                        Jornada de trabalho reduzida (máximo de 6 horas diárias para quem não concluiu o ensino
                        fundamental)
                      </li>
                      <li>Anotação na Carteira de Trabalho e Previdência Social (CTPS)</li>
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
                      <li>Executar com zelo e diligência as tarefas necessárias à formação</li>
                      <li>Respeitar as normas da empresa</li>
                      <li>Manter comportamento compatível com a condição de aprendiz</li>
                      <li>
                        Comunicar à empresa e à instituição formadora qualquer problema que prejudique o aprendizado
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-5xl">
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop"
                alt="Jovens aprendizes em sala de aula"
                width={1000}
                height={500}
                className="rounded-xl object-cover w-full aspect-video"
              />
            </div>
          </div>
        </section>

        <section id="como-participar" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Como Participar do Programa</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Saiba como participar do programa Menor Aprendiz.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col items-center text-center p-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-primary"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Requisitos</h3>
                  <ul className="space-y-2 text-left mt-4">
                    <li>Ter entre 14 e 24 anos</li>
                    <li>Estar matriculado e frequentando a escola (caso não tenha concluído o ensino médio)</li>
                    <li>Estar cursando ou ter concluído curso de qualificação profissional</li>
                    <li>Não ter experiência prévia de trabalho (preferencialmente)</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col items-center text-center p-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-primary"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Documentação</h3>
                  <ul className="space-y-2 text-left mt-4">
                    <li>RG e CPF (cópia e original)</li>
                    <li>Carteira de Trabalho (física ou digital)</li>
                    <li>Comprovante de residência</li>
                    <li>Comprovante de matrícula escolar</li>
                    <li>Histórico escolar</li>
                    <li>Foto 3x4 recente</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col items-center text-center p-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-primary"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Processo Seletivo</h3>
                  <ol className="space-y-2 text-left list-decimal pl-5 mt-4">
                    <li>Cadastro em instituições formadoras (SENAI, SENAC, etc.)</li>
                    <li>Participação em processos seletivos</li>
                    <li>Entrevistas com empresas</li>
                    <li>Contratação e início do programa</li>
                    <li>Formação teórica e prática</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-5xl">
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop"
                alt="Jovem aprendiz em ambiente de trabalho"
                width={1000}
                height={500}
                className="rounded-xl object-cover w-full aspect-video"
              />
            </div>
          </div>
        </section>

        {/* Seção de instituições */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Instituições Parceiras</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça as principais instituições que oferecem programas de aprendizagem.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                  <div className="w-32 h-32 mb-4 overflow-hidden">
                    <Image
                      src="https://www.sp.senac.br/o/senac-theme/images/logo-senac.png"
                      alt="Logo SENAC"
                      width={128}
                      height={128}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">SENAC</h3>
                  <p className="text-center text-muted-foreground">
                    Serviço Nacional de Aprendizagem Comercial. Oferece cursos nas áreas de comércio, serviços e
                    turismo.
                  </p>
                </div>

                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                  <div className="w-32 h-32 mb-4 overflow-hidden">
                    <Image
                      src="https://www.portaldaindustria.com.br/canais/industria-de-a-a-z/static/images/senai-logo.png"
                      alt="Logo SENAI"
                      width={128}
                      height={128}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">SENAI</h3>
                  <p className="text-center text-muted-foreground">
                    Serviço Nacional de Aprendizagem Industrial. Especializado em educação profissional para o setor
                    industrial.
                  </p>
                </div>

                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                  <div className="w-32 h-32 mb-4 overflow-hidden">
                    <Image
                      src="https://www.ciee.org.br/portal/img/logo-ciee.png"
                      alt="Logo CIEE"
                      width={128}
                      height={128}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">CIEE</h3>
                  <p className="text-center text-muted-foreground">
                    Centro de Integração Empresa-Escola. Conecta estudantes com empresas para estágios e aprendizagem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nova seção de entrevista */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Entrevista com Ex-Aprendiz</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça a história de João, que participou do programa Menor Aprendiz e compartilha sua experiência.
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
                    João compartilha como o programa Menor Aprendiz transformou sua vida e abriu portas para sua
                    carreira profissional. Ele trabalhou como aprendiz na área administrativa e hoje está efetivado na
                    mesma empresa.
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
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Desenvolvimento de habilidades profissionais</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>Perspectivas de carreira após o programa</span>
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

        {/* Seção de uniformes/camisas */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Uniformes e Identificação</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça os uniformes e crachás utilizados pelos jovens aprendizes nas empresas parceiras.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="overflow-hidden rounded-xl bg-white shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1625191574094-0b298c9d2e39?q=80&w=1000&auto=format&fit=crop"
                    alt="Uniforme corporativo"
                    width={400}
                    height={300}
                    className="h-64 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold">Uniforme Corporativo</h3>
                    <p className="text-sm text-muted-foreground">
                      Utilizado em empresas do setor administrativo e financeiro.
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl bg-white shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000&auto=format&fit=crop"
                    alt="Camiseta institucional"
                    width={400}
                    height={300}
                    className="h-64 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold">Camiseta Institucional</h3>
                    <p className="text-sm text-muted-foreground">
                      Utilizada em instituições de ensino e formação profissional.
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl bg-white shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1517502166878-35c93a0072f0?q=80&w=1000&auto=format&fit=crop"
                    alt="Crachá de identificação"
                    width={400}
                    height={300}
                    className="h-64 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold">Crachá de Identificação</h3>
                    <p className="text-sm text-muted-foreground">
                      Obrigatório para acesso às empresas e instituições parceiras.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Restante do código da página inicial... */}
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
