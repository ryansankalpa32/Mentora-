import Image from "next/image";

export default function CourseCard() {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
      <Image
        src="/course.jpg"
        alt="Course"
        width={400}
        height={200}
        className="rounded-t-xl"
      />

      <div className="p-4">
        <h4 className="font-semibold mb-2">
          Advanced Level : Physics
        </h4>
        <p className="text-sm text-gray-500 mb-2">
          by Thilak Perera
        </p>
        <p className="text-yellow-500 text-sm">⭐ 4.8</p>
      </div>
    </div>
  );
}
