export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white px-8">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Nearby tutor
          </h3>
          <p className="text-sm text-gray-500">
            You can find tutors near your location.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">
            Learn from the best
          </h3>
          <p className="text-sm text-gray-500">
            Filter and select the best tutors.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">
            No subscription fees
          </h3>
          <p className="text-sm text-gray-500">
            This platform is completely free.
          </p>
        </div>
      </div>
    </section>
  );
}
