"use client";
import { useForm } from "react-hook-form";

export default function ManageSupplier() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
      <div className="container px-6 py-8">
        <h1 className="text-3xl font-semibold mb-6">Add Tours</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-md rounded-lg p-6 space-y-8"
        >
          <h4 className="text-base md:text-xl my-2">
            Basic Information of Tours
          </h4>

          {/* 1st Part */}
          <div className="border rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-lg p-4">
              {/* Supplier */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Select Supplier
                </label>
                <select
                  {...register("supplier")}
                  className="w-full p-2 border rounded text-gray-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose One Vendor
                  </option>
                </select>
              </div>

              {/* Tour Code */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Tour Code
                </label>
                <input
                  {...register("tourCode")}
                  className="w-full p-2 border rounded placeholder:text-gray-500"
                  type="text"
                />
              </div>

              {/* Coupon Code */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Coupon Code
                </label>
                <input
                  {...register("couponCode")}
                  className="w-full p-2 border rounded placeholder:text-gray-500"
                  type="text"
                  placeholder=""
                />
              </div>

              {/* Tour Category */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Tour Category
                </label>
                <select
                  {...register("tourCategory")}
                  className="w-full p-2 border rounded text-gray-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose One Category
                  </option>
                </select>
              </div>

              {/* Tour Cities */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Select Tour Cities
                </label>
                <input
                  {...register("tourCities")}
                  className="w-full p-2 border rounded placeholder:text-gray-500"
                  type="text"
                  placeholder="Select Cities"
                />
              </div>

              {/* Tour Attractions */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Select Tour Attractions
                </label>
                <input
                  {...register("tourAttractions")}
                  className="w-full p-2 border rounded placeholder:text-gray-500"
                  type="text"
                  placeholder="Select Attractions"
                />
              </div>
            </div>
          </div>

          <hr className="my-4 dark:bg-white bg-black h-[1.5px]" />

          {/* 2nd Part */}
          <div className="border rounded-lg">
            <div className="grid grid-cols-1 gap-4 rounded-lg p-4">
              {/* Tour Name */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Tour Name
                </label>
                <input
                  {...register("tourName")}
                  className="w-full p-2 border rounded placeholder:text-gray-500"
                  type="text"
                />
              </div>

              {/* Tour Duration */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Tour Duration
                </label>
                <input
                  {...register("tourDuration")}
                  className="w-full p-2 border rounded placeholder:text-gray-500"
                  type="text"
                />
              </div>

              {/* Show Tour On */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Show Tour On
                </label>
                <select
                  {...register("showTourOn")}
                  className="w-full p-2 border rounded text-gray-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose One Option
                  </option>
                </select>
              </div>

              {/* Tour Short Text */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Tour Short Text
                </label>
                <textarea
                  rows={5}
                  {...register("tourShortText")}
                  className="w-full p-2 border rounded dark:placeholder:text-gray-500"
                  placeholder="Enter Short Text about this Tour"
                />
              </div>

              {/* Tour Key Highlights */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Tour Key Highlights
                </label>
                <textarea
                  rows={5}
                  {...register("tourKeyHighlights")}
                  className="w-full p-2 border rounded dark:placeholder:text-gray-500 h-100"
                  placeholder="Enter Key Highlights"
                />
              </div>

              {/* Tour Overview */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Tour Overview
                </label>
                <textarea
                  rows={5}
                  {...register("tourOverview")}
                  className="w-full p-2 border rounded dark:placeholder:text-gray-500"
                  placeholder="Enter Tour Overview"
                />
              </div>

              {/* Tour Itinerary */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Tour Itinerary
                </label>
                <textarea
                  rows={5}
                  {...register("tourItinerary")}
                  className="w-full p-2 border rounded dark:placeholder:text-gray-500"
                  placeholder="Enter Tour Itinerary"
                />
              </div>

              {/* Tour Schedule */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Tour Schedule
                </label>
                <textarea
                  rows={5}
                  {...register("tourSchedule")}
                  className="w-full p-2 border rounded dark:placeholder:text-gray-500"
                  placeholder="Enter Tour Schedule"
                />
              </div>

              {/* Ticket Redemption Information */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Ticket Redemption Information
                </label>
                <textarea
                  rows={5}
                  {...register("ticketRedemptionInformation")}
                  className="w-full p-2 border rounded dark:placeholder:text-gray-500"
                  placeholder="Enter Ticket Redemption Information"
                />
              </div>

              {/* Know Before You Go */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Know Before You Go
                </label>
                <textarea
                  rows={5}
                  {...register("knowBeforeYouGo")}
                  className="w-full p-2 border rounded dark:placeholder:text-gray-500"
                  placeholder="Enter Information"
                />
              </div>

              {/* Tour Cancellation Policy */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Tour Cancellation Policy
                </label>
                <textarea
                  rows={5}
                  {...register("tourCancellationPolicy")}
                  className="w-full p-2 border rounded dark:placeholder:text-gray-500"
                  placeholder="Enter Cancellation Policy"
                />
              </div>

              {/* Tour Inclusion */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Tour Inclusion
                </label>
                <textarea
                  rows={5}
                  {...register("tourInclusion")}
                  className="w-full p-2 border rounded dark:placeholder:text-gray-500"
                  placeholder="Enter Inclusions"
                />
              </div>

              {/* Tour Exclusion */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Tour Exclusion
                </label>
                <textarea
                  rows={5}
                  {...register("tourExclusion")}
                  className="w-full p-2 border rounded dark:placeholder:text-gray-500"
                  placeholder="Enter Exclusions"
                />
              </div>

              {/* Tour Meta Title */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Tour Meta Title
                </label>
                <textarea
                  rows={3}
                  {...register("tourMetaTitle")}
                  className="w-full p-2 border rounded dark:placeholder:text-gray-500"
                  placeholder="Enter Title"
                />
              </div>

              {/* Tour Meta Description */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Tour Meta Description
                </label>
                <textarea
                  rows={3}
                  {...register("tourMetaDescription")}
                  className="w-full p-2 border rounded dark:placeholder:text-gray-500"
                  placeholder="Enter Description"
                />
              </div>

              {/* Tour Meta Keyword */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Tour Meta Keyword
                </label>
                <textarea
                  rows={3}
                  {...register("tourMetaKeyword")}
                  className="w-full p-2 border rounded dark:placeholder:text-gray-500"
                  placeholder="Enter Keywords"
                />
              </div>
            </div>
          </div>

          <hr className="my-4 dark:bg-white bg-black h-[1.5px]" />

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded mt-4"
          >
            Add Tour
          </button>
        </form>
      </div>
    </main>
  );
}
