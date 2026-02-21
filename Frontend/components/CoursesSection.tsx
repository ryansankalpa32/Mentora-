import FiltersSidebar from "./FiltersSidebar";
import CourseCard from "./CourseCard";

export default function CoursesSection() {
  return (
    <section className="py-16 px-8 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <FiltersSidebar />

        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button className="border border-green-500 text-green-500 px-6 py-3 rounded-lg">
          View All Tutors
        </button>
      </div>
    </section>
  );
}
