import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {["Services", "Work", "About", "Contact", "Privacy", "Terms"].map((item) => (
            <div key={item} className="pb-6">
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-sm leading-6 text-muted-foreground hover:text-foreground"
              >
                {item}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center">
          <img className="h-12 w-auto" src="/placeholder.svg?height=48&width=150" alt="URBA TECH Logo" />
        </div>
        <p className="mt-10 text-center text-sm leading-5 text-muted-foreground">
          &copy; {new Date().getFullYear()} URBA TECH INTERNATIONAL. All rights reserved.
        </p>
        <p className="mt-2 text-center text-sm leading-5 text-muted-foreground">
          AIN BERDA, BIZERTE NORD 7029, TUNISIA
        </p>
      </div>
    </footer>
  )
}

