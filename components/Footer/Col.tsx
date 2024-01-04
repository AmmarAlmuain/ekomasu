export default function Col({
  header,
  list,
}: {
  header: string;
  list: string[];
}) {
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-y-2">
        <li className="text-primary font-medium decoration-transparent list-none">
          {header}
        </li>
        <ul className="flex flex-col justify-start items-start">
          {list.map((item) => {
            return (
              <li className="cursor-pointer" key={item}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
