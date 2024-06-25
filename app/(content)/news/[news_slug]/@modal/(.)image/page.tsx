"use client";

import { notFound, useRouter } from "next/navigation";

import { getNewsForSlug } from "@/lib/news";

const InterceptedImagePage = ({
  params,
}: Readonly<{ params: { news_slug: string } }>) => {
  const router = useRouter();
  const newsItem = getNewsForSlug(params.news_slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
