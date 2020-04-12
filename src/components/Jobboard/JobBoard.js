import React from "react";

const JobBoard = ({
  job: {
    id,
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
}) => {
  const tags = [role, level];
  if (languages) {
    tags.push(...languages);
  }
  if (tools) {
    tags.push(...tools);
  }

  return (
    <>
      <div
        className={`flex flex-col bg-white shadow-lg mx-2 my-16 p-6 rounded-lg ${
          featured && "border-l-4 border-teal-600 border-solid"
        } sm:flex-row sm:mx-8 sm:my-8`}
      >
        <div className="sm:flex sm:items-center">
          <img
            className="max-w-sm -mt-16 mb-4 sm:my-0 sm:py-0 sm:w-40 sm:h-40 sm:ml-4"
            src={logo}
            alt={`${company} Logo`}
          />
        </div>
        <div className="flex flex-col justify-evenly ml-4">
          <h4 className="font-bold text-blue-600 text-base flex flex-wrap">
            {company}
            {isNew && (
              <span className="ml-4 text-xs m-1 py-1 px-2 rounded-full font-bold text-white bg-teal-600">
                NEW
              </span>
            )}
            {featured && (
              <span className="text-xs m-1 py-1 px-2 rounded-full font-bold text-white bg-gray-800">
                FEATURED
              </span>
            )}
          </h4>
          <h2 className="font-bold text-xl my-2">{position}</h2>
          <p className="font-thin text- text-gray-700">
            {postedAt} • {contract} • {location}
          </p>
        </div>
        <div className="flex flex-wrap items-center my-2 mx-2 pt-4 border-t border-gray-400 border-solid sm:border-0 sm:ml-auto">
          {tags
            ? tags.map((tag) => (
                <span className="text-sm mr-2 mb-2 p-2 rounded-lg font-bold text-teal-600 bg-teal-100">
                  {tag}
                </span>
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

export default JobBoard;
