import React from "react";

const Review = ({ review }) => {
  const { name, img, review: userReview, location } = review;
  return (
    <section className="mt-16">
      <div className="card shadow-xl">
        <div className="card-body">
          <p>{userReview}</p>
          <div className="flex items-center gap-7 mt-8">
            <div className="avatar ">
              <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} alt="" />
              </div>
            </div>
            <div>
              <h5 className="text-lg">{name}</h5>
              <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
