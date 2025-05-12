import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, GraduationCap } from "lucide-react"
import { ProfileCard } from "@/components/profile-card"

export default function Depoimentos() {
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
            <Link href="/entrevista" className="transition-colors hover:text-foreground/80">
              Entrevista
            </Link>
            <Link href="/depoimentos" className="transition-colors hover:text-foreground/80 text-primary font-bold">
              Depoimentos
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Depoimentos de Aprendizes
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Conheça as histórias de sucesso de jovens que participaram do programa Menor Aprendiz e transformaram
                  suas vidas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProfileCard
                name="João Silva"
                age={19}
                role="Assistente Administrativo"
                company="ABC Tecnologia"
                period="2023 - Atual"
                description="Comecei como aprendiz e hoje sou efetivado. O programa foi fundamental para meu desenvolvimento profissional e pessoal."
              />

              <ProfileCard
                name="Maria Oliveira"
                age={20}
                role="Auxiliar de RH"
                company="Empresa XYZ"
                period="2022 - Atual"
                description="Através do programa, descobri minha vocação na área de Recursos Humanos. Hoje curso Gestão de RH e trabalho na área."
              />

              <ProfileCard
                name="Pedro Santos"
                age={18}
                role="Técnico em Informática"
                company="Tech Solutions"
                period="2024 - Atual"
                description="O programa me proporcionou conhecimentos técnicos e comportamentais essenciais para minha carreira na área de TI."
              />

              <ProfileCard
                name="Ana Souza"
                age={21}
                role="Assistente Financeiro"
                company="Banco Nacional"
                period="2021 - Atual"
                description="Graças ao programa, consegui meu primeiro emprego e hoje estou cursando Ciências Contábeis com bolsa parcial."
              />

              <ProfileCard
                name="Lucas Ferreira"
                age={19}
                role="Auxiliar de Logística"
                company="Transportadora Rápida"
                period="2023 - Atual"
                description="O programa me ensinou sobre responsabilidade e comprometimento. Hoje sou efetivado e continuo aprendendo cada dia mais."
              />

              <ProfileCard
                name="Juliana Costa"
                age={20}
                role="Recepcionista"
                company="Hotel Central"
                period="2022 - Atual"
                description="Desenvolvi habilidades de comunicação e atendimento ao cliente que foram essenciais para minha efetivação na empresa."
              />
            </div>

            <div className="flex justify-center mt-12">
              <Button size="lg">Compartilhe sua história</Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Estatísticas de Sucesso</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  O programa Menor Aprendiz tem transformado a vida de milhares de jovens em todo o Brasil.
                </p>
              </div>
            </div>

            <div className="grid gap-6 mt-12 md:grid-cols-3">
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                <span className="text-4xl font-bold text-primary">75%</span>
                <p className="text-center mt-2">dos aprendizes conseguem efetivação ou novo emprego após o programa</p>
              </div>

              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                <span className="text-4xl font-bold text-primary">450 mil</span>
                <p className="text-center mt-2">jovens beneficiados pelo programa em todo o Brasil</p>
              </div>

              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                <span className="text-4xl font-bold text-primary">92%</span>
                <p className="text-center mt-2">dos participantes relatam melhoria na qualidade de vida</p>
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
