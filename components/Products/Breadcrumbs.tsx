export default function Breadcrumbs() {
  return (
    <>
      <div className="h-16 w-full px-4 text-secondary flex justify-start items-center">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
            <li>Add Document</li>
          </ul>
        </div>
      </div>
    </>
  );
}
