import DeleteIcon from "../icons/DeleteIcon";
import ShareIcon from "../icons/ShareIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import checkMedia from "../utils/checkMedia";
import ErrorFallback from "./ErrorFallback";

interface CardPropsInterface {
  title: string;
  link?: string;
  tags: string;
  type: string;
}

const Card = (props: CardPropsInterface) => {
  const MediaComponent = checkMedia(props.type);
  return (
    <div className="px-4 py-6 bg-white border-2 border-slate-300 w-68 h-fit rounded-lg break-inside-avoid mt-3">
      {/* Card Header */}
      <div className="flex items-center justify-between">
        <div>
          <YoutubeIcon color="dark" size="sm" />
        </div>
        <p className="font-medium">{props.title}</p>
        <div className="flex items-center gap-2">
          <ShareIcon color="dark" size="sm" />
          <DeleteIcon color="dark" size="sm" />
        </div>
      </div>

      {/* Card Main */}
      <div className="mt-3">
        {props.link && (
          <div className="w-full h-fit">
            {MediaComponent && <MediaComponent postLink={props.link} />}
            {!MediaComponent && <ErrorFallback />}
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
