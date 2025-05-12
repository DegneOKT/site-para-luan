import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Briefcase, Calendar } from "lucide-react"

interface ProfileCardProps {
  name: string
  age: number
  role: string
  company: string
  period: string
  description: string
}

export function ProfileCard({ name, age, role, company, period, description }: ProfileCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1000&auto=format&fit=crop"
          alt={`Foto de perfil de ${name}`}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>
          {name}, {age} anos
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">
              {role} - {company}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">{period}</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Programa Star Jovem</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
        <Button className="w-full">Ver perfil completo</Button>
      </CardContent>
    </Card>
  )
}
