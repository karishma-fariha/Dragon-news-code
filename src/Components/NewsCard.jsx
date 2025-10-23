import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar, FaRegStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, rating, total_view, thumbnail_url, details } = news;

  // Format date
  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="max-w-sm w-full bg-white shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex bg-base-200 items-center justify-between px-4 pt-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold text-gray-800">{author.name}</h3>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-primary flex items-center gap-1">
            <CiBookmark />
            <CiShare2 />


        </button>
      </div>

      {/* Image */}
      <div className="px-4 mt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full h-44 object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-4 text-sm text-gray-700">
        {
            details.length > 200?(
                <>{
                    details.slice(0,200)
                }...
                <span className="text-primary font-semibold hover:underline">Read More</span>
                </>
            ):(
                details
            )
        }
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4">
        <div className="flex items-center text-orange-500">
          {Array.from({ length: 5 }).map((_, i) =>
            i < rating.number ? (
              <FaStar key={i} className="text-orange-500" size={14} />
            ) : (
              <FaRegStar key={i} className="text-orange-500" size={14} />
            )
          )}
          <span className="ml-2 text-sm text-gray-700">{rating.number.toFixed(1)}</span>
        </div>

        <div className="flex items-center text-gray-600 gap-1">
          <FaEye size={14} />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
