import DeleteIcon from "../icons/DeleteIcon";
import ShareIcon from "../icons/ShareIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import checkMedia from "../utils/checkMedia";

interface CardPropsInterface {
  title: string;
  description?: string;
  link?: string;
  tags: string;
  type: string;
}

const Card = (props: CardPropsInterface) => {
  const MediaComponent = checkMedia(props.type);
  if(!MediaComponent) {
    return <>
      <h1>Sorry</h1>
    </>
  }
  return (
    <div className="px-4 py-6 border-2 m-8 border-slate-300 w-68 h-fit rounded-lg">
      {/* Card Header */}
      <div className="flex items-center justify-between">
        <div>
          <YoutubeIcon size="sm" />
        </div>
        <p className="font-medium">{props.title}</p>
        <div className="flex items-center gap-2">
          <ShareIcon size="sm" />
          <DeleteIcon size="sm" />
        </div>
      </div>

      {/* Card Main */}
      <div className="mt-3">
        {props.description && (
          <p className="text-justify">{props.description}</p>
        )}
        {props.link && (
          <div className="w-full h-fit">
            { <MediaComponent postLink={props.link} />}
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className="mt-3 flex gap-2 flex-wrap">
        <span className="bg-[var(--color-btnSecondary)] text-[var(--color-textSecondary)] px-2 py-1 rounded-full text-sm">
          {" #" + props.tags}
        </span>
      </div>
    </div>
  );
};

export default Card;
