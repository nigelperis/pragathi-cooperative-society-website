import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">

          <div className="animate-fade-in text-center">
          <h1 className="mb-4 text-5xl font-bold text-primary">Our Services</h1>
          <p className="mx-auto mb-16 max-w-3xl text-xl text-muted-foreground">
            Pragathi Co-operative Society Services
          </p>
        </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/services/services.jpeg"
              alt="Pragathi Co-operative Society Services"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}