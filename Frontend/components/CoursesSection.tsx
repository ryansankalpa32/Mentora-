import CourseCard from "@/components/CourseCard";
import Link from "next/link";
export default function Home() {
  const courses = [
    {
      title: "Advanced Level : Physics",
      teacher: "Thilak Perera",
      rating: "4.8",
      image: "/Physics.jpg",
      qualification: "BSc (Hons) in Engineering – University of Colombo",
      location: "Colombo"
    },
    {
      title: "Advanced Level : Biology",
      teacher: "Nadeesha Silva",
      rating: "4.6",
      image: "/biology.jpg",
      qualification: "BSc (Hons) in Science – University of Kelaniya",
      location: "Kandy"
    },
    {
      title: "Advanced Level : Mathematics",
      teacher: "Kasun Fernando",
      rating: "4.9",
      image: "/maths.jpg",
      qualification: "BSc (Hons) in Engineering – University of Peradeniya",
      location: "Gampaha"
    },
     {
      title: "Advanced Level : ICT",
      teacher: "Eshan Dias",
      rating: "4.8",
      image: "/ictol.jpg",
      qualification: "BSc (Hons) in Information Technology – University of Moratuwa",
      location: "Colombo"
    },
     {
      title: "Ordinary Level : Science",
      teacher: "Isuru Lakdinu",
      rating: "4.8",
      image: "/Science.jpg",
      qualification: "BSc (Hons) in Science – University of Peradeniya",
      location: "Kandy"
    },
     {
      title: "Advanced Level : Chemistry",
      teacher: "Sithum Perera",
      rating: "4.8",
      image: "/chemistry.jpg",
      qualification: "BSc (Hons) in Chemistry – University of Colombo",
      location: "Colombo"
    },
     {
      title: "Advanced Level : Business Studies",
      teacher: "Dinura Halwitige",
      rating: "4.8",
      image: "/Business Studies.jpg",
      qualification: "BSc (Hons) in Business Studies – University of Moratuwa",
      location: "Kandy"
    },
     {
      title: "Advanced Level : Web Development",
      teacher: "Chirath Esandu",
      rating: "4.8",
      image: "/webdev.jpg",
      qualification: "BSc (Hons) in Computer Science – University of Moratuwa",
      location: "Colombo"
    },
  ];

  return (
  <div className="p-10">
    
    {/* Cards Grid */}
    <div className="grid md:grid-cols-4 gap-10">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          title={course.title}
          teacher={course.teacher}
          rating={course.rating}
          image={course.image}
           qualification={course.qualification}
  location={course.location}
          
        />
      ))}
    </div>

    {/* View All Button */}
    <div className="flex justify-center mt-10">
      <Link href="/tutors">
        <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white font-semibold px-10 py-3 rounded-full shadow-lg transition">
  View All Tutors →
</button>
      </Link>
    </div>

  </div>
);
}