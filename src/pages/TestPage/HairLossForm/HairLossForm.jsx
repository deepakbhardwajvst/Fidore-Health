"use client"
import { useState } from 'react';
import "./HairLossForm.css"
const HairLossForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        age: '',
        hairLossStage: '',
        familyHistory: '',
        healthIssues: '',
    });

    const [currentStep, setCurrentStep] = useState(1);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const renderFormStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="mb-4">
                        {/* Step 1: Basic Information */}
                        <label className="block text-black text-sm font-bold mb-2">
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </label>
                        <button
                            onClick={() => {
                                if (formData.name) {
                                    setCurrentStep(2);
                                } else {
                                    alert("Please enter your name.");
                                }
                            }}
                            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Next
                        </button>
                    </div>
                );

            case 2:
                return (
                    <div className="mb-4">
                        {/* Step 2: Phone Number */}
                        <label className="block text-black text-sm font-bold mb-2">
                            Phone Number:
                            <input
                                type="tel"
                                name="number"
                                value={formData.number}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </label>
                        <button
                            onClick={() => {
                                if (formData.number) {
                                    setCurrentStep(3);
                                } else {
                                    alert("Please enter your phone number.");
                                }
                            }}
                            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Next
                        </button>
                    </div>
                );

            case 3:
                return (
                    <div className="mb-4">
                        {/* Step 3: Email */}
                        <label className="block text-black text-sm font-bold mb-2">
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </label>
                        <button
                            onClick={() => {
                                if (formData.email) {
                                    setCurrentStep(4);
                                } else {
                                    alert("Please enter your email.");
                                }
                            }}
                            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Next
                        </button>
                    </div>
                );

            case 4:
                return (
                    <div className="mb-4">
                        {/* Step 4: Age */}
                        <label className="block text-black text-sm font-bold mb-2">
                            Age:
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </label>
                        <button
                            onClick={() => {
                                if (formData.age) {
                                    setCurrentStep(5);
                                } else {
                                    alert("Please enter your age.");
                                }
                            }}
                            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Next
                        </button>
                    </div>
                );

            case 5:
                return (
                    <div className="mb-4">
                        {/* Step 5: Hair Loss Stage */}
                        <label className="block text-black text-sm font-bold mb-2">
                            Have you experienced any of the below in the last 1 year?
                        </label>

                        <div>
                            <label className="block text-black text-sm mb-2">
                                <input
                                    type="radio"
                                    name="hairLossStage"
                                    value="Severe Illness (Dengue, Malaria, Typhoid or Covid)"
                                    checked={formData.hairLossStage === "Severe Illness (Dengue, Malaria, Typhoid or Covid)"}
                                    onChange={handleInputChange}
                                    className="mr-2"
                                />
                                Severe Illness (Dengue, Malaria, Typhoid or Covid)
                            </label>

                            <label className="block text-black text-sm mb-2">
                                <input
                                    type="radio"
                                    name="hairLossStage"
                                    value="Heavy weight loss / heavy weight gain4.Surgery / heavy medication"
                                    checked={formData.hairLossStage === "Heavy weight loss / heavy weight gain4.Surgery / heavy medication"}
                                    onChange={handleInputChange}
                                    className="mr-2"
                                />
                                Heavy weight loss / heavy weight gain4.Surgery / heavy medication
                            </label>

                            <label className="block text-black text-sm mb-2">
                                <input
                                    type="radio"
                                    name="hairLossStage"
                                    value="None"
                                    checked={formData.hairLossStage === "None"}
                                    onChange={handleInputChange}
                                    className="mr-2"
                                />
                                None
                            </label>
                        </div>

                        <button
                            onClick={() => {
                                if (formData.hairLossStage) {
                                    setCurrentStep(6);
                                } else {
                                    alert("Please select a hair loss stage.");
                                }
                            }}
                            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Next
                        </button>
                    </div>
                );

            case 6:
                return (
                    <div className="mb-4">
                        {/* Step 6: Family History */}
                        <label className="block text-black text-sm font-bold mb-2">
                            Do you have a family history of hair loss?
                        </label>

                        <div>
                            <label className="block text-black text-sm mb-2">
                                <input
                                    type="radio"
                                    name="familyHistory"
                                    value="Mother or anyone from mother's side of the family"
                                    checked={formData.familyHistory === "Mother or anyone from mother's side of the family"}
                                    onChange={handleInputChange}
                                    className="mr-2"
                                />
                                Mother or anyone from mother's side of the family
                            </label>

                            <label className="block text-black text-sm mb-2">
                                <input
                                    type="radio"
                                    name="familyHistory"
                                    value="Father or anyone from father's side of the family"
                                    checked={formData.familyHistory === "Father or anyone from father's side of the family"}
                                    onChange={handleInputChange}
                                    className="mr-2"
                                />
                                Father or anyone from father's side of the family
                            </label>

                            <label className="block text-black text-sm mb-2">
                                <input
                                    type="radio"
                                    name="familyHistory"
                                    value="Both"
                                    checked={formData.familyHistory === "Both"}
                                    onChange={handleInputChange}
                                    className="mr-2"
                                />
                                Both
                            </label>

                            <label className="block text-black text-sm mb-2">
                                <input
                                    type="radio"
                                    name="familyHistory"
                                    value="None"
                                    checked={formData.familyHistory === "None"}
                                    onChange={handleInputChange}
                                    className="mr-2"
                                />
                                None
                            </label>
                        </div>

                        <button
                            onClick={() => {
                                if (formData.familyHistory) {
                                    setCurrentStep(7);
                                } else {
                                    alert("Please select a family history option.");
                                }
                            }}
                            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Next
                        </button>
                    </div>
                );



            case 7:
                const isNextButtonDisabled = !formData.healthIssues;
                const showErrorMessage = !formData.healthIssues && formData.attemptedNext;

                return (
                    <div className="mb-4">
                        {/* Step 7: Health Issues */}
                        <label className="block text-black text-sm font-bold mb-2">
                            Do you have any health issues related to hair loss?
                        </label>

                        <div>
                            <label className="block text-black text-sm mb-2">
                                <input
                                    type="radio"
                                    name="healthIssues"
                                    value="Yes"
                                    checked={formData.healthIssues === "Yes"}
                                    onChange={handleInputChange}
                                    className="mr-2"
                                />
                                Yes
                            </label>

                            <label className="block text-black text-sm mb-2">
                                <input
                                    type="radio"
                                    name="healthIssues"
                                    value="No"
                                    checked={formData.healthIssues === "No"}
                                    onChange={handleInputChange}
                                    className="mr-2"
                                />
                                No
                            </label>
                        </div>

                        {showErrorMessage && (
                            <p className="text-red-500 text-sm">Please select an option before proceeding.</p>
                        )}

                        <button
                            onClick={() => {
                                if (formData.healthIssues) {
                                    setCurrentStep(8);
                                    console.log(formData);
                                } else {
                                    setFormData((prevData) => ({ ...prevData, attemptedNext: true }));
                                }
                            }}
                            className={`bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isNextButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            disabled={isNextButtonDisabled}
                        >
                            Next
                        </button>
                    </div>
                );







            default:
                return (
                    <div className=" border-black">
                        <ul className="">
                            <li className="flex flex-col"><span className=' font-bold'>Name: </span><span>{formData.name}</span></li>
                            <li className="flex flex-col"><span className=' font-bold'>Number: </span><span>{formData.number}</span></li>
                            <li className="flex flex-col"><span className=' font-bold'>Email: </span><span>{formData.email}</span></li>
                            <li className="flex flex-col"><span className=' font-bold'>Age: </span><span>{formData.age}</span></li>
                            <li className="flex flex-col"><span className=' font-bold'>Hair Loss Stage: </span><span>{formData.hairLossStage}</span></li>
                            <li className="flex flex-col"><span className=' font-bold'>Family History: </span><span>{formData.familyHistory}</span></li>
                            <li className="flex flex-col"><span className=' font-bold'>Health Issues: </span><span>{formData.healthIssues}</span></li>
                        </ul>
                    </div>
                );
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-[100vw] h-[100vh]  flex justify-center items-center">
            <div className="border2 max-w-[320px] ">
                {renderFormStep()}
            </div>
        </form>
    );
};

export default HairLossForm;
