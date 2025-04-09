import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Team = () => {
  const teamMembers = [
    {
      name: "Fufufafa",
      position: "Affiliate Aktif",
    },
    {
      name: "Fufufafa",
      position: "Affiliate Aktif",
    },
    {
      name: "Fufufafa",
      position: "Affiliate Aktif",
    },
    {
      name: "Fufufafa",
      position: "Affiliate Aktif",
    },
    {
      name: "Fufufafa",
      position: "Affiliate Aktif",
    },
    {
      name: "Fufufafa",
      position: "Affiliate Aktif",
    },
    {
      name: "Fufufafa",
      position: "Affiliate Aktif",
    },
  ];

  return (
    <section id="team" className="py-20 overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Tim Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Inilah beberapa orang hebat yang telah bergabung bersama kami untuk
            mempromosikan berbagai produk melalui sistem afiliasi.
          </p>
        </div>

        <Carousel className="w-full mx-auto">
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 lg:basis-1/4 mb-5"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="rounded-xl overflow-hidden shadow p-0 hover:shadow-xl transition-all ease-in-out">
                    <CardContent className="p-0">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxTOc1Z5yT4gzy6apVD7dFJXL-nHVcYA3xg&s"
                        alt={member.name}
                        className="w-full h-36 lg:h-64 object-cover"
                      />
                      <div className="p-4 text-center">
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-sm text-gray-500">{member.position}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 ">
            <CarouselPrevious className="ml-16" />
            <CarouselNext  className="mr-16"/>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Team;
