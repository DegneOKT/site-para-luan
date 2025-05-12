import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, FileText, BookOpen, Users, GraduationCap } from "lucide-react"

export default function ComoParticipar() {
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
            <Link href="/como-participar" className="transition-colors hover:text-foreground/80 text-primary font-bold">
              Como Participar
            </Link>
            <Link href="/entrevista" className="transition-colors hover:text-foreground/80">
              Entrevista
            </Link>
            <Link href="/#faq" className="transition-colors hover:text-foreground/80">
              Perguntas Frequentes
            </Link>
            <Link href="/#contato" className="transition-colors hover:text-foreground/80">
              Contato
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <Link href="/" className="inline-flex items-center gap-1 mb-8 text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" />
              Voltar para a página inicial
            </Link>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Como Participar do Programa Menor Aprendiz
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Saiba todos os detalhes sobre como ingressar no programa, desde os requisitos até a conclusão do
                  processo seletivo.
                </p>
              </div>
              <div className="mx-auto w-full max-w-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop"
                  alt="Jovens em processo seletivo para o programa menor aprendiz"
                  width={500}
                  height={500}
                  className="rounded-xl object-cover w-full aspect-square"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Requisitos para Participar</h2>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Idade</h3>
                      <p className="text-muted-foreground">
                        Ter entre 14 e 24 anos. Para pessoas com deficiência, não há limite máximo de idade.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Escolaridade</h3>
                      <p className="text-muted-foreground">
                        Estar matriculado e frequentando a escola regular (caso não tenha concluído o ensino médio) ou
                        ter concluído o ensino médio.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Documentação</h3>
                      <p className="text-muted-foreground">
                        Possuir documentação básica (RG, CPF, Carteira de Trabalho) e estar em situação regular.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Disponibilidade</h3>
                      <p className="text-muted-foreground">
                        Ter disponibilidade para cumprir a jornada de trabalho e de formação teórica estabelecida pelo
                        programa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Documentos Necessários</h2>
                <ul className="grid gap-4 md:grid-cols-2">
                  <li className="rounded-lg border p-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <span className="font-medium">RG (original e cópia)</span>
                    </div>
                  </li>
                  <li className="rounded-lg border p-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <span className="font-medium">CPF (original e cópia)</span>
                    </div>
                  </li>
                  <li className="rounded-lg border p-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <span className="font-medium">Carteira de Trabalho (física ou digital)</span>
                    </div>
                  </li>
                  <li className="rounded-lg border p-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <span className="font-medium">Comprovante de residência</span>
                    </div>
                  </li>
                  <li className="rounded-lg border p-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <span className="font-medium">Comprovante de matrícula escolar</span>
                    </div>
                  </li>
                  <li className="rounded-lg border p-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <span className="font-medium">Histórico escolar</span>
                    </div>
                  </li>
                  <li className="rounded-lg border p-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <span className="font-medium">Foto 3x4 recente</span>
                    </div>
                  </li>
                  <li className="rounded-lg border p-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <span className="font-medium">Número da conta bancária (se possuir)</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Passo a Passo para Participar</h2>
                <div className="space-y-8">
                  <div className="relative pl-8 pb-8 border-l border-primary/30">
                    <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground -translate-x-1/2">
                      1
                    </div>
                    <h3 className="text-xl font-semibold">Cadastro em Instituições Formadoras</h3>
                    <p className="text-muted-foreground mt-2">
                      Procure instituições que oferecem programas de aprendizagem, como SENAI, SENAC, CIEE, entre
                      outras. Faça seu cadastro no banco de talentos dessas instituições.
                    </p>
                  </div>
                  <div className="relative pl-8 pb-8 border-l border-primary/30">
                    <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground -translate-x-1/2">
                      2
                    </div>
                    <h3 className="text-xl font-semibold">Participação em Processos Seletivos</h3>
                    <p className="text-muted-foreground mt-2">
                      Após o cadastro, você poderá ser convocado para participar de processos seletivos. Estes podem
                      incluir provas de conhecimentos gerais, redação, dinâmicas de grupo e entrevistas.
                    </p>
                  </div>
                  <div className="relative pl-8 pb-8 border-l border-primary/30">
                    <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground -translate-x-1/2">
                      3
                    </div>
                    <h3 className="text-xl font-semibold">Entrevistas com Empresas</h3>
                    <p className="text-muted-foreground mt-2">
                      Se aprovado nas etapas anteriores, você será encaminhado para entrevistas com as empresas
                      parceiras. Prepare-se adequadamente, pesquise sobre a empresa e vista-se de forma apropriada.
                    </p>
                  </div>
                  <div className="relative pl-8 pb-8 border-l border-primary/30">
                    <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground -translate-x-1/2">
                      4
                    </div>
                    <h3 className="text-xl font-semibold">Contratação e Início do Programa</h3>
                    <p className="text-muted-foreground mt-2">
                      Após aprovação, você será contratado como aprendiz. Será necessário apresentar a documentação
                      completa e assinar o contrato de aprendizagem, que tem duração máxima de 2 anos.
                    </p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground -translate-x-1/2">
                      5
                    </div>
                    <h3 className="text-xl font-semibold">Formação Teórica e Prática</h3>
                    <p className="text-muted-foreground mt-2">
                      Durante o programa, você alternará entre atividades teóricas na instituição formadora e atividades
                      práticas na empresa. É importante manter bom desempenho em ambas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Instituições que Oferecem o Programa</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        SENAI
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4">
                        <Image
                          src="https://www.portaldaindustria.com.br/canais/industria-de-a-a-z/static/images/senai-logo.png"
                          alt="Logo SENAI"
                          width={80}
                          height={40}
                          className="object-contain"
                        />
                        <p className="text-sm text-muted-foreground">
                          Serviço Nacional de Aprendizagem Industrial. Oferece programas de aprendizagem voltados para a
                          área industrial.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        SENAC
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4">
                        <Image
                          src="https://www.sp.senac.br/o/senac-theme/images/logo-senac.png"
                          alt="Logo SENAC"
                          width={80}
                          height={40}
                          className="object-contain"
                        />
                        <p className="text-sm text-muted-foreground">
                          Serviço Nacional de Aprendizagem Comercial. Oferece programas voltados para o comércio e
                          serviços.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        CIEE
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4">
                        <Image
                          src="https://www.ciee.org.br/portal/img/logo-ciee.png"
                          alt="Logo CIEE"
                          width={80}
                          height={40}
                          className="object-contain"
                        />
                        <p className="text-sm text-muted-foreground">
                          Centro de Integração Empresa-Escola. Oferece programas em diversas áreas e faz a ponte entre
                          jovens e empresas.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        Espro
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4">
                        <Image
                          src="https://www.espro.org.br/wp-content/themes/espro/assets/images/logo.png"
                          alt="Logo Espro"
                          width={80}
                          height={40}
                          className="object-contain"
                        />
                        <p className="text-sm text-muted-foreground">
                          Ensino Social Profissionalizante. Especializada na capacitação e inserção de jovens no mercado
                          de trabalho.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="flex justify-center pt-8">
                <Button size="lg" className="gap-2">
                  <Users className="h-5 w-5" />
                  Saiba mais
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Nova seção de ambiente escolar */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ambiente de Aprendizagem</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça os ambientes onde os jovens aprendizes desenvolvem suas habilidades.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="overflow-hidden rounded-xl bg-white shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop"
                    alt="Sala de aula"
                    width={600}
                    height={400}
                    className="h-64 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">Ambiente de Formação Teórica</h3>
                    <p className="text-muted-foreground">
                      Nas instituições formadoras, os aprendizes participam de aulas teóricas que complementam a
                      formação prática recebida nas empresas. São abordados temas como legislação trabalhista, ética
                      profissional, comunicação e trabalho em equipe.
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl bg-white shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=1000&auto=format&fit=crop"
                    alt="Ambiente de trabalho"
                    width={600}
                    height={400}
                    className="h-64 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">Ambiente de Formação Prática</h3>
                    <p className="text-muted-foreground">
                      Nas empresas, os aprendizes desenvolvem atividades práticas relacionadas à sua área de formação,
                      sempre sob a supervisão de profissionais qualificados. É neste ambiente que aplicam os
                      conhecimentos teóricos e desenvolvem habilidades específicas da profissão.
                    </p>
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
