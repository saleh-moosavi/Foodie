type CategoriesItemType = {
  img: string;
  title: string;
  color: string;
};
export default function CategoriesItem(props: CategoriesItemType) {
  return (
    <div
      className="font-semibold flex flex-col items-center gap-y-9 p-10 justify-center rounded-xl w-40"
      style={{
        background: `linear-gradient(to top, ${props.color} , transparent)`,
      }}
    >
      <img className="h-20" src={props.img} />
      <p>{props.title}</p>
    </div>
  );
}
