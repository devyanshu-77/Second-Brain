
import DeleteIcon from "../icons/DeleteIcon";
import ShareIcon from "../icons/ShareIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import MediaViewer from "./MediaViewer";

interface CardPropsInterface {
  title: string;
  description?: string;
  link?: string;
  tags: string;
  type: string;
}

const Card = (props: CardPropsInterface) => {
  return (
    <div className="px-4 py-6 border-2 m-8 border-slate-300 w-68 h-fit rounded-lg">
      {/* Card Header */}
      <div className="flex items-center justify-between">
        <div>
          <YoutubeIcon size="sm" />
        </div>
        <p className="font-medium">Learn React Properly</p>
        <div className="flex items-center gap-2">
          <ShareIcon size="sm" />
          <DeleteIcon size="sm" />
        </div>
      </div>

      {/* Card Main */}
      <div className="mt-3">
        <p className="text-justify">{props.description}</p>
        <div className="w-full">
            <embed className="w-full" src={`${props.link}`} type="" />
        </div>
      </div>

      {/* Card Footer */}
      <div className="mt-3 flex gap-2 flex-wrap">
        <span className="bg-[var(--color-btnSecondary)] text-[var(--color-textSecondary)] px-2 py-1 rounded-full text-sm">
          #Productivity
        </span>
      </div>
    </div>
  );
};

export default Card;
