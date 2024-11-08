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
        <h1 className="text-3xl font-semibold mb-6">Add Vendors</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-md rounded-lg p-6 space-y-8"
        >
          {/* Vendor Login Details */}
          <div>
            <h4 className="text-base md:text-xl my-2">Vendor Login Details</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 border rounded-lg p-4">
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Username
                </label>
                <input
                  {...register("username")}
                  className="w-full p-2 border rounded placeholder:text-gray-500"
                  type="text"
                  placeholder="Username"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-white">
                  Login Password
                </label>
                <input
                  {...register("password")}
                  className="w-full p-2 border rounded placeholder:text-gray-500"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>

          <hr className="my-4 dark:bg-white bg-black h-[1.5px]" />

          {/* Vendor Details */}
          <div>
            <h4 className="text-base md:text-xl my-2">Vendor Details</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 border rounded-lg p-4">
              {/* Supplier Name */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Supplier Name
                </label>
                <input
                  {...register("supplierName")}
                  className="w-full p-2 border rounded placeholder:text-gray-500"
                  type="text"
                  placeholder="Supplier Name"
                />
              </div>

              {/* Supplier Logo */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Supplier Logo
                </label>
                <input
                  {...register("supplierLogo")}
                  className="w-full p-2 border rounded dark:bg-black"
                  type="file"
                  multiple
                />
              </div>

              {/* Sightseeing Account Manager Email */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Sightseeing Account Manager Email
                </label>
                <input
                  {...register("sightseeingAccountManagerEmail")}
                  className="w-full p-2 border rounded dark:placeholder:text-gray-500"
                  type="email"
                  placeholder="Sightseeing Account Manager Email"
                />
              </div>

              {/* Booking Notification Email */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Booking Notification Email
                </label>
                <input
                  {...register("bookingNotificationEmail")}
                  className="w-full p-2 border rounded dark:placeholder:text-gray-500"
                  type="email"
                  placeholder="Booking Notification Email"
                />
              </div>

              {/* Supplier Department Email */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Supplier Department Email
                </label>
                <input
                  {...register("supplierDepartmentEmail")}
                  className="w-full p-2 border rounded dark:placeholder:text-gray-500"
                  type="email"
                  placeholder="Supplier Department Email"
                />
              </div>

              {/* Customer Care Number */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Customer Care Number
                </label>
                <input
                  {...register("customerCareNumber")}
                  className="w-full p-2 border rounded dark:placeholder:text-gray-500"
                  type="text"
                  placeholder="Customer Care Number"
                />
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  WhatsApp Number
                </label>
                <input
                  {...register("whatsappNumber")}
                  className="w-full p-2 border rounded dark:placeholder:text-gray-500"
                  type="text"
                  placeholder="WhatsApp Number"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Supplier Country
                </label>
                <select
                  {...register("supplierCountry")}
                  className="w-full p-2 border rounded text-gray-500"
                >
                  <option value="" selected disabled>
                    Choose One Country
                  </option>
                </select>
              </div>

              {/* City */}
              <div>
                <label className="block text-gray-700 dark:text-white">
                  Supplier City
                </label>
                <select
                  {...register("supplierCity")}
                  className="w-full p-2 border rounded text-gray-500"
                >
                  <option value="" selected disabled>
                    Choose City
                  </option>
                </select>
              </div>

              {/* Supplier Address */}
              <div>
                <label className="block dark:text-white text-gray-700">
                  Supplier Address
                </label>
                <textarea
                  {...register("supplierAddress")}
                  className="w-full p-2 border rounded dark:placeholder:text-gray-500"
                  placeholder="Supplier Address"
                ></textarea>
              </div>
            </div>
          </div>

          <hr className="my-4 dark:bg-white bg-black h-[1.5px]" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border rounded-lg p-4">
            <div>
              <label className="block text-gray-700 dark:text-white">
                TourCMS Channel Code
              </label>
              <input
                {...register("tourCmsCode")}
                className="w-full p-2 border rounded dark:placeholder:text-gray-500"
                type="text"
                placeholder="TourCMS Channel Code"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-white">
                Ventra API Key
              </label>
              <input
                {...register("ventraApiKey")}
                className="w-full p-2 border rounded dark:placeholder:text-gray-500"
                type="text"
                placeholder="Ventra API Key"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-white">
                Fareharbor Supplier Shortname
              </label>
              <input
                {...register("fareharborShortname")}
                className="w-full p-2 border rounded dark:placeholder:text-gray-500"
                type="text"
                placeholder="Fareharbor Shortname"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-white">
                Active / Inactive
              </label>
              <select
                {...register("active")}
                className="w-full p-2 border rounded text-gray-500"
              >
                <option value="" selected disabled>
                  Choose one option
                </option>
                <option className="dark:text-white text-black" value="Inactive">
                  Inactive
                </option>
                <option className="dark:text-white text-black" value="Active">
                  Active
                </option>
              </select>
            </div>
          </div>

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
