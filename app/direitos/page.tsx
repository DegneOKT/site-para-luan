import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft, FileText, GraduationCap, ShieldCheck, AlertTriangle } from "lucide-react"

export default function Direitos() {
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
            <Link href="/direitos" className="transition-colors hover:text-foreground/80 text-primary font-bold">
              Direitos e Deveres
            </Link>
            <Link href="/entrevista" className="transition-colors hover:text-foreground/80">
              Entrevista
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
                  Direitos e Deveres do Jovem Aprendiz
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Conheça os principais direitos e deveres garantidos pela legislação do programa.
                </p>
              </div>
              <div className="mx-auto w-full max-w-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=1000&auto=format&fit=crop"
                  alt="Jovem aprendiz em ambiente de trabalho"
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
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  Direitos do Jovem Aprendiz
                </h2>
                <p className="text-muted-foreground">
                  A Lei de Aprendizagem garante diversos direitos aos jovens aprendizes. Conheça os principais:
                </p>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Remuneração</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p>
                          O aprendiz tem direito ao salário mínimo hora, calculado com base no valor do salário mínimo
                          nacional vigente, proporcional à jornada de trabalho.
                        </p>
                        <p>
                          Algumas empresas podem oferecer valores acima do mínimo estabelecido por lei, bem como
                          benefícios adicionais.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Jornada de Trabalho</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p>
                          A jornada de trabalho do aprendiz é de no máximo 6 horas diárias para quem não concluiu o
                          ensino fundamental.
                        </p>
                        <p>
                          Para quem já concluiu o ensino fundamental, a jornada pode ser de até 8 horas diárias, desde
                          que sejam computadas as horas de atividades teóricas.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Férias</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p>
                          O aprendiz tem direito a férias de 30 dias, que devem coincidir, preferencialmente, com as
                          férias escolares.
                        </p>
                        <p>
                          As férias são remuneradas com acréscimo de 1/3 sobre o salário normal, conforme determina a
                          Constituição Federal.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>13º Salário</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p>
                          O aprendiz tem direito ao 13º salário, que deve ser pago em duas parcelas: a primeira até 30
                          de novembro e a segunda até 20 de dezembro.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>FGTS</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p>
                          O aprendiz tem direito ao Fundo de Garantia do Tempo de Serviço (FGTS), com alíquota de 2% da
                          remuneração (diferente dos 8% dos contratos de trabalho regulares).
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  Deveres do Jovem Aprendiz
                </h2>
                <p className="text-muted-foreground">
                  Além dos direitos, o aprendiz também possui deveres que devem ser cumpridos durante o programa.
                  Conheça os principais:
                </p>

                <Card className="mb-4">
                  <CardHeader>
                    <CardTitle>Frequência e Desempenho Escolar</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      O aprendiz deve manter frequência escolar regular e bom desempenho, caso ainda não tenha concluído
                      o ensino médio.
                    </p>
                    <p>
                      A empresa e a instituição formadora podem solicitar periodicamente comprovantes de frequência e
                      boletins escolares.
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-4">
                  <CardHeader>
                    <CardTitle>Frequência às Aulas Teóricas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      O aprendiz deve frequentar regularmente as aulas teóricas na instituição formadora, conforme
                      cronograma estabelecido.
                    </p>
                    <p>As faltas devem ser justificadas e, quando possível, comunicadas com antecedência.</p>
                  </CardContent>
                </Card>

                <Card className="mb-4">
                  <CardHeader>
                    <CardTitle>Cumprimento da Jornada de Trabalho</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      O aprendiz deve cumprir a jornada de trabalho estabelecida no contrato, respeitando os horários de
                      entrada e saída.
                    </p>
                    <p>Eventuais atrasos ou faltas devem ser comunicados e justificados ao supervisor imediato.</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Legislação Aplicável</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        Lei 10.097/2000
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Conhecida como Lei da Aprendizagem, alterou dispositivos da CLT para estabelecer as bases do
                        programa de aprendizagem profissional.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        Decreto 5.598/2005
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Regulamenta a contratação de aprendizes, estabelecendo diretrizes para a implementação do
                        programa.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="flex justify-center pt-8">
                <Link href="/">
                  <Button size="lg" className="gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Voltar para a página inicial
                  </Button>
                </Link>
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
