import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSharedContent, shareContent } from "../store/content/contentThunk";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import type { Content } from "../store/content/contentType";
import Card from "../components/Card";
const SharedContent = () => {
  const { shareId } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const { sharedContent } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    function fetchContent() {
      if (!sharedContent || (shareContent.length <= 0 && shareId)) {
        dispatch(getSharedContent(shareId!));
      }
    }
    fetchContent();
  }, []);
  return (
    <div className="w-screen overflow-x-hidden px-10 py-4">
      <p className="text-2xl">Shared Second Brain</p>
      <div className="columns-5 mt-8">
          {sharedContent &&
            sharedContent.length > 0 &&
            sharedContent.map((content: Content) => {
              return (
                <Card
                  key={content._id}
                  title={content.title}
                  tags={content.tags.map((tag) => tag)}
                  type={content.type}
                  link={content.link}
                />
              );
            })}

      </div>
    </div>
  );
};

export default SharedContent;
