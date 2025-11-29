import Image from "next/image"

interface LogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
  textColor?: "light" | "dark"
}

export default function Logo({ className = "", showText = true, size = "md", textColor = "dark" }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl",
  }

  const textColorClasses = textColor === "light" 
    ? "text-white [&_span:last-child]:text-blue-300"
    : "text-foreground [&_span:last-child]:text-primary"

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizeClasses[size]} flex items-center justify-center flex-shrink-0 relative`}>
        <Image
          src="/vertexlogo.png"
          alt="Vertex Code Solutions"
          width={size === "sm" ? 32 : size === "md" ? 48 : 64}
          height={size === "sm" ? 32 : size === "md" ? 48 : 64}
          className="object-contain drop-shadow-lg"
          priority
        />
      </div>
      {showText && (
        <div className={`flex flex-col ${textColorClasses}`}>
          <span className={`font-bold ${textSizeClasses[size]}`}>
            Vertex Code
          </span>
          <span className={`text-xs leading-none ${size === "sm" ? "text-xs" : size === "lg" ? "text-sm" : "text-xs"}`}>
            Solutions
          </span>
        </div>
      )}
    </div>
  )
}

