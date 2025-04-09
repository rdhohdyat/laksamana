import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Fufufafa",
      position: "CEO & Founder",
      socials: ["instagram", "twitter", "linkedin"],
    },
    {
      name: "Fufufafa",
      position: "CEO & Founder",
      socials: ["instagram", "twitter", "linkedin"],
    },
    {
      name: "Fufufafa",
      position: "CEO & Founder",
      socials: ["instagram", "twitter", "linkedin"],
    },
    {
      name: "Fufufafa",
      position: "CEO & Founder",
      socials: ["instagram", "twitter", "linkedin"],
    },
    {
      name: "Fufufafa",
      position: "CEO & Founder",
      socials: ["instagram", "twitter", "linkedin"],
    },
    {
      name: "Fufufafa",
      position: "CEO & Founder",
      socials: ["instagram", "twitter", "linkedin"],
    },
  ];

  const renderSocialIcon = (social: string) => {
    switch (social) {
      case "instagram":
        return <Instagram size={18} />;
      case "twitter":
        return <Twitter size={18} />;
      case "facebook":
        return <Facebook size={18} />;
      case "linkedin":
        return <Linkedin size={18} />;
      default:
        return null;
    }
  };

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Tim Profesional Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami adalah tim yang terdiri dari individu berbakat dan
            berpengalaman yang berdedikasi untuk memberikan hasil terbaik bagi
            klien kami.
          </p>
        </div>

        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-4">
            {teamMembers.map((member, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/4 mb-5"
              >
                <Card className="rounded-xl overflow-hidden shadow-lg">
                  <CardContent className="p-0">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxTOc1Z5yT4gzy6apVD7dFJXL-nHVcYA3xg&s"
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-blue-600">{member.position}</p>
                      <div className="flex space-x-3 mt-4">
                        {member.socials.map((social, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="text-gray-400 hover:text-blue-600 transition duration-300"
                          >
                            {renderSocialIcon(social)}
                          </a>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 space-x-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Team;
