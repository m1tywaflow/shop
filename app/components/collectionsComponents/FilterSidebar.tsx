type Size = "XS" | "S" | "M" | "L" | "XL" | "2X";

const sizes: Size[] = ["XS", "S", "M", "L", "XL", "2X"];

export default function FiltersSideBar() {
  return (
    <aside className="text-black w-104 border-r pr-6">
      <h2 className="text-xl font-semibold mb-6">Filters</h2>
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Size</h3>

        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              className="border px-3 py-1 text-lg hover:bg-gray-100"
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Availability</h3>
        <label className="flex items-center gap-2 mb-2">
          <input type="checkbox" />
          <span>Availability (450)</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          <span>Out Of Stock (18)</span>
        </label>
      </div>
      <FilterItem title="Category" />
      <FilterItem title="Colors" />
      <FilterItem title="Price Range" />
      <FilterItem title="Collections" />
      <FilterItem title="Tags" />
      <FilterItem title="Ratings" />
    </aside>
  );
}
function FilterItem({ title }: { title: string }) {
  return (
    <div className="border-t py-4 cursor-pointer flex justify-between">
      <span className="text-lg font-medium">{title}</span>
      <span>›</span>
    </div>
  );
}
