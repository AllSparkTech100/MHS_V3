import { useState } from "react";

function Book() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    country: '',
    state: '',
    province: '',
    therapyQuestions: [],
    therapyPreferences: '',
  });

  const [errors, setErrors] = useState({});

  const therapyQuestions = [
    'Select',
    'Stress Management',
    'Anxiety Reduction',
    'Depression Therapy',
    'Couples Counseling',
    'Grief Counseling',
  ];

  const handleNext = () => {
    const currentErrors = validateForm();
    if (Object.keys(currentErrors).length === 0) {
      setStep((prev) => prev + 1);
    } else {
      setErrors(currentErrors);
    }
  };

  const handlePrev = () => setStep((prev) => prev - 1);

  const validateForm = () => {
    const currentErrors = {};
    if (step === 1) {
      if (!formData.fullname) currentErrors.fullname = 'Full name is required';
      if (!formData.gender) currentErrors.gender = 'Gender is required';
      if (!formData.phone) currentErrors.phone = 'Phone number is required';
      if (!formData.email) currentErrors.email = 'Email is required';
    }
    if (step === 2) {
      if (!formData.address) currentErrors.address = 'Address is required';
      if (!formData.country) currentErrors.country = 'Country is required';
      if (!formData.state) currentErrors.state = 'State is required';
      if (!formData.province) currentErrors.province = 'Province is required';
    }
    if (step === 3) {
      if (formData.therapyQuestions.length === 0)
        currentErrors.therapyQuestions = 'Please select at least one therapy question';
      if (!formData.therapyPreferences)
        currentErrors.therapyPreferences = 'Therapy preferences are required';
    }
    return currentErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'therapyQuestions') {
        setFormData((prev) => ({
          ...prev,
          therapyQuestions: checked
            ? [...prev.therapyQuestions, value]
            : prev.therapyQuestions.filter((item) => item !== value),
          // therapyPreferences.value
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const progress = (step / 3) * 100;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   console.log(formData);
    //   alert("message sent")
    // }
    // catch (error) {
    //   alert(error.new)
    // }
    // setFormData();

    // console.log(formData);
  }

  return (
    <div className="p-8 container rounded-lg shadow-2xl bg-white/40 w-full">
      <div className="mb-6">
        <div className="h-3 lg:h-4 bg-gray-200 rounded-full">
          <div
            className="h-3 lg:h-4 bg-blue-500 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">Step {step} of 3</p>
      </div>

      {step === 1 && (
        <>
          <h2 className="text-xl font-bold mb-4">Personal Information</h2>
          <div className="mb-4">
            <label className="text-lg font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full px-4 py-2 border-black border-2 focus:outline-none focus:border-orange-600"
            />
            {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}
          </div>
          <div className="mb-4">
            <label className="text-lg font-medium text-gray-700">Gender</label>
            <div className="flex items-center space-x-4">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                  className="mr-2"
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                  className="mr-2"
                />
                Female
              </label>
            </div>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
          </div>
          <div className="mb-4">
            <label className="text-lg font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border-black border-2 focus:outline-none focus:border-orange-600"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          <div className="mb-4">
            <label className="text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border-black border-2 focus:outline-none focus:border-orange-600"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="text-xl font-bold mb-4">Address Information</h2>
          <div className="mb-4">
            <label className="text-lg font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border-black border-2 focus:outline-none focus:border-orange-600"
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>
          <div className="mb-4">
            <label className="text-lg font-medium text-gray-700">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-2 border-black border-2 focus:outline-none focus:border-orange-600"
            />
            {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
          </div>
          <div className="mb-4">
            <label className="text-lg font-medium text-gray-700">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-2 border-black border-2 focus:outline-none focus:border-orange-600"
            />
            {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
          </div>
          <div className="mb-4">
            <label className="text-lg font-medium text-gray-700">Province</label>
            <input
              type="text"
              name="province"
              value={formData.province}
              onChange={handleChange}
              className="w-full px-4 py-2 border-black border-2 focus:outline-none focus:border-orange-600"
            />
            {errors.province && <p className="text-red-500 text-sm">{errors.province}</p>}
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h2 className="text-xl font-bold mb-4">Therapy Questions</h2>
          <h2 className="text-xl font-bold mb-4">Therapy Questions</h2>
          <div className="mb-4">
            <label className="block text-gray-700">What are your concerns?</label>
            {therapyQuestions.map((question, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="therapyQuestions"
                  value={question}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>{question}</span>
              </div>
            ))}
            {errors.therapyQuestions && (
              <p className="text-red-500 text-sm">{errors.therapyQuestions}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Therapy Preferences</label>
            <input
              type="text"
              name="therapyPreferences"
              value={formData.therapyPreferences}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-black focus:border-orange-500 rounded-md"
            />
            {errors.therapyPreferences && (
              <p className="text-red-500 text-sm">{errors.therapyPreferences}</p>
            )}
          </div>
        </>
      )}

      <div className="flex justify-between mt-6">
        {step > 1 && (
          <button
            onClick={handlePrev}
            className="bg-gray-300 px-2 py-3 hover:bg-gray-400"
          >
            Previous
          </button>
        )}
        {step < 3 ? (
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-8 py-2 hover:bg-blue-600"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-2 py-3 rounded-md hover:bg-green-600"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Book;