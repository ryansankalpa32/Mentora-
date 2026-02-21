export default function FiltersSidebar() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="font-semibold mb-4">Filters</h3>

      <div className="space-y-4 text-sm">
        <div>
          <label>Subject</label>
          <select className="w-full border p-2 rounded mt-1">
            <option>All District</option>
          </select>
        </div>

        <div>
          <label>Price Range</label>
          <input type="range" className="w-full mt-2" />
        </div>

        <div>
          <label>Minimum Rating</label>
          <div className="mt-2 space-y-1">
            <p>4.5+</p>
            <p>4.0+</p>
          </div>
        </div>

        <button className="w-full bg-gray-200 py-2 rounded">
          Clear All
        </button>
      </div>
    </div>
  );
}
