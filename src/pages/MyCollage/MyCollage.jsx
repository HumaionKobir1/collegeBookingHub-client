import { useState } from "react";

const MyCollage = () => {

  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleSubmitReview = (event) => {
    event.preventDefault();

    // Create a new review object
    const newReview = {
      review,
      rating,
      date: new Date().toLocaleDateString(), // Add a timestamp or any other date format you prefer
    };

    // Add the new review to the reviews array
    setReviews([...reviews, newReview]);

    // Reset review and rating input fields
    setReview('');
    setRating(0);
  };

  return (
    <div className="">
      <div className=" banner relative bg-gradient-to-r from-blue-500 to-purple-500 py-12">
                <div
                    className="absolute top-0 left-0 right-0 bottom-0 opacity-40 bg-black"
                />
                <div
                    className="absolute top-0 left-0 right-0 bottom-0"
                    
                />
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-10 relative">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                            MY Admission University
                        </h1>
                    </div>
                </div>
        </div>
      
      <div className="md:w-3/4 w-full mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div >
        <h1 className="text-2xl font-semibold">My Details</h1>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex items-center space-x-4 p-4">
            <img
            className="h-16 w-16 rounded-full object-cover"
            src="path/to/userImg.jpg"
            alt="User"
            />
            <div>
            <h2 className="text-xl font-semibold">Humaion Kobir</h2>
            <p className="text-gray-600">Subject: Mathematics</p>
            <p className="text-gray-600">Date: July 24, 2023</p>
            <p className="text-gray-600">Email: humaionkobir.com</p>
            <p className="text-gray-600">Phone: +88019215452</p>
            </div>
        </div>
        </div>
      </div>
        <h2 className="text-xl font-semibold">Add a Review</h2>
        <form onSubmit={handleSubmitReview}>
          <div className="flex flex-col space-y-2">
            <textarea
              className="border rounded-md resize-none p-2"
              rows="4"
              placeholder="Write your review..."
              value={review}
              onChange={handleReviewChange}
              required
            ></textarea>
            <div className="flex items-center space-x-2">
              <label>Rating:</label>
              <select
                className="border rounded-md p-2"
                value={rating}
                onChange={handleRatingChange}
                required
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
              type="submit"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold">Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul className="space-y-2">
            {reviews.map((review, index) => (
              <li key={index}>
                <p>{review.review}</p>
                <p>Rating: {review.rating}</p>
                <p>Date: {review.date}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyCollage;