import { notFound } from "next/navigation";

import { getNewsItem } from "@/lib/news";
import ModalBackdrop from "@/components/modal-backdrop";

const InterceptedImagePage = async ({
  params,
}: Readonly<{ params: { news_slug: string } }>) => {
  const newsItem = await getNewsItem(params.news_slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
