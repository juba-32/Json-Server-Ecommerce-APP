export default function ProductSearch({ setSearchQuery }) {
  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search Products"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
    </div>
  );
}
