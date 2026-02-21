export default function HeroSection() {
  return (
    <section
      className="h-[600px] bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative text-center text-white max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">
          Find Your Best Tutor
        </h1>
        <p className="mb-8 text-lg">
          Beginning journey with us....
        </p>

        <div className="flex bg-white rounded-lg overflow-hidden shadow-lg">
          <input
            type="text"
            placeholder="What you discover"
            className="px-6 py-4 flex-1 text-gray-700 outline-none"
          />
          <button className="bg-green-500 px-6 text-white font-semibold">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
