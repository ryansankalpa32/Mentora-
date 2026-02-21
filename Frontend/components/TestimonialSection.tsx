export default function TestimonialSection() {
  return (
    <section className="py-20 bg-gray-100 px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow grid md:grid-cols-2">
        <div className="p-8">
          <p className="text-gray-600 mb-4">
            This teacher is highly effective
          </p>
          <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
          <p className="mt-4 font-semibold">Sonal Perera</p>
        </div>

        <div className="bg-black text-white p-8 flex flex-col justify-center">
          <h4 className="text-xl font-semibold mb-2">
            Jehan Fernando
          </h4>
          <p className="text-sm text-gray-300">
            An A/L ICT tutor currently completing BSc in IT.
          </p>
        </div>
      </div>
    </section>
  );
}
