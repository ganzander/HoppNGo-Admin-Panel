"use client";
import { useForm } from "react-hook-form";
import TinyMCEEditor from "@/components/ui/tinyMCEEditor";

export default function ManageSupplier() {
  const { register, handleSubmit, control } = useForm();

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

            {/* Thumbnail Image */}
            <div className="grid grid-cols-1 gap-4 rounded-lg p-4"></div>

            {/* 5 Images */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 rounded-lg p-4"></div>
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
                <TinyMCEEditor name="tourKeyHighlights" control={control} />
              </div>

              {/* Tour Overview */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Tour Overview
                </label>
                <TinyMCEEditor name="tourOverview" control={control} />
              </div>

              {/* Tour Itinerary */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Tour Itinerary
                </label>
                <TinyMCEEditor name="tourItinerary" control={control} />
              </div>

              {/* Tour Schedule */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Tour Schedule
                </label>
                <TinyMCEEditor name="tourSchedule" control={control} />
              </div>

              {/* Duration (Tour Page) */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Duration (Tour Page)
                </label>
                <TinyMCEEditor name="tourDuration" control={control} />
              </div>

              {/* Ticket Redemption Information */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Ticket Redemption Information
                </label>
                <TinyMCEEditor
                  name="ticketRedemptionInformation"
                  control={control}
                />
              </div>

              {/* Pickup Available */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Pickup Available
                </label>
                <select
                  {...register("pickupAvailable")}
                  className="w-full p-2 border rounded text-gray-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose One Option
                  </option>
                </select>
              </div>

              {/* Know Before You Go */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Know Before You Go
                </label>
                <TinyMCEEditor name="knowBeforeYouGo" control={control} />
              </div>

              {/* Tour Cancellation Policy */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Tour Cancellation Policy
                </label>
                <TinyMCEEditor
                  name="tourCancellationPolicy"
                  control={control}
                />
              </div>

              {/* Tour Inclusion */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Tour Inclusion
                </label>
                <TinyMCEEditor name="tourInclusion" control={control} />
              </div>

              {/* Tour Exclusion */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Tour Exclusion
                </label>
                <TinyMCEEditor name="tourExclusion" control={control} />
              </div>

              {/* Tour Meta Title */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Tour Meta Title
                </label>
                <textarea
                  {...register("tourMetaTitle")}
                  className="w-full p-2 border rounded dark:placeholder:text-gray-500"
                  placeholder="Enter Meta Title"
                />
              </div>

              {/* Tour Meta Keywords */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Tour Meta Keywords
                </label>
                <textarea
                  {...register("tourMetaKeywords")}
                  className="w-full p-2 border rounded dark:placeholder:text-gray-500"
                  placeholder="Enter Meta Keywords"
                />
              </div>

              {/* Tour Meta Description */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Tour Meta Description
                </label>
                <textarea
                  {...register("tourMetaDescription")}
                  className="w-full p-2 border rounded dark:placeholder:text-gray-500"
                  placeholder="Enter Meta Description"
                />
              </div>
            </div>
          </div>

          <hr className="my-4 dark:bg-white bg-black h-[1.5px]" />

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded mt-4"
          >
            Add Supplier
          </button>
        </form>
      </div>
    </main>
  );
}
